// @ts-check

import { readForm } from './form.mjs';
import { findAutomatedComment, getAutomatedMsg } from './message.mjs';
import { validateProjectLeads } from './validate.mjs';

/** @param {Toolkit} Toolkit */
export default async ({ github, context }) => {
  const issue = github.rest.issues.get({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo
  });
  const form = readForm(process.env.FORM_JSON);

  const warnings = validateProjectLeads(form['Project Leads']);

  const automatedCommentPromise = findAutomatedComment({github, context})

  const alreadyHadError = (await issue).data.labels
    .map((label) => {
      if (typeof label === 'string') {
        return label;
      }
      return label.name ?? '';
    })
    .includes('error');

  if (alreadyHadError && !warnings.length) {
    await github.rest.issues.removeLabel({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      name: 'error'
    });
  }
  if (!alreadyHadError && warnings.length) {
    await github.rest.issues.addLabels({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      labels: ['error']
    });
  }


  const automatedComment = await automatedCommentPromise
  // If no automated comment, don't make one... maybe another task didn't finish
  if (typeof  automatedComment !== 'undefined') {
    await github.rest.issues.updateComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: automatedComment,
      body: getAutomatedMsg({ warnings })
    });

  }
};

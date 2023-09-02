// @ts-check

import { validateProjectLeads } from "./validate.mjs";
import { readForm } from './form.mjs'
import { getAutomatedMsg } from "./message.mjs";

/** @param {Toolkit} Toolkit */
export default async ({ github, context }) => {

  const form = readForm(process.env.FORM_JSON)

  const warnings = validateProjectLeads(form["Project Leads"])

  let labels = [`year/${process.env.YEAR}`]
  if (warnings.length) {
    labels.push("error")
  }
  const label = github.rest.issues.addLabels({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    labels: labels
  });

  const comment = github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: getAutomatedMsg({warnings})
  });

  await Promise.all([label, comment]);
};

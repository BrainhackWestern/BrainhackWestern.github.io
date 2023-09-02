// @ts-check

/** @param {Toolkit} Toolkit */
export default async ({ github, context }) => {
  const issue = await github.rest.issues.get({
    owner: context.issue.owner,
    repo: context.issue.repo,
    issue_number: context.issue.number
  });
  issue.data.labels
    .map((label) => {
      if (typeof label === 'string') {
        return label;
      }
      return label.name ?? '';
    })
    .filter((label) => /^year\/\d{4}/.test(label))
    .map((label) => {
      return label.split('/')[1];
    });
};

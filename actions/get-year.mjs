// @ts-check

/** @param {Toolkit} Toolkit */
export default async ({ github, context }) => {
  const issue = await github.rest.issues.get({
    owner: context.issue.owner,
    repo: context.issue.repo,
    issue_number: context.issue.number
  });
  const yearLabels = issue.data.labels
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
  if (yearLabels.length > 1) {
    throw Error("Multiple year labels on issue")
  }
  if (yearLabels.length) {
    return yearLabels[0]
  }
  throw Error("No year labels found on issue")
};

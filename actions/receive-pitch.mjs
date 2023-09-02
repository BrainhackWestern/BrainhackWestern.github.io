// @ts-check

const RECEIPT_MSG = `
<!-- BRAINHACK_AUTOMATED_RECEIPT -->
<!-- Do not manually edit -->
<!-- USER_BODY -->
Thank you for pitching a project to Brainhack! We'll review your proposal shortly.
If you haven't already, be sure to
[register](https://brainhackwestern.github.io/forms/registration) for the event
<!-- END USER_BODY -->

<!-- WARNINGS -->
<!-- END WARNINGS -->
`
/** @param {Toolkit} Toolkit */
export default async ({ github, context }) => {
    const label = github.rest.issues.addLabels({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        labels: [`year/${process.env.YEAR}`]
    })

    const comment = github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: RECEIPT_MSG
    })

    await Promise.all([label, comment])
};

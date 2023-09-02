
const LEAD = "<!-- BRAINHACK_AUTOMATED_RECEIPT -->\n"

const DEFAULT_MSG = `
Thank you for pitching a project to Brainhack! We'll review your proposal shortly.
If you haven't already, be sure to [register](https://brainhackwestern.github.io/forms/registration) for the event`;
/**
 * @param {{
 *  body?: string;
 *  warnings?: string[]
 * }} options
 * */
export const getAutomatedMsg = ({body, warnings}) => {
  let text = LEAD;
  text += '<!-- Do not manually edit -->\n';
  text += '<!-- USER_BODY -->\n';
  text += (body ?? DEFAULT_MSG) + '\n';
  text += '<!-- END USER_BODY -->\n';
  text += '<!-- WARNINGS -->\n';
  if (warnings?.length) {
    text += '## Warnings';
  }
  text += (warnings ?? []).join('\n') + '\n';
  text += '<!-- END WARNINGS -->\n';
  return text;
};

/**
 *
 * @param {string} text
 */
export const isAutomatedMsg = (text) => {
    return text.startsWith(LEAD)
}

/** @param {Pick<Toolkit, 'github' | 'context'>} Toolkit */
export const findAutomatedComment = async ({ github, context }) => {
  const automatedComments = (
    await github.rest.issues.listComments({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo
    })
  ).data.filter((comment) => isAutomatedMsg(comment.body_text ?? ''));
  if (automatedComments.length > 1) {
    throw Error("More than one automated comment found!")
  }
  if (automatedComments.length) {
    return automatedComments[0].id
  }
  return undefined
};

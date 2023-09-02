const LEAD = '<!-- BRAINHACK_AUTOMATED_RECEIPT -->';

const DEFAULT_MSG = `
Thank you for pitching a project to Brainhack! We'll review your proposal shortly.
If you haven't already, be sure to [register](https://brainhackwestern.github.io/forms/registration) for the event`;
/**
 * @param {{
 *  body?: string;
 *  warnings?: string[]
 * }} options
 * */
export const getAutomatedMsg = ({ body, warnings }) => {
  let text = LEAD + "\n";
  text += '<!-- Do not manually edit -->\n';
  text += '<!-- USER_BODY -->\n';
  text += (body ?? DEFAULT_MSG) + '\n';
  text += '<!-- END USER_BODY -->\n';
  text += '<!-- WARNINGS -->\n';
  if (warnings?.length) {
    text += '## Warnings\n';
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
  console.log(LEAD)
  console.log(text)
  console.log(text.trim().startsWith(LEAD))
  return text.trim().startsWith(LEAD);
};

/** @param {Pick<Toolkit, 'github' | 'context'>} Toolkit */
export const findAutomatedComment = async ({ github, context }) => {
  const automatedComments = (
    await github.rest.issues.listComments({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo
    })
  ).data.filter((comment) => isAutomatedMsg(comment.body ?? ''));

  if (automatedComments.length > 1) {
    throw Error('More than one automated comment found!');
  }
  if (automatedComments.length) {
    return automatedComments[0].id;
  }
  return undefined;
};

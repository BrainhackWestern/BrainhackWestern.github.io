/**
 * @param {string} projectLeads
 */
export const validateProjectLeads = (projectLeads) => {
  const badProjectLeads = projectLeads.split('\n').filter((line) => {
    return !/^[\w\s]+\s\(\s*@[a-zA-Z0-9](?:-(?=[a-zA-Z0-9])|[a-zA-Z0-9]){0,38}(?<=[a-zA-Z0-9])\s*\)\s*/.test(
      line
    );
  });

  return badProjectLeads.length
    ? [
        `
Looks like you haven't formatted your Project Leads correctly. Each lead should
be on a single line, and should be followed by a github username in parentheses
(e.g. \`Brain Hacker (@brainhackwestern)\`). Please update the form to fix the error.
        `.replace("\n", " "),
        "```",
        ...badProjectLeads.map((s) => `!- ${s}`),
        "```"
      ]
    : [];
};

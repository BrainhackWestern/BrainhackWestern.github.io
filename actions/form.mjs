/**
 * @param {string | undefined} form
 * @returns {{
*  Title: string;
*  Description: string;
*  ["Project Leads"]: string;
 * }}
 */
export const readForm = (form) => {
  return JSON.parse(form ?? '{}');
}
import EmailDisplay from './display';

export const generateStaticParams = async () => {
  return []
};

const getEmail = async (name: string) => {
  const mjml = await import(`../../../../emails/templates/${name}`)
  return mjml.default
};

const Email = async ({params: {email: emailId}}: {params: {email: string}}) => {
  if (process.env.NODE_ENV === "production") {
    return null
  }
  const email = await getEmail(emailId)
  return <EmailDisplay content={email}/>
};

export default Email;

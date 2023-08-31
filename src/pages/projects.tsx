import { pipeInto } from 'ts-functional-pipe';
import { ensureCurrentProjectYear, inferRegistrationStatus, readConfig } from '../lib/data';

const getProjectConfig = async () =>
  // prettier-ignore
  await pipeInto(
    await readConfig(),
    inferRegistrationStatus,
    async (c) => ensureCurrentProjectYear(await c)
  );

export const getStaticProps = async () => {
  const config = await getProjectConfig();
  const year = Object.keys(config.projects || {})
    .sort()
    // .reverse()
    .pop();
  if (year) {
    return {
      redirect: {
        destination: `/projects/${year}`,
        permanent: false,
      }
    }
  }
  return {
    notFound: true
  }
};

const ProjectsRedirect = () => {}

export default ProjectsRedirect
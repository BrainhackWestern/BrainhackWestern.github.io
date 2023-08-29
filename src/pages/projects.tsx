import type { InferGetStaticPropsType } from 'next';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import slugify from 'slugify';
import { Console } from '../components/console';
import Footer, { getFooterProps } from '../components/footer';
import NameLister from '../components/name-lister';
import { NavBar } from '../components/navbar';
import { RegisterButton } from '../components/register-button';
import { inferRegistrationStatus, readConfig } from '../lib/data';
import style from '../styles/globals.css';
import Markdown from '../components/markdown';

export const getStaticProps = async () => {
  const config = await inferRegistrationStatus(await readConfig());
  return {
    props: {
      config
    }
  };
};

const ProjectPage = ({
  config
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={style.home.app}>
      <Helmet>
        <title>{`Projects - Brainhack Western ${config.event.year}`}</title>
        <meta
          name="description"
          content="Projects Pitched at Brainhack Western"
        />
      </Helmet>
      <NavBar
        displaySections={config.displaySections}
        registrationButton={
          config.registration.status === 'open' ? (
            <RegisterButton settings={config.registration} />
          ) : null
        }
      />
      <article className={`container-lg ${style.content.content}`}>
        <h1>Projects</h1>
        {config.projects?.[2022].map((project) => {
          return (
            <section key={slugify(project.title, { remove: /[*+~.()'"!:@]/g })}>
              <h3>{project.title}</h3>
              <Console>
                <Markdown >
                  {project.description}
                </Markdown>
                <NameLister
                  heading="Organizer"
                  names={project.organizers}
                  headingClassName="green"
                  bulletedList
                />
              </Console>
            </section>
          );
        })}
      </article>
      <Footer {...getFooterProps(config)} />
    </div>
  );
};

export default ProjectPage;

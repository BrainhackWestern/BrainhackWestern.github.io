import type { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import slugify from 'slugify';
import { pipeInto } from 'ts-functional-pipe';
import Article from '../../components/article';
import Callout from '../../components/callout';
import { Console } from '../../components/console/console';
import NameLister from '../../components/console/name-lister';
import Markdown from '../../components/markdown';
import Page from '../../components/page';
import ProjectYearSelect from '../../components/project-year-select';
import { RegisterButton } from '../../components/register-button';
import {
  ensureCurrentProjectYear,
  inferRegistrationStatus,
  readConfig
} from '../../lib/data';
import { textSize } from '../../styles/variables.css';
import { Button } from '../../components/button';

const getProjectConfig = async () =>
  // prettier-ignore
  await pipeInto(
    await readConfig(),
    inferRegistrationStatus,
    async (c) => ensureCurrentProjectYear(await c)
  );

export const getStaticProps = async () => {
  const config = await getProjectConfig();
  if (!Object.keys(config.projects ?? {}).length) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      config: config
    }
  };
};

export const getStaticPaths = async () => {
  const config = await getProjectConfig();
  return {
    paths: Object.keys(config.projects || {}).map((year) => {
      return { params: { project: year } };
    }),
    fallback: false
  };
};

const ProjectPage = ({
  config
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { project: currentYear } = router.query as {
    project: string;
  };

  // If no paths are found by `getStaticPaths` (e.g. because there is no)
  // project key in config.yaml, NextJs requests a fallback even though fallback
  // is set to false. In this case, config===undefined, so abort early
  if (router.isFallback) {
    return null;
  }

  const changeYear = (year: string) => {
    if (year !== currentYear) {
      router.push(`/projects/${year}`);
    }
  };

  const registrationUnopened = () => (
    <Callout>
      <Row className="align-items-center">
        <Col as="p" lg="6">
          Project Submission for Brainhack Western {config.currentYear} will
          open soon!
          <br />
          In the meantime, check out the project pitches from previous years.
        </Col>
        <Col lg="6">
          <RegisterButton
            settings={config.registration}
            alignment="center"
            eventTimespan={config.event.eventTimespan}
          />
        </Col>
      </Row>
    </Callout>
  );

  const noProjectsYet = () => (
    <Callout>
      <Row>
        <Col lg="6" className="d-flex flex-column align-items-center">
          <h2>No projects yet!</h2>
          <br />
          <p style={{ fontSize: textSize.lg }}>Be the first to submit</p>
        </Col>
        <Col lg="6">
          <Row>
            <Col
              xxl="6"
              className="d-flex flex-column align-items-center justify-content-between"
            >
              <p style={{ fontSize: textSize.lg }}>Start by registering</p>
              <RegisterButton
                settings={config.registration}
                alignment="center"
                eventTimespan={config.event.eventTimespan}
              />
            </Col>
            <Col
              xxl="6"
              className="d-flex flex-column align-items-center justify-content-between"
            >
              <p style={{ fontSize: textSize.lg }}>Then submit a project</p>
              <Button target={config.registration.projectPitchUrl}>Submit Project Pitch</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Callout>
  );

  return (
    <Page
      config={config}
      title={`Projects - Brainhack Western ${config.event.year}`}
      description="Projects Pitched at Brainhack Western"
      registrationButton
    >
      <Article>
        <h1>Projects</h1>
        {config.registration.status === 'unopened'
          ? registrationUnopened()
          : null}
        <ProjectYearSelect
          years={Object.keys(config.projects ?? {})}
          changeYear={changeYear}
          def={currentYear}
        />
        {config.projects?.[parseInt(currentYear)]?.map((project) => {
          const slug = slugify(project.title, { remove: /[*+~.()'"!:@]/g });
          return (
            <section key={slug} id={slug}>
              <h3>{project.title}</h3>
              <Console>
                <Markdown>{project.description}</Markdown>
                {project.url ? (
                  <div>
                    <span className="blue">URL: </span>{' '}
                    <a href={project.url}>{project.url}</a>
                  </div>
                ) : null}
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
        {!config.projects?.[parseInt(currentYear)].length &&
        config.registration.status !== 'unopened'
          ? noProjectsYet()
          : null}
      </Article>
    </Page>
  );
};

export default ProjectPage;

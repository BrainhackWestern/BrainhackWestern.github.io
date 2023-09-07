import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DateTime } from 'luxon';
import React from 'react';
import slugify from 'slugify';
import { ValuesType } from 'utility-types';
import Article from '../../../components/article';
import Callout from '../../../components/callout';
import { Console } from '../../../components/console/console';
import NameLister from '../../../components/console/name-lister';
import Col from '../../../components/layout/col';
import Row from '../../../components/layout/row';
import Markdown from '../../../components/markdown';
import Page from '../../../components/page';
import ProjectYearSelect from '../../../components/project-year-select';
import { RegisterButton } from '../../../components/register-button';
import {
  getCurrentYear,
  getEventYear,
  getProjectInfo,
  getRegistrationStatus,
  readConfig
} from '../../../lib/data';
import SubmitProject from './submit-project.component';

export const generateStaticParams = async () => {
  const projects = await getProjectInfo();
  return Object.keys(projects || {}).map((year) => {
    return { project: year };
  });
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Projects - Brainhack Western ${await getEventYear()}`,
    description: 'Projects pitched at Brainhack Western'
  };
};

const ProjectPage = async ({
  params: { project: currentYear }
}: {
  params: ValuesType<Awaited<ReturnType<typeof generateStaticParams>>>;
}) => {
  const config = await readConfig();
  const projects = await getProjectInfo();
  const registrationStatus = await getRegistrationStatus();

  if (!Object.keys(projects).length) {
    notFound();
  }

  // If no paths are found by `getStaticPaths` (e.g. because there is no)
  // project key in config.yaml, NextJs requests a fallback even though fallback
  // is set to false. In this case, config===undefined, so abort early
  // if (router.isFallback) {
  //   return null;
  // }

  const registrationUnopened = () => (
    <Callout>
      <Row>
        <Col
          as="p"
          lg="6"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          Project Submission for Brainhack Western {getCurrentYear()} will open
          soon!
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

  return (
    <Page config={config} registrationButton>
      <Article>
        <h1>Projects</h1>
        {registrationStatus === 'unopened' ? registrationUnopened() : null}
        <ProjectYearSelect years={Object.keys(projects)} def={currentYear} />
        {parseInt(currentYear) === config.event.year &&
        registrationStatus !== 'unopened' &&
        DateTime.now() < DateTime.fromObject(config.event.endDate) ? (
          <SubmitProject
            noProjectsYet={!projects[parseInt(currentYear)]?.length}
          />
        ) : null}
        {projects[parseInt(currentYear)]?.map((project) => {
          const slug = slugify(project.title, { remove: /[*+~.()'"!:@]/g });
          return (
            <section key={slug} id={slug}>
              <h3>{project.title}</h3>
              <Console>
                <Markdown>{project.description}</Markdown>
                {project.url ? (
                  <div>
                    <span className="blue">URL: </span>{' '}
                    <Link href={project.url}>{project.url}</Link>
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
      </Article>
    </Page>
  );
};

export default ProjectPage;

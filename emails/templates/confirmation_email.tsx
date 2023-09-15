import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlRaw,
  MjmlSection,
  MjmlTitle
} from '@faire/mjml-react';
import React from 'react';
import { Button } from '../components/button';
import { FontImports } from '../components/fonts';
import { Footer } from '../components/footer';
import { Heading } from '../components/heading';
import { Link } from '../components/link';
import { Paragraph } from '../components/paragraph';
import { Table } from '../components/table';

const mjml = (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Registration Confirmed</MjmlTitle>
      <MjmlPreview>We have received your registration...</MjmlPreview>
      <FontImports />
    </MjmlHead>
    <MjmlBody backgroundColor="#f2f2f2">
      <MjmlSection textAlign="center">
        <MjmlColumn>
          <MjmlImage
            width={200}
            src="https://brainhack-western.imgix.net/img/brainhack_logo.png?w=200&exp=1"
          />
          <Heading large>Registration Confirmed!</Heading>
          <Paragraph>
            We're so excited for you to join us at this year's Brainhack!
            <br />
            <br />
            You'll find your registration details and receipt attached to this
            email. You'll also receive another email from Stripe confirming your
            payment. Check the{' '}
            <a href="https://brainhackwestern.github.io">
              brainhack website
            </a>{' '}
            (https://brainhackwestern.github.io) for event and schedule updates.
          </Paragraph>
        </MjmlColumn>
      </MjmlSection>
      <MjmlRaw>{'{{#show_pitch_link}}'}</MjmlRaw>
      <MjmlSection padding={0}>
        <MjmlColumn padding={0}>
          <Paragraph>
            The next step is to pitch a project! Follow the link below!
          </Paragraph>
          <Button href="https://github.com/BrainhackWestern/BrainhackWestern.github.io/issues/new?assignees=&labels=pitch&projects=&template=project-pitch.yml&title=%5BPitch%5D%3A+">
            Pitch a project
          </Button>
        </MjmlColumn>
      </MjmlSection>
      <MjmlRaw>{'{{/show_pitch_link}}'}</MjmlRaw>
      <MjmlSection>
        <MjmlColumn>
          <MjmlDivider borderColor="#0f0f0f" borderWidth={1} />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <Heading>Event Details</Heading>
          <Table>
            <tr>
              <td>Start:</td>
              <td>Wednesday, Nov 1 | 8:00 am</td>
            </tr>
            <tr>
              <td>End:</td>
              <td>Friday, Nov 3 | 4:30 pm</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                <Link href="https://goo.gl/maps/K4x8kgaK4d14rUkq6">
                  Western Interdisciplinary Research Building
                </Link>
              </td>
            </tr>
          </Table>
        </MjmlColumn>
      </MjmlSection>
      <Footer />
    </MjmlBody>
  </Mjml>
);

export default mjml;

import React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlDivider
} from '@faire/mjml-react';

import { FontImports } from '../components/fonts';
import { Heading } from '../components/heading';
import { Paragraph } from '../components/body';
import { Table } from '../components/table';
import { Link } from '../components/link';
import { Footer } from '../components/footer';

const mjml = (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Registration Confirmed</MjmlTitle>
      <MjmlPreview>We have received your registration...</MjmlPreview>
      <FontImports />
    </MjmlHead>
    <MjmlBody backgroundColor="#1e1e1e">
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
          <MjmlDivider borderColor="#f9f9f9" borderWidth={1} />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <Heading>Event Details</Heading>
          <Table>
            <tr>
              <td>Start:</td>
              <td>Wednesday, Nov 1 - 8:00 am</td>
            </tr>
            <tr>
              <td>End:</td>
              <td>Friday, Nov 3 - 4:30 pm</td>
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
import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlTitle
} from '@faire/mjml-react';
import React from 'react';
import { FontImports } from '../components/fonts';
import { Footer } from '../components/footer';
import { Heading } from '../components/heading';
import { Link } from '../components/link';
import { Paragraph } from '../components/paragraph';
import { Table } from '../components/table';

const mjml = (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Registration Open!</MjmlTitle>
      <MjmlPreview>
        Brainhack Western 2023 registration is now open...
      </MjmlPreview>
      <FontImports />
    </MjmlHead>
    <MjmlBody backgroundColor="#f2f2f2">
      <MjmlSection textAlign="center">
        <MjmlColumn>
          <MjmlImage
            width={200}
            src="https://brainhack-western.imgix.net/img/brainhack_logo.png?w=200&exp=1"
          />
          <Heading large>Registration is now open</Heading>
          <Paragraph>
            Register now to join us for this year's Brainhack!
            <br />
            <br />
            Find all the details on the{' '}
            <a href="https://brainhackwestern.github.io">
              Brainhack Website
            </a>{' '}
            (https://brainhackwestern.github.io)
          </Paragraph>
          <MjmlSpacer height={50} />
          <MjmlButton
            backgroundColor="#9f30ff"
            fontSize={24}
            fontFamily="Montserrat, Verdana, sans-serif"
            href="https://brainhackwestern.github.io/forms/registration"
          >
            Register Now
          </MjmlButton>
          <Paragraph>
            Or paste this url into your browser:
            <br />
            https://brainhackwestern.github.io/forms/registration
          </Paragraph>
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

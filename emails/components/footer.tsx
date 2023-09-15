import { MjmlColumn, MjmlImage, MjmlSection } from '@faire/mjml-react';
import React from 'react';
import { Paragraph } from './paragraph';
import { Link } from './link';

export const Footer = () => {
  return (
    <MjmlSection>
      <MjmlColumn>
        <MjmlImage
          width="100px"
          align="left"
          src="https://brainhack-western.imgix.net/img/brainhack_logo.png?w=200&exp=1"
        ></MjmlImage>
      </MjmlColumn>
      <MjmlColumn verticalAlign='middle'>
        <Paragraph small>
          <Link href="https://brainhackwestern.github.io/" />
        </Paragraph>
        <Paragraph small>Copyright © 2023 Brainhack Western</Paragraph>
      </MjmlColumn>
    </MjmlSection>
  );
};

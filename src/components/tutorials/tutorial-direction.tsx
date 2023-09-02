'use client';

import React, { PropsWithChildren, useContext } from 'react';
import { ScreenSizeContext, screenSizes } from '../../services/screen-size';
import Reversable from '../reversable';

const TutorialDirection = ({
  children,
  reversable
}: PropsWithChildren<{ reversable: boolean }>) => {
  const screenSize = useContext(ScreenSizeContext);
  const largeScreen = screenSize >= screenSizes['lg'];

  const reverse = reversable && largeScreen;
  return <Reversable reversed={reverse}>{children}</Reversable>;
};

export default TutorialDirection;

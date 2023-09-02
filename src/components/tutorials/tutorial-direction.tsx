'use client';

import React, { PropsWithChildren, useContext } from 'react';
import ScreenSizeContext from '../../services/screen-size/context';
import { screenSizes } from '../../services/screen-size/use';
import Reversable from '../reversable';

const TutorialDirection = ({
  children,
  reversable
}: PropsWithChildren<{ reversable: boolean }>) => {
  const {
    state: { screenSize }
  } = useContext(ScreenSizeContext);
  const largeScreen = screenSize >= screenSizes['lg'];

  const reverse = reversable && largeScreen;
  return <Reversable reversed={reverse}>{children}</Reversable>;
};

export default TutorialDirection;

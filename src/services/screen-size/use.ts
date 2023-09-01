'use client'

import { useContext } from 'react';
import ScreenSizeContext, {
  ScreenSizeContextType,
  ScreenSizeProviderType
} from './context';

function isProviderType(
  value: ScreenSizeContextType
): value is ScreenSizeProviderType {
  return value !== undefined;
}

function useScreenSize() {
  const value = useContext(ScreenSizeContext);
  if (!isProviderType(value))
    throw new Error('Components must be wrapped in ScreenSizeProvider');
  return value;
}

export const screenSizes = {
  xsm: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5
};

export default useScreenSize;

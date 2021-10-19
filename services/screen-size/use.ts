import { useContext } from 'react';
import ScreenSizeContext, { ScreenSizeContextType, ScreenSizeProviderType } from './context';

function isProviderType(value: ScreenSizeContextType): value is ScreenSizeProviderType {
  return value !== undefined
}

function useScreenSize() {
  const value = useContext(ScreenSizeContext);
  if (!isProviderType(value)) throw new Error("Components must be wrapped in ScreenSizeProvider");
  return value;
}

export default useScreenSize
  
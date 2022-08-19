import { useContext } from "react";
import ScrollPositionContext, {
  ScrollPositionContextType,
  ScrollPositionProviderType,
} from "./context";

function isProviderType(
  value: ScrollPositionContextType
): value is ScrollPositionProviderType {
  return value !== undefined;
}

function useScrollPosition() {
  const value = useContext(ScrollPositionContext);
  if (!isProviderType(value))
    throw new Error("Components must be wrapped in ScrollPositionProvider");
  return value;
}

export const screenSizes = {
  xsm: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
};

export default useScrollPosition;

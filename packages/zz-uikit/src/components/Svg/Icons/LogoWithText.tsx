import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 32" {...props}>
      <image width="160" height="32" href="/images/logo-text.png" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);

import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const CelebrityRecognition = (props) => (
  <Svg
    width={40}
    height={41}
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_54_44)">
      <Path
        d="M3.33334 28.8333V37.1667H11.6667"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.3333 37.1667H36.6667V28.8333"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.3333 3.83334H36.6667V12.1667"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.6667 3.83334H3.33334V12.1667"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 28.8333C13.3333 28.8333 15.8333 31.3333 20 31.3333C24.1667 31.3333 26.6667 28.8333 26.6667 28.8333"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 12.1667V19.6667C20 21.3333 18.3333 23 16.6667 23H15.8333"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.3333 12.1667V13.8333"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.6667 12.1667V13.8333"
        stroke="#6D25CC"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_54_44">
        <Rect
          width={40}
          height={40}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CelebrityRecognition;

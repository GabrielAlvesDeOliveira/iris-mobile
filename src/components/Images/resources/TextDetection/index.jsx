import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TextDetection = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 28V33C5 34.3807 6.11929 35.5 7.5 35.5H12.5"
      stroke="#3B50FF"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27.5 35.5H32.5C33.8807 35.5 35 34.3807 35 33V28"
      stroke="#3B50FF"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M35 13V8C35 6.61929 33.8807 5.5 32.5 5.5H27.5"
      stroke="#3B50FF"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 13V8C5 6.61929 6.11929 5.5 7.5 5.5H12.5"
      stroke="#3B50FF"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 13V29.6667"
      stroke="#3B50FF"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1667 13H20H25.8333"
      stroke="#3B50FF"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default TextDetection;
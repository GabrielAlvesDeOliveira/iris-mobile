import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const FaceDetection = (props) => (
  <Svg
    width={40}
    height={41}
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_54_40)">
      <Path
        d="M15 20.0833C14.4475 20.0833 13.9176 20.3028 13.5269 20.6935C13.1362 21.0842 12.9167 21.6141 12.9167 22.1667C12.9167 22.7192 13.1362 23.2491 13.5269 23.6398C13.9176 24.0305 14.4475 24.25 15 24.25C15.2736 24.25 15.5445 24.1961 15.7973 24.0914C16.05 23.9867 16.2797 23.8333 16.4731 23.6398C16.6666 23.4464 16.8201 23.2167 16.9247 22.9639C17.0294 22.7112 17.0833 22.4403 17.0833 22.1667C17.0833 21.8931 17.0294 21.6222 16.9247 21.3694C16.8201 21.1166 16.6666 20.887 16.4731 20.6935C16.2797 20.5001 16.05 20.3466 15.7973 20.2419C15.5445 20.1372 15.2736 20.0833 15 20.0833ZM25 20.0833C24.4475 20.0833 23.9176 20.3028 23.5269 20.6935C23.1362 21.0842 22.9167 21.6141 22.9167 22.1667C22.9167 22.7192 23.1362 23.2491 23.5269 23.6398C23.9176 24.0305 24.4475 24.25 25 24.25C25.5525 24.25 26.0824 24.0305 26.4731 23.6398C26.8638 23.2491 27.0833 22.7192 27.0833 22.1667C27.0833 21.6141 26.8638 21.0842 26.4731 20.6935C26.0824 20.3028 25.5525 20.0833 25 20.0833ZM20 3.83333C17.8113 3.83333 15.644 4.26443 13.6219 5.10201C11.5998 5.93959 9.76253 7.16724 8.21489 8.71489C5.08928 11.8405 3.33333 16.0797 3.33333 20.5C3.33333 24.9203 5.08928 29.1595 8.21489 32.2851C9.76253 33.8328 11.5998 35.0604 13.6219 35.898C15.644 36.7356 17.8113 37.1667 20 37.1667C24.4203 37.1667 28.6595 35.4107 31.7851 32.2851C34.9107 29.1595 36.6667 24.9203 36.6667 20.5C36.6667 18.3113 36.2356 16.144 35.398 14.1219C34.5604 12.0998 33.3328 10.2625 31.7851 8.71489C30.2375 7.16724 28.4002 5.93959 26.3781 5.10201C24.356 4.26443 22.1887 3.83333 20 3.83333ZM20 33.8333C16.4638 33.8333 13.0724 32.4286 10.5719 29.9281C8.07142 27.4276 6.66667 24.0362 6.66667 20.5C6.61667 20.0167 6.61667 19.55 6.66667 19.0667C10.6333 17.3333 13.7833 14.1167 15.4333 10.1167C18.55 14.5333 23.6167 17.1667 29.0333 17.1667C30.3 17.1667 31.55 17.0167 32.7833 16.7333C34.8667 23.8333 30.8333 31.2167 23.7667 33.2833C22.5 33.65 21.2667 33.8333 20 33.8333ZM0 3.83333C0 2.94928 0.35119 2.10143 0.976311 1.47631C1.60143 0.85119 2.44928 0.5 3.33333 0.5L10 0.5V3.83333H3.33333V10.5H0V3.83333ZM40 37.1667C40 38.0507 39.6488 38.8986 39.0237 39.5237C38.3986 40.1488 37.5507 40.5 36.6667 40.5H30V37.1667H36.6667V30.5H40V37.1667ZM3.33333 40.5C2.44928 40.5 1.60143 40.1488 0.976311 39.5237C0.35119 38.8986 0 38.0507 0 37.1667V30.5H3.33333V37.1667H10V40.5H3.33333ZM36.6667 0.5C37.5507 0.5 38.3986 0.85119 39.0237 1.47631C39.6488 2.10143 40 2.94928 40 3.83333V10.5H36.6667V3.83333H30V0.5H36.6667Z"
        fill="#1DB518"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_54_40">
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

export default FaceDetection;

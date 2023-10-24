import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlayIcon(props) {
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="-0.5 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="translate(-427 -3765) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
        d="M371 3605L371 3613 378 3609z"
      />
    </Svg>
  );
}

export default PlayIcon;

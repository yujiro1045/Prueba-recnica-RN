import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FlechaIcon(props) {
  return (
    <Svg
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      width="17px"
      height="20px"
      viewBox="0 0 8 8"
      xmlSpace="preserve"
      {...props}
    >
      <Path
        transform="rotate(-134.999 5.592 2.654)"
        d="M2.95 1.921H8.233V3.387H2.95z"
      />
      <Path d="M0.024 3.157H6.399V4.84H0.024z" />
      <Path
        transform="rotate(134.983 5.598 5.347)"
        d="M2.956 4.615H8.24V6.08H2.956z"
      />
    </Svg>
  );
}

export default FlechaIcon;

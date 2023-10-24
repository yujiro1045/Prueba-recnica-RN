import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon(props) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.56 2.171a1 1 0 00-1.12 0l-8 5.4A1 1 0 003 8.4V21a1 1 0 001 1h16a1 1 0 001-1V8.4a1 1 0 00-.44-.829zM14 20h-4v-6h4zm5 0h-3v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H5V8.932l7-4.725 7 4.725z" />
    </Svg>
  );
}

export default HomeIcon;

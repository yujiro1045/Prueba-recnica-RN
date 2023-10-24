import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProfileIcon(props) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 11a5 5 0 10-5-5 5.006 5.006 0 005 5zm0-8a3 3 0 11-3 3 3 3 0 013-3zM3 22v-4a5.006 5.006 0 015-5h8a5.006 5.006 0 015 5v4a1 1 0 01-2 0v-4a3 3 0 00-3-3H8a3 3 0 00-3 3v4a1 1 0 01-2 0z" />
    </Svg>
  );
}

export default ProfileIcon;

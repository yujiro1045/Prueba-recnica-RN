import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WalletIcon(props) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-wallet"
      {...props}
    >
      <Path d="M0 3a2 2 0 012-2h13.5a.5.5 0 010 1H15v2a1 1 0 011 1v8.5a1.5 1.5 0 01-1.5 1.5h-12A2.5 2.5 0 010 12.5V3zm1 1.732V12.5A1.5 1.5 0 002.5 14h12a.5.5 0 00.5-.5V5H2a1.99 1.99 0 01-1-.268zM1 3a1 1 0 001 1h12V2H2a1 1 0 00-1 1z" />
    </Svg>
  );
}

export default WalletIcon;

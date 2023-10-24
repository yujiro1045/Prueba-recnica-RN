import { View, Text, TouchableOpacity, Image } from "react-native";
import s from "./CustomButton.styles";
import { FlechaIcon, ReciclajeIcon } from "../icons";

const CustomButton = (props) => {
  const { text } = props;

  return (
    <TouchableOpacity style={s.button}>
      <ReciclajeIcon />
      <Text style={s.textButton}>{text}</Text>
      <FlechaIcon />
    </TouchableOpacity>
  );
};

export default CustomButton;

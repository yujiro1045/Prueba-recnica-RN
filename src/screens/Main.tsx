import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import s from "./Main.styles";

const Main = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={s.textContainer}>
          <Text style={s.text1}> Buenas tardes mutante, </Text>
          <Text style={s.text2}> Juan Medina </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;

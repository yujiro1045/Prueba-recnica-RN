import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import s from "./Inicio.styles";
import CustomButton from "../buttons/CustomButton";
import PlayIcon from "../icons/PlayIcon";

Dimensions.get("screen");

const Inicio = () => {
  return (
    <View style={s.root}>
      <View style={s.wrapper}>
        <View style={s.textContainer}>
          <Text style={s.saludo}> Buenas tardes biker, </Text>
          <Text style={s.nombre}> Juan Medina </Text>
        </View>
        <View>
          <Image style={s.img} source={require("../img/bmw.jpg")} />
          <View style={s.imgItems}>
            <View>
              <Text style={s.imgText}>Conoce nuestra</Text>
              <Text style={s.imgText}>FUERZA BIKER</Text>
            </View>
            <View style={s.play}>
              <PlayIcon />
            </View>
          </View>
          <Text style={s.nuevo}>Lo nuevo</Text>
        </View>
      </View>
      <View style={s.textContainer2}>
        <Text style={s.price}>$15.000 EN TOM NOODLESHOP</Text>
        <Text style={s.text1}>Muestra este cupón y obtén tu beneficio</Text>
        <Text style={s.text2}>25D1-WLCU-ES9F - UTILIZADO</Text>
        <Text style={s.text3}>
          *Tendrás 60 dias para redimirlo - Válido solo presencial
        </Text>
      </View>

      <CustomButton text="Solicitar recolección" />
    </View>
  );
};

export default Inicio;

import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  root: {
    flex: 1,
    borderWidth: 1,
    width: "100%",
    backgroundColor: "#212121",
  },
  wrapper: {
    alignSelf: "center",
    width: "90%",
  },
  textContainer: {
    justifyContent: "flex-start",
    marginBottom: 20,
    marginTop: 65,
  },
  saludo: {
    color: "#9E9E9E",
    fontSize: 20,
  },
  nombre: {
    color: "#FFFFFF",
    fontSize: 25,
  },
  nuevo: {
    color: "white",
    fontSize: 18,
    marginTop: 50,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    position: "absolute",
  },
  imgItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 110,
  },
  imgText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  play: {
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer2: {
    alignSelf: "center",
    alignContent: "flex-end",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#171717",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 20,
  },
  price: {
    color: "#C7E835",
    fontSize: 15,
    fontWeight: "bold",
  },
  text1: {
    color: "#FFFFFF",
  },
  text2: {
    color: "#FFFFFF",
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 11.3,
  },
  button: {
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "#C7E835",
    paddingBottom: 5,
  },
});

export default s;

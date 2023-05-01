import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 40,
    backgroundColor: "#8257e5",
  },

  containerDescription: {
    paddingBottom: 40,
  },

  topBar: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: "30%",
    height: "250%",
    marginRight: -20,
  },

  containDate: {
    marginBottom: 15,
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 25,
    lineHeight: 32,
    maxWidth: "100%",
    marginTop: 40,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    color: "#04d361",
    fontSize: 15,
    textAlign: "left",
  },
});

export default styles;

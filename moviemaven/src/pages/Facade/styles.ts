import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
    marginTop: -120,
  },

  title: {
    marginTop: -80,
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    height: 90,
    width: "100%",
    backgroundColor: "#04D361",
    borderRadius: 8,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonContent: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "25%",
    marginRight: "25%",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 20,
    marginLeft: 8,
  },

  textFooter: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: "100%",
    marginTop: 20,
  },

  textFooterBold: {
    fontWeight: "bold",
  },
});

export default styles;

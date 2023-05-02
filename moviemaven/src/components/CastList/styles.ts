import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: "center",
  },

  castImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },

  castName: {
    fontFamily: "Archivo_700Bold",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    color: "#04d361",
  },

  castCharacter: {
    fontSize: 10,
    color: "#fff",
    marginTop: 2,
    opacity: 0.7,
  },
});

export default styles;

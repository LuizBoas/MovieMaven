import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },

  picker: {
    height: 60,
    paddingHorizontal: 16,
    fontFamily: "Archivo_700Bold",
    marginBottom: 15,
  },

  pickerItem: {
    fontSize: 20,
    color: "#f0f0f7",
    backgroundColor: "#8257e5",
    fontFamily: "Poppins_400Regular",
  },

  input: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 14.5,
    fontFamily: "Poppins_400Regular",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 15,
  },

  movieList: {
    marginTop: -40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginBottom: 200,
  },
});

export default styles;

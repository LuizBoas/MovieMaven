import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },

  poster: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
  },

  info: {
    marginTop: -40,
  },

  releaseDate: {
    fontSize: 16,
    marginTop: 10,
  },

  overview: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 25,
  },

  movieList: {
    marginTop: -40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginBottom: 220,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%",
  },

  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },

  profile: {
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 12,
    paddingBottom: 25,
    justifyContent: "center",
  },

  post: {
    width: 150,
    height: 250,
    borderRadius: 1,
    backgroundColor: "#eee",
  },
});

export default styles;

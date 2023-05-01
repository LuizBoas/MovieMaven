import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 0.4,
    borderColor: "#8257e5",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 12,
    paddingBottom: 25,
    justifyContent: "center",
  },

  post: {
    width: 150,
    height: 250,
    borderRadius: 2,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },

  genres: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 40,
  },

  favoriteButton: {
    position: "absolute",
    bottom: 23,
    left: 10,
    backgroundColor: "#04D361",
    width: 53,
    height: 53,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  favorited: {
    backgroundColor: "#e33d3d",
  },

  shareButton: {
    position: "absolute",
    bottom: 23,
    left: 299,
    backgroundColor: "#8257e5",
    width: 53,
    height: 53,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 80,
  },
});

export default styles;

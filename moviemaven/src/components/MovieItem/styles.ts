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
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 5,
    justifyContent: "center",
  },

  post: {
    width: 150,
    height: 250,
    borderRadius: 1,
    backgroundColor: "#eee",
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
  },

  footer: {
    backgroundColor: "#fafafc",
    paddingBottom: 15,
    paddingTop: 12,
    alignItems: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  favoriteButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 80,
  },

  favorited: {
    backgroundColor: "#e33d3d",
  },

  shareButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 80,
  },
});

export default styles;

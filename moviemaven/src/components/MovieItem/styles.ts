import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    alignItems: "center",
    padding: 20,
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
    color: "#fafafc",
    paddingBottom: 24,
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
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#e33d3d",
  },

  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    height: 56,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;

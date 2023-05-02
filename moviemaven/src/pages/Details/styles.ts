import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPrime: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#fff",
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#fff",
  },

  container: {
    overflow: "hidden",
  },

  profile: {
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 12,
    paddingBottom: 25,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // definir a cor de fundo com transparência
  },

  genres: {
    fontFamily: "Poppins_400Regular",
    color: "#04d361",
    fontSize: 13,
    lineHeight: 25,
  },

  overview: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    marginTop: 20,
    fontSize: 18,
    lineHeight: 25,
  },

  castListContainer: {
    flex: 1,
  },

  subTitle: {
    fontFamily: "Archivo_700Bold",
    color: "#9170DD",
    marginTop: 20,
    fontSize: 20,
    lineHeight: 25,
    marginBottom: -20,
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    right: 20,
  },

  circleText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  contentContainer: {
    flex: 1,
    padding: 20,
  },

  post: {
    width: 150,
    height: 250,
    borderRadius: 1,
    backgroundColor: "#eee",
  },

  containerCastList: {
    paddingHorizontal: 4,
    marginBottom: 20,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
  },

  containerPainelHor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailIcon: {
    marginLeft: 10,
    marginRight: 2,
    opacity: 0.7,
  },

  detailText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    opacity: 0.7,
    fontSize: 13,
  },

  productionCompanies: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  textProductionCompanies: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 14,
  },
});

export default styles;

import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import backgroundImg from "../../assets/images/give-classes-background.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Página inicial do aplicativo MovieMaven.
 * Exibe uma imagem de fundo, um banner e um botão para navegar para a lista de filmes.
 * Também exibe o número atual de títulos disponíveis usando a API The Movie DB.
 */
function Facade() {
  const { navigate } = useNavigation();
  const [countMovie, setCountMovie] = useState(0);

  /**
   * Obtém o número atual de títulos de filmes disponíveis a
   * partir da API The Movie DB ao montar o componente
   */
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=2ac0e6167cf0d7a5c8a6afdace6a8808`
    )
      .then((response) => response.json())
      .then((data) => setCountMovie(data.total_results))
      .catch((error) => console.error(error));
  }, []);

  function handleNavigateToMoviesTabsPages() {
    navigate("MoviesTabs");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        style={styles.imageBackground}
        resizeMode="contain"
      >
        <Image source={landingImg} style={styles.banner} />

        <Text style={styles.title}>
          Seja bem-vindo, {"\n"}
          <Text style={styles.titleBold}>
            encontre seus filmes favoritos e nunca mais perca um lançamento.
          </Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton
            onPress={handleNavigateToMoviesTabsPages}
            style={styles.button}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons
                name="movie-open"
                size={29}
                color="#f0f0f7"
              />
              <Text style={styles.buttonText}>ENTRAR</Text>
            </View>
          </RectButton>
        </View>

        <Text style={styles.textFooter}>
          Atualmente, temos{" "}
          <Text style={styles.textFooterBold}>{countMovie} títulos </Text>
          disponíveis.{" "}
        </Text>
      </ImageBackground>
    </View>
  );
}

export default Facade;

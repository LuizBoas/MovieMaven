import React, { useEffect, useState } from "react";
import { View, Image, Text, Share, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { genreMap } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface Movie {
  backdrop_path?: string | null;
  genre_ids: number[];
  id: number;
  overview?: string | null;
  poster_path?: string | null;
  title: string;
}

interface MovieItemProps {
  movie: Movie;
  favorited: boolean;
}

/**
 * Este é um componente que representa o cardde um filme.
 * Ele recebe como props um objeto 'movie', contendo informações sobre o filme,
 * um boolean 'favorited' indicando se o filme está favoritado ou não.
 */
const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  favorited,
}: MovieItemProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const { navigate } = useNavigation();

  useEffect(() => {
    setIsFavorited(favorited);
  }, [favorited]);

  /**
   * Esta função é chamada quando o botão de compartilhar é pressionado.
   * Ela utiliza a API 'Share' do React Native para compartilhar um link do filme.
   */
  const shareMovie = async () => {
    try {
      const result = await Share.share({
        message: `Confira ${movie.title} no The Movie DB: https://www.themoviedb.org/movie/${movie.id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Esta função é chamada quando o botão de favoritar é pressionado.
   * Ela utiliza a API 'AsyncStorage' do React Native para armazenar a lista de filmes
   * favoritos localmente.
   */
  async function handleToggleFavorite() {
    try {
      let favorites = await AsyncStorage.getItem("favorites");
      let favoritesArray: Movie[] = [];

      if (favorites) {
        favoritesArray = JSON.parse(favorites);
      }

      const index = favoritesArray.findIndex((item) => item.id === movie.id);

      if (index >= 0) {
        favoritesArray.splice(index, 1);
        setIsFavorited(false);
      } else {
        favoritesArray.push(movie);
        setIsFavorited(true);
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Esta função é chamada quando o usuario clicar no card do filme.
   * Ela faz a requisição na API de todos os dados do filme e o envia
   * para a tela de detalhes.
   */
  const handleMoviePress = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=2ac0e6167cf0d7a5c8a6afdace6a8808&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const movieFull = data;
        navigate("Details", { movieFull });
      })
      .catch((error) => console.error(error));
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={handleMoviePress}
      >
        <View style={styles.profile}>
          <Image
            style={styles.post}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
          />

          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.genres}>
            {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <RectButton
          style={[styles.favoriteButton, isFavorited && styles.favorited]}
          onPress={handleToggleFavorite}
        >
          {isFavorited ? (
            <Image source={unfavoriteIcon} />
          ) : (
            <Image source={heartOutlineIcon} />
          )}
        </RectButton>
        <RectButton style={styles.shareButton} onPress={shareMovie}>
          <Ionicons name="md-share-social-outline" size={28} color="white" />
        </RectButton>
      </View>
    </View>
  );
};

export default MovieItem;

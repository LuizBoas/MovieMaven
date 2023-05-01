import React, { useEffect, useState } from "react";
import { View, Image, Text, Share, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { genreMap } from "../../constants/movie";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export interface Movie {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  genre_ids: number[];
}

interface MovieItemProps {
  movie: Movie;
  favorited: boolean;
  isFirstItem?: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  favorited,
}: MovieItemProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const genreNames = movie.genre_ids.map((id) => genreMap[id]).join(", ");
  const { navigate } = useNavigation();

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

  async function handleToggleFavorite() {
    try {
      let favorites = await AsyncStorage.getItem("favorites");
      favorites = JSON.parse(favorites!) || [];

      let favoritesArray: string[] = [];
      if (favorites!.length > 0) {
        favoritesArray = [...favorites!];
      }

      if (isFavorited) {
        favoritesArray.splice(favoritesArray.indexOf(movie.id), 1);
        setIsFavorited(false);
      } else {
        favoritesArray.push(movie.id);
        setIsFavorited(true);
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
    } catch (error) {
      console.log(error);
    }
  }

  const handleMoviePress = () => {
    navigate("Details", { movie });
  };

  useEffect(() => {
    setIsFavorited(favorited);
  }, [favorited]);

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

          <Text style={styles.name}>{movie.title}</Text>
          <Text style={styles.genres}>{genreNames}</Text>
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

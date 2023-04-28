import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import AsyncStorage from "@react-native-community/async-storage";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";
import { genreMap } from "../../constants/movie";

interface Movie {
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
  favorited?: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  favorited,
}: MovieItemProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const genreNames = movie.genre_ids.map((id) => genreMap[id]).join(", ");

  // async function handleToggleFavorite() {
  //   const favorites = await AsyncStorage.getItem('favorites');
  //   let favoritesArray = [];

  //   if (favorites) {
  //     favoritesArray = JSON.parse(favorites);
  //   }

  //   if (isFavorited) {
  //     const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
  //       return teacherItem.id === teacher.id;
  //     });
  //     favoritesArray.splice(favoriteIndex, 1);
  //     setIsFavorited(false);
  //   } else {
  //     favoritesArray.push(teacher);
  //     setIsFavorited(true);
  //   }

  //   await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  // }

  return (
    <View style={styles.container}>
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
      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
            // onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
          <RectButton
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
            // onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default MovieItem;

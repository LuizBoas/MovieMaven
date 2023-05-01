import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { RouteProp } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import { genreMap } from "../../constants/movie";

export type RootStackParamList = {
  Details: { movie: Movie };
};

export type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

export interface Movie {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  genre_ids: number[];
}

interface Props {
  route?: DetailsRouteProp;
}

function Details({ route }: Props) {
  const { movie } = route!.params;
  const genreNames = movie.genre_ids.map((id) => genreMap[id]).join(", ");

  return (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`, // definindo a imagem de fundo
      }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <PageHeader
          title={movie.title}
          description={genreNames}
          goBack="MoviesTabs"
        />
        <View style={styles.profile}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            style={styles.post}
          />

          <Text style={styles.releaseDate}>{movie.release_date}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Details;

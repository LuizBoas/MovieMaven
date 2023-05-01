import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import axios from "axios";

import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect } from "@react-navigation/native";
import MovieItem from "../../components/MovieItem";
useFocusEffect;

interface Movie {
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  overview: string | null;
  poster_path: string | null;
  title: string;
}

function Favorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    loadFavorites();
  }, [favorites]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        setFavorites(JSON.parse(response));
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Sua lista de filmes:" goBack="Facade" />
      <View style={styles.movieList}>
        <FlatList
          data={favorites}
          renderItem={({ item: movie }) => (
            <MovieItem key={movie.id} movie={movie} favorited={true} />
          )}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Favorites;

import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import axios from "axios";

import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MovieItem, { Movie } from "../../components/MovieItem";
import { useFocusEffect } from "@react-navigation/native";
useFocusEffect;

function Favorites() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${"2ac0e6167cf0d7a5c8a6afdace6a8808"}&page=${currentPage}`
        );
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        setTotalPages(response.data.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [currentPage]);

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

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Sua lista de filmes:" goBack="Facade" />
      <View style={styles.movieList}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={movies.filter((movies) => favorites.includes(movies.id))}
            renderItem={({ item: movie }) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                favorited={favorites.includes(movie.id)}
              />
            )}
            keyExtractor={(item, index) => String(index)}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}

export default Favorites;

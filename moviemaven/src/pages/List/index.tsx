import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import axios from "axios";

import { FlatList, TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MovieItem, { Movie } from "../../components/MovieItem";
import { useFocusEffect } from "@react-navigation/native";
useFocusEffect;

function List() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${"2ac0e6167cf0d7a5c8a6afdace6a8808"}&page=${currentPage}`;
        if (searchTerm !== "") {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${"2ac0e6167cf0d7a5c8a6afdace6a8808"}&query=${searchTerm}&page=${currentPage}`;
        }
        const response = await axios.get(url);
        setMovies((prevMovies) => {
          const newMovies = response.data.results.filter((movie) => {
            return !prevMovies.some((prevMovie) => prevMovie.id === movie.id);
          });
          return [...prevMovies, ...newMovies];
        });
        setTotalPages(response.data.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [currentPage, searchTerm]);

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

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setMovies([]);
    setCurrentPage(1);
    setTotalPages(1);
    setIsLoading(true);
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Filmes disponiveis:" goBack="Facade">
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchTerm}
          placeholder="Buscar filmes por nome"
        />
      </PageHeader>
      <View style={styles.movieList}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item: movie, index }) => {
              return (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  favorited={favorites.includes(movie.id)}
                />
              );
            }}
            keyExtractor={(item, index) => String(index)}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}

export default List;

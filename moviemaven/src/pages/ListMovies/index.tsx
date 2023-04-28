import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import MovieItem from "../../components/MovieItem";
import { FlatList, ScrollView } from "react-native-gesture-handler";

function ListMovies() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

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

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Filmes disponiveis:" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item: movie }) => <MovieItem movie={movie} />}
            keyExtractor={(item, index) => String(index)}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        )}
      </ScrollView>
    </View>
  );
}

export default ListMovies;

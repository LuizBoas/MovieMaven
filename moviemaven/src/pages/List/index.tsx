import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import axios from "axios";

import { FlatList, TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MovieItem, { Movie } from "../../components/MovieItem";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { genreMap } from "../../constants/movie";

function List() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingCurrentPage, setIsLoadingCurrentPage] =
    useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [typeSearch, setTypeSearch] = useState<string>("popularity");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const key = "2ac0e6167cf0d7a5c8a6afdace6a8808";
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=pt-BR&page=${currentPage}&sort_by=popularity.desc`;
        if (filter !== "" && typeSearch === "title") {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=${filter}&page=${currentPage}`;
        } else if (filter !== "" && typeSearch === "genre") {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=pt-BR&page=${currentPage}&with_genres=${filter}`;
        } else if (
          typeSearch === "now_playing" ||
          typeSearch === "top_rated" ||
          typeSearch === "upcoming"
        ) {
          url = `https://api.themoviedb.org/3/movie/${typeSearch}?api_key=${key}&language=pt-BR&page=${currentPage}`;
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
        setIsLoadingCurrentPage(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [currentPage, filter, typeSearch]);

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
      setIsLoadingCurrentPage(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (text: string) => {
    setFilter(text);
    setMovies([]);
    setCurrentPage(1);
    setTotalPages(1);
    setIsLoading(true);
  };

  return (
    <View style={styles.container}>
      <PageHeader title="" goBack="Facade">
        <Picker
          style={styles.picker}
          selectedValue={typeSearch}
          onValueChange={(itemValue, itemIndex) => {
            setTypeSearch(itemValue);
            handleSearch("");
          }}
          dropdownIconColor="#f0f0f7"
          itemStyle={styles.pickerItem}
        >
          <Picker.Item
            style={styles.pickerItem}
            label="Em alta"
            value="popularity"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Novos filmes"
            value="now_playing"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Próximos lançamentos"
            value="upcoming"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Melhores avaliações"
            value="top_rated"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Pesquisar por título"
            value="title"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Pesquisar por gênero"
            value="genre"
          />
        </Picker>
        {typeSearch === "title" && (
          <TextInput
            style={styles.input}
            onChangeText={handleSearch}
            value={filter}
            placeholder="Digite o título do filme"
          />
        )}
        {typeSearch === "genre" && (
          <Picker
            style={styles.picker}
            selectedValue={filter}
            onValueChange={(itemValue, itemIndex) => handleSearch(itemValue)}
          >
            {Object.entries(genreMap).map(([id, name]) => (
              <Picker.Item
                style={styles.pickerItem}
                key={id}
                label={name}
                value={id}
              />
            ))}
          </Picker>
        )}
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
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              isLoadingCurrentPage ? <ActivityIndicator size="large" /> : null
            }
          />
        )}
      </View>
    </View>
  );
}

export default List;

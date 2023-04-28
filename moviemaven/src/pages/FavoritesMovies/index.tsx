import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import MovieItem from "../../components/MovieItem";

function FavoritesMovies() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Filmes favoritos" />
    </View>
  );
}

export default FavoritesMovies;

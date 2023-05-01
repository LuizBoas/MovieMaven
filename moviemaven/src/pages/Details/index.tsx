import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { RouteProp } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";
import CastList from "../../components/CastList";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

interface MovieFull {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    backdrop_path: string | null;
    id: number;
    name: string;
    poster_path: string | null;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type RootStackParamList = {
  Details: { movieFull: MovieFull };
};

export type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

interface Props {
  route?: DetailsRouteProp;
}

function Details({ route }: Props) {
  const { movieFull } = route!.params;
  const genreNames = movieFull.genres.map((genre) => genre.name).join(", ");
  const voteAverage = movieFull.vote_average.toFixed(1);

  const circleBorderColor =
    movieFull.vote_average >= 7
      ? "#4CAF50"
      : movieFull.vote_average >= 5
      ? "#FFC107"
      : "#F44336";

  const hours = Math.floor(movieFull.runtime! / 60);
  const minutes = movieFull.runtime! % 60;
  const duration = `${hours} h ${minutes} min`;

  const formatProducers = (producers: string[]): string => {
    return producers.join(", ");
  };

  const formatMoney = (value: number): string => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <View style={styles.imageBackground}>
      <PageHeader
        title={movieFull.title}
        description={movieFull.tagline}
        goBack="MoviesTabs"
      />
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieFull.backdrop_path}`,
        }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.profile}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movieFull.poster_path}`,
                  }}
                  style={styles.post}
                />

                <Text style={styles.genres}>{genreNames}</Text>
                <View
                  style={[styles.circle, { borderColor: circleBorderColor }]}
                >
                  <Text
                    style={[styles.circleText, { color: circleBorderColor }]}
                  >
                    {voteAverage}
                  </Text>
                </View>
                <Text style={styles.overview}>{movieFull.overview}</Text>

                <View style={styles.containerPainelHor}>
                  <View style={styles.detailRow}>
                    <View style={styles.detailIcon}>
                      <Ionicons
                        name="ios-timer-outline"
                        size={24}
                        color="#fff"
                      />
                    </View>
                    <Text style={styles.detailText}>{duration}</Text>
                  </View>
                  {movieFull.revenue !== 0 && (
                    <View style={styles.detailRow}>
                      <View style={styles.detailIcon}>
                        <Entypo name="ticket" size={24} color="#fff" />
                      </View>
                      <Text style={styles.detailText}>
                        {formatMoney(movieFull.revenue)}
                      </Text>
                    </View>
                  )}

                  {movieFull.budget !== 0 && (
                    <View style={styles.detailRow}>
                      <View style={styles.detailIcon}>
                        <FontAwesome name="money" size={24} color="#fff" />
                      </View>
                      <Text style={styles.detailText}>
                        {formatMoney(movieFull.budget)}
                      </Text>
                    </View>
                  )}
                </View>

                <Text style={styles.subTitle}>Produção</Text>

                <View style={styles.productionCompanies}>
                  {movieFull.production_companies.map((company, index) => (
                    <Text
                      style={styles.textProductionCompanies}
                      key={company.id}
                    >
                      {company.name}
                      {index === movieFull.production_companies.length - 1
                        ? "."
                        : ","}{" "}
                    </Text>
                  ))}
                </View>

                <Text style={styles.subTitle}>Elenco</Text>
              </View>

              <View style={styles.containerCastList}>
                <CastList movieId={movieFull.id} />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Details;

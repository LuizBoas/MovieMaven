import { ScrollView } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";

import profileGeneric from "../../assets/images/profile-image-generic.png";

interface Cast {
  cast_id?: number;
  character?: string;
  name?: string;
  profile_path?: string;
}

interface MovieIdProps {
  movieId: number;
}

/**
 * Componente que retorna a lista horizontal do
 * elenco do filme.
 */
const CastList: React.FC<MovieIdProps> = ({ movieId }) => {
  const [cast, setCast] = useState<Cast[]>([]);

  /**
   * Efeito colateral para buscar os dados do elenco do filme
   */
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2ac0e6167cf0d7a5c8a6afdace6a8808&language=pt-BR&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((data) => {
        setCast(data.credits.cast);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cast.map((actor) => (
        <View style={styles.container} key={actor.cast_id}>
          <Image
            source={
              actor.profile_path
                ? {
                    uri: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
                  }
                : profileGeneric
            }
            style={styles.castImage}
          />
          <Text style={styles.castName}>{actor.name}</Text>
          <Text style={styles.castCharacter}>{actor.character}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CastList;

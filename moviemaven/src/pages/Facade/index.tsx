import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import heartIcon from "../../assets/images/icons/heart.png";

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  function handleNavigateToListPages() {
    navigate("MoviesTabs");
  }

  return (
    <View style={styles.container}>
      {/* <Image source={landingImg} style={styles.banner} /> */}

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>
          a sua plataforma de lista de filmes.
        </Text>
      </Text>

      <View style={styles.buttonContainer}>
        <RectButton
          onPress={handleNavigateToListPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Iniciar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;

import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import logoImg from "../../assets/images/logo.png";

import styles from "./styles";

interface PageHeaderProps {
  title?: string;
  description?: string;
  goBack: string;
  headerRight?: ReactNode;
  children?: ReactNode;
}

/**
 * Esse componente tem a função de redenriza o pageHeader das
 * telas da aplicação(fora a Facade).
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  headerRight,
  goBack,
  children,
}: PageHeaderProps) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate(goBack);
  }

  return (
    <View
      style={[
        styles.container,
        description === undefined ? styles.containerDescription : undefined,
      ]}
    >
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Ionicons
            name="return-down-back-sharp"
            size={35}
            color="white"
            resizeMode="contain"
          />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" style={styles.logo} />
      </View>
      <View style={styles.containDate}>
        {title && <Text style={styles.title}>{title}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;

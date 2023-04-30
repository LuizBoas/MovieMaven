import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Favorites from "../pages/Favorites";
import List from "../pages/List";

const { Navigator, Screen } = createBottomTabNavigator();

function MoviesTabs() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#32264d",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveBackgroundColor: "#fafafc",
        tabBarLabelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarIconStyle: {
          flex: 0,
          width: 20,
          height: 24,
        },
        tabBarItemStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarLabel: "Filmes",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name="local-movies"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default MoviesTabs;

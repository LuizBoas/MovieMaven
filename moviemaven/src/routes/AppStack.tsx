import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Facade from "../pages/Facade";
import Details from "../pages/Details";
import MoviesTabs from "./MoviesTabs";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Facade" component={Facade} />
        <Screen name="Details" component={Details} />
        <Screen name="MoviesTabs" component={MoviesTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;

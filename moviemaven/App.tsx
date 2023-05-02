import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { loadAsync } from "expo-font";

import AppStack from "./src/routes/AppStack";

import {
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [isSplashReady, setSplashReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setSplashReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  async function loadFonts() {
    await loadAsync({
      Archivo_400Regular,
      Archivo_700Bold,
      Poppins_400Regular,
      Poppins_600SemiBold,
    });
    setFontsLoaded(true);
  }

  if (!isSplashReady || !fontsLoaded) {
    return null;
  }
  return (
    <>
      <AppStack />
      <StatusBar style="auto" />
    </>
  );
}

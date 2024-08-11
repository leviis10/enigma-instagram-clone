import { config } from "@tamagui/config/v3";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { ScrollView, View } from "tamagui";
import StoryList from "./components/StoryList";
import Feeds from "./components/Feed/Feeds";
import Footer from "./components/Footer";

const tamaguiConfig = createTamagui(config);

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flexDirection: "column", flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <StoryList />
            <Feeds />
          </ScrollView>

          <Footer />
        </SafeAreaView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

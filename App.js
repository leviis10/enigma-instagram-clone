import { config } from "@tamagui/config/v3";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "tamagui";
import Feeds from "./components/Feed/Feeds";
import Header from "./components/Header";
import StoryList from "./components/Story/StoryList";
import TabRoute from "./components/TabRoute";

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
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <StoryList />
            <Feeds />
          </ScrollView>
          <TabRoute />
        </SafeAreaView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

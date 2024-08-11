import { StyleSheet } from "react-native";
import { Image, XStack } from "tamagui";

export default function FeedImage({ imageSrc }) {
  return (
    <XStack>
      <Image source={{ uri: imageSrc, width: "100%", height: 500 }} />
    </XStack>
  );
}

const styles = StyleSheet.create({});

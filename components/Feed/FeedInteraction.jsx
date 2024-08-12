import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StyleSheet } from "react-native";
import { XStack } from "tamagui";

export default function FeedInteraction() {
  return (
    <XStack justifyContent="space-between">
      <XStack gap={10}>
        <FontAwesome6 name="heart" size={24} color="black" />
        <FontAwesome6 name="comment" size={24} color="black" />
        <FontAwesome6 name="paper-plane" size={24} color="black" />
      </XStack>
      <XStack>
        <FontAwesome6 name="bookmark" size={24} color="black" />
      </XStack>
    </XStack>
  );
}

const styles = StyleSheet.create({});

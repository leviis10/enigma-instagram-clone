import { StyleSheet, View } from "react-native";
import { H1, SizableText, XStack, Text } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Container from "./Container";

export default function Header() {
  return (
    <Container justifyContent="space-between" alignItems="center">
      <XStack>
        <Text fontSize={30}>Instagram</Text>
      </XStack>
      <XStack gap={20}>
        <FontAwesome6 name="heart" size={24} color="black" />
        <FontAwesome6 name="facebook-messenger" size={24} color="black" />
      </XStack>
    </Container>
  );
}

const styles = StyleSheet.create({});

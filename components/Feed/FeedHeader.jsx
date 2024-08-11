import { StyleSheet } from "react-native";
import { Image, Text, XStack } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Container from "../Container";

export default function FeedHeader({ profileImage, username }) {
  return (
    <Container
      alignItems="center"
      justifyContent="space-between"
      paddingVertical={10}
    >
      <XStack alignItems="center" gap={10}>
        <Image
          source={{ uri: profileImage, width: 50, height: 50 }}
          borderRadius={50}
        />
        <Text>{username}</Text>
      </XStack>
      <XStack>
        <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
      </XStack>
    </Container>
  );
}

const styles = StyleSheet.create({});

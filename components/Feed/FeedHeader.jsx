import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StyleSheet } from "react-native";
import { Image, Text, XStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import Container from "../Container";

export default function FeedHeader({ profileImage, username, hasActiveStory }) {
  return (
    <Container
      alignItems="center"
      justifyContent="space-between"
      paddingVertical={10}
    >
      <XStack alignItems="center" gap={10}>
        <LinearGradient
          colors={
            hasActiveStory
              ? ["#FF7F50", "#FF1493", "#1E90FF"]
              : ["transparent", "transparent"]
          }
          style={{
            borderRadius: 50,
            padding: 3,
          }}
        >
          <Image
            source={{ uri: profileImage, width: 50, height: 50 }}
            borderRadius={50}
          />
        </LinearGradient>
        <Text>{username}</Text>
      </XStack>
      <XStack>
        <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
      </XStack>
    </Container>
  );
}

const styles = StyleSheet.create({});

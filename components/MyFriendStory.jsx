import { StyleSheet } from "react-native";
import { Image, Text, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export default function MyFriendStory({ myFriendStories }) {
  return (
    <XStack gap={10}>
      {myFriendStories.map(({ uri, id, name }) => (
        <YStack alignItems="center" key={id}>
          <LinearGradient
            colors={["#FF7F50", "#FF1493", "#1E90FF"]}
            style={{
              borderRadius: 50,
              padding: 3,
            }}
          >
            <Image
              source={{
                uri,
                width: 75,
                height: 75,
              }}
              borderRadius={50}
            />
          </LinearGradient>
          <Text>{name}</Text>
        </YStack>
      ))}
    </XStack>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import { Image, Text, XStack } from "tamagui";
import Container from "../Container";

export default function FeedTotalLike({ friendLikes }) {
  const size = 25;

  return (
    <XStack paddingVertical={10}>
      <XStack position="relative">
        {friendLikes.slice(0, 3).map(({ imageUrl, name }, index) => (
          <Image
            key={name}
            source={{ uri: imageUrl, width: size, height: size }}
            borderRadius={50}
            position="absolute"
            left={(index * size) / 2}
          />
        ))}
      </XStack>
      <Text marginLeft={2 * size + 10}>
        Liked by <Text fontWeight={700}>{friendLikes[0].name}</Text> and{" "}
        <Text fontWeight={700}>{friendLikes.length - 1} others</Text>
      </Text>
    </XStack>
  );
}

const styles = StyleSheet.create({});

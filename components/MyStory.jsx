import { StyleSheet, Text } from "react-native";
import { Image, XStack, YStack } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function MyStory() {
  return (
    <YStack alignItems="center">
      <XStack
        borderRadius={50}
        borderWidth={3}
        borderStyle="solid"
        borderColor={"transparent"}
        padding={2}
      >
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/1.jpg",
            width: 75,
            height: 75,
          }}
          borderRadius={50}
        />
        <XStack position="absolute" bottom={0} right={0}>
          <FontAwesome6 name="circle-plus" size={24} color="black" />
        </XStack>
      </XStack>
      <Text>myname</Text>
    </YStack>
  );
}

const styles = StyleSheet.create({});

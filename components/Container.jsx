import { StyleSheet } from "react-native";
import { XStack, YStack } from "tamagui";

export default function Container(props) {
  const { children, block } = props;
  const paddingHorizontal = 13;

  if (block?.toLowerCase() === "ystack") {
    return (
      <YStack paddingHorizontal={paddingHorizontal} {...props}>
        {children}
      </YStack>
    );
  }

  return (
    <XStack paddingHorizontal={paddingHorizontal} {...props}>
      {children}
    </XStack>
  );
}

const styles = StyleSheet.create({});

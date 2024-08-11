import { StyleSheet, Text, View } from "react-native";
import { XStack } from "tamagui";

export default function Container(props) {
  const { children, paddingVertical } = props;

  return (
    <XStack paddingHorizontal={6} {...props}>
      {children}
    </XStack>
  );
}

const styles = StyleSheet.create({});

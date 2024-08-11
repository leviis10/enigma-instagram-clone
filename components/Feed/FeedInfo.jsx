import { StyleSheet } from "react-native";
import { Text, YStack } from "tamagui";
import FeedInteraction from "./FeedInteraction";
import FeedTotalLike from "./FeedTotalLike";
import moment from "moment";

export default function FeedInfo({
  friendLikes,
  totalComments,
  username,
  caption,
  postDate,
}) {
  return (
    <YStack paddingVertical={10} paddingHorizontal={6}>
      <FeedInteraction />
      <FeedTotalLike friendLikes={friendLikes} />
      <Text paddingBottom={5}>
        <Text fontWeight={700}>{username}</Text> {caption}
      </Text>
      <Text color={"gray"}>View all {totalComments} comments</Text>
      <Text color={"gray"}>{moment(new Date(postDate)).fromNow()}</Text>
    </YStack>
  );
}

const styles = StyleSheet.create({});

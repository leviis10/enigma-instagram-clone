import moment from "moment";
import { StyleSheet } from "react-native";
import { Text } from "tamagui";
import Container from "../Container";
import FeedInteraction from "./FeedInteraction";
import FeedTotalLike from "./FeedTotalLike";

export default function FeedInfo({
  friendLikes,
  totalComments,
  username,
  caption,
  postDate,
}) {
  return (
    <Container block="ystack" paddingVertical={10}>
      <FeedInteraction />
      <FeedTotalLike friendLikes={friendLikes} />
      <Text paddingBottom={5}>
        <Text fontWeight={700}>{username}</Text> {caption}
      </Text>
      <Text color={"gray"}>View all {totalComments} comments</Text>
      <Text color={"gray"}>{moment(new Date(postDate)).fromNow()}</Text>
    </Container>
  );
}

const styles = StyleSheet.create({});

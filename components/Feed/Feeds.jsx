import { StyleSheet } from "react-native";
import { YStack } from "tamagui";
import { FEEDS_DATA } from "../../utils/FEED_DATA";
import FeedHeader from "./FeedHeader";
import FeedImage from "./FeedImage";
import FeedInfo from "./FeedInfo";
import { Fragment } from "react";

export default function Feeds() {
  const feed = FEEDS_DATA;

  return (
    <YStack>
      {feed.map((feed) => (
        <Fragment key={feed.id}>
          <FeedHeader profileImage={feed.imageUrl} username={feed.username} />
          <FeedImage imageSrc={feed.feed.imageUrl} />
          <FeedInfo
            friendLikes={feed.feed.friendLikes}
            totalComments={feed.feed.totalComments}
            username={feed.username}
            caption={feed.feed.caption}
            postDate={feed.feed.postDate}
          />
        </Fragment>
      ))}
    </YStack>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import { ScrollView } from "tamagui";
import Container from "../Container";
import MyFriendStory from "./MyFriendStory";
import MyStory from "./MyStory";

const myFriendStories = [
  {
    id: 1,
    uri: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "name1",
  },
  {
    id: 2,
    uri: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "name2",
  },
  {
    id: 3,
    uri: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "name3",
  },
  {
    id: 4,
    uri: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "name4",
  },
  {
    id: 5,
    uri: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "name5",
  },
];

export default function StoryList() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      borderBottomWidth={1}
      borderStyle="solid"
      borderBottomColor={"#eee"}
    >
      <Container gap={13} paddingVertical={10}>
        <MyStory />
        <MyFriendStory myFriendStories={myFriendStories} />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

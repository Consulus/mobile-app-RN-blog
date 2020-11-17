import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Post } from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const openPostHadler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHadler} />}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Мой блог",
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
  },
});

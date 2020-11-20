import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Post } from "../components/Post";
import { DATA } from "../data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainScreen = ({ navigation }) => {
  const openPostHadler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
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
  headerTitle: "Мой магазин",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => console.log("Press foto")}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log("Press foto")}
      />
    </HeaderButtons>
  ),
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
  },
});

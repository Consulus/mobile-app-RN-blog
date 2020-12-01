import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { loadPosts } from "../store/actions/post";

export const MainScreen = ({ navigation }) => {
  const openPostHadler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.post.allPosts);

  return (
    <View style={styles.center}>
      <FlatList
        data={allPosts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHadler} />}
      />
    </View>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
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
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    padding: 10,
  },
});

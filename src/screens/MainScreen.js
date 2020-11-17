import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate("Post");
  };

  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button title="Go to PostScreen" onPress={goToPost} />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Мой блог",
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const LechebnoStolovaya = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Лечебно-столовая вода</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

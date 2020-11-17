import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsready] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsready(true)}
        onError={console.warn}
      />
    );
  }

  return <AppNavigation />;
}

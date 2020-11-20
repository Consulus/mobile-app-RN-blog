import React from "react";
import { createAppContainer, ThemeColors } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { LechebnoStolovaya } from "../screens/LechebnoStolovaya";
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    },
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookmarkedScreen,
    Post: PostScreen,
    Lechebnzya: LechebnoStolovaya,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    },
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-water" size={24} color="blue" />
        ),
        title: "Не газированная",
      },
    },
    Post: {
      screen: PostNavigator,

      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-water" size={24} color="red" />
        ),
        title: "Газированная",
      },
    },

    LechebnoStolovaya: {
      screen: LechebnoStolovaya,
      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-water" size={24} color="green" />
        ),
        title: "Лечебно-столовая",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.DANGER_COLOR,
    },
  }
);

export const AppNavigation = createAppContainer(BottomNavigator);

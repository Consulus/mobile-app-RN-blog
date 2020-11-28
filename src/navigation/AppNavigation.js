import React from "react";
import { createAppContainer, ThemeColors } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { LechebnoStolovaya } from "../screens/LechebnoStolovaya";
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookmarkedScreen,
    Post: PostScreen,
    Lechebnzya: LechebnoStolovaya,
  },
  navigatorOptions
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

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  navigatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen,
  },
  navigatorOptions
);

const BookNavigator = createStackNavigator(
  {
    Booked: BookmarkedScreen,
  },
  navigatorOptions
);

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "Газированная",
      },
    },
    Booked: {
      screen: BookNavigator,
      navigationOptions: {
        drawerLabel: "Не газированная",
      },
    },
    LechebnoStolovaya: {
      screen: LechebnoStolovaya,
      navigationOptions: {
        drawerLabel: "Лечебно-столовая",
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: "Создать",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: THEME.DANGER_COLOR,
    },
  }
);

export const AppNavigation = createAppContainer(MainNavigator);

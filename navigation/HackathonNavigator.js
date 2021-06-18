import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
import ScreenThree from "../screens/SecreenThree";
import Colors from "../constants/Colors";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {},
  headerBackTitleStyle: {},
  headerTintColor: "white",
  headerTitle: "A dummy title",
};

const ScreenOneNavigator = createStackNavigator(
  {
    ScreenOne: ScreenOne,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const ScreenTwoNavigator = createStackNavigator(
  {
    ScreenTwo: ScreenTwo,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const ScreenThreeNavigator = createStackNavigator(
  {
    ScreenThree: ScreenThree,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const myTabScreenConfig = {
  Start: {
    screen: ScreenOneNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="map-search"
            size={25}
            color={tabInfo.tintColor}
          ></MaterialCommunityIcons>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Second: {
    screen: ScreenTwoNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Colors.second,
    },
  },
  Third: {
    screen: ScreenThreeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-camera"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Colors.second,
    },
  },
};

const TabNavigator = createBottomTabNavigator(myTabScreenConfig);

export default createAppContainer(TabNavigator);

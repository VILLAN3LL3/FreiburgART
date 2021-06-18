import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MapScreen from "../screens/MapScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";
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

const MapScreenNavigator = createStackNavigator(
  {
    Karte: MapScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const ListScreenNavigator = createStackNavigator(
  {
    Liste: ListScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const DetailScreenNavigator = createStackNavigator(
  {
    Details: DetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const myTabScreenConfig = {
  Start: {
    screen: MapScreenNavigator,
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
    screen: ListScreenNavigator,
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
    screen: DetailScreenNavigator,
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

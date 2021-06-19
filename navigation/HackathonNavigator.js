import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MapScreen from "../screens/MapScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";
import Colors from "../constants/Colors";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {},
  headerBackTitleStyle: {},
  headerTintColor: "white",
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
  Map: {
    screen: MapScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MaterialCommunityIcons name='map-search' size={25} color={tabInfo.tintColor}></MaterialCommunityIcons>;
      },
      tabBarColor: Colors.primary,
    },
  },
  List: {
    screen: ListScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='list-circle-outline' size={25} color={tabInfo.tintColor}></Ionicons>;
      },
      tabBarColor: Colors.primary,
    },
  },
  Detail: {
    screen: DetailScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-camera' size={25} color={tabInfo.tintColor}></Ionicons>;
      },
      tabBarColor: Colors.primary,
    },
  },
};

const TabNavigator = createMaterialBottomTabNavigator(myTabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      });

export default createAppContainer(TabNavigator);

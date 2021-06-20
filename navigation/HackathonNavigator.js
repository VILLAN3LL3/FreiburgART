import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import MapScreen from '../screens/MapScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import ErfolgeScreen from '../screens/ErfolgeScreen';
import TourScreen from '../screens/TourScreen';
import Colors from '../constants/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ThreeDimModelScreen from '../screens/ThreeDimModelScreen';
import QuizScreen from '../screens/QuizScreen';

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {},
  headerBackTitleStyle: {},
  headerTintColor: 'white',
};

const MapScreenNavigator = createStackNavigator(
  {
    Karte: MapScreen,
    Details: DetailScreen,
    ThreeDimModel: ThreeDimModelScreen,
    Quiz: QuizScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const ListScreenNavigator = createStackNavigator(
  {
    Liste: ListScreen,
    Details: DetailScreen,
    ThreeDimModel: ThreeDimModelScreen,
    Quiz: QuizScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const ErfolgeScreenNavigator = createStackNavigator(
  {
    Erfolge: ErfolgeScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const TourScreenNavigator = createStackNavigator(
  {
    Touren: TourScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const myTabScreenConfig = {
  Karte: {
    screen: MapScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='map' size={25} color={tabInfo.tintColor}></Ionicons>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Liste: {
    screen: ListScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='list' size={25} color={tabInfo.tintColor}></Ionicons>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Touren: {
    screen: TourScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome5
            name='route'
            size={25}
            color={tabInfo.tintColor}
          ></FontAwesome5>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Erfolge: {
    screen: ErfolgeScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name='ribbon'
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
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

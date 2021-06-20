import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import HackathonNavigator from './navigation/HackathonNavigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Colors from './constants/Colors';
import { ThemeProvider } from 'react-native-elements';
import { RootSiblingParent } from 'react-native-root-siblings';

const fetchFonts = () => {
  return Font.loadAsync({
    unicorn: require('./assets/fonts/Unicorn_Couple.ttf'),
  });
};

const theme = {
  colors: {
    primary: Colors.primary,
    secondary: Colors.third
  } 
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  
  if (!dataLoaded) {
    console.log('loading data');
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <RootSiblingParent>
      <ThemeProvider theme={theme}>
        <HackathonNavigator />
      </ThemeProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

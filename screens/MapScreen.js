import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>{props.title} Test 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MapScreen;

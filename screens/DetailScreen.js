import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>{props.title} Test 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DetailScreen;

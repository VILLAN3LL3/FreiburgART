import React from "react";
import { StyleSheet, ScrollView, Image, Text, View} from "react-native";
import { ARTWORK_LIST } from '../data/dummy-data';
import Artwork from "../models/artwork";
import WebView from "react-native-webview";



const ThreeDimModelScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const artworkId = props.navigation.getParam("artworkId");
  const currentArtwork = artworks.find((artwork) => artwork.id === artworkId);
  
  return (
    <WebView source={{ uri: currentArtwork.sketchfabUri }} />
  );
};

ThreeDimModelScreen.navigationOptions = (props) => {
  const artworks = ARTWORK_LIST;
  const artworkId = props.navigation.getParam("artworkId");
  const currentArtwork = artworks.find((artwork) => artwork.id === artworkId);

  return {
    headerTitle: currentArtwork.title,
  };
};

export default ThreeDimModelScreen;

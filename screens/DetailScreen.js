import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View, Alert } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import { Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Colors from '../constants/Colors';

const DetailScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const artworkId = props.navigation.getParam('artworkId');
  const currentArtwork = artworks.find((artwork) => artwork.id === artworkId);
  return (
    <ScrollView style={styles.container}>
      {/* <View style={{ ...styles.container, ...props.style }}> */}
      <Image source={{ uri: currentArtwork.imageUrl }} style={styles.image} />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: -35 }}>
        <SocialIcon type='facebook' />
        <SocialIcon type='twitter' />
        <SocialIcon type='instagram' />
      </View>
      <View style={styles.textContainer}>
        <Text>{currentArtwork.artists}</Text>
        <Text>{currentArtwork.year}</Text>
        <Text>{currentArtwork.location}</Text>
        {currentArtwork.infoUrls.map((url) => (
          <Text key={url} style={{ color: 'blue' }} onPress={() => Linking.openURL(url)}>
            {url}
          </Text>
        ))}
      </View>

      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.secondary },
  image: { width: '100%', height: 400 },
  contentContainer: { paddingVertical: 20 },
  textContainer: { padding: 20 },
});

DetailScreen.navigationOptions = (props) => {
  const artworks = ARTWORK_LIST;
  const artworkId = props.navigation.getParam('artworkId');
  const currentArtwork = artworks.find((artwork) => artwork.id === artworkId);

  return {
    headerTitle: currentArtwork.title,
  };
};

export default DetailScreen;

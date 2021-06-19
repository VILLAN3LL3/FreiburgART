import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';

const MarkerCallout = (props) => {
  const artwork = props.artwork;
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bubble}>
        <View style={styles.bubbleContent}>
          <Text style={styles.imageWrapper}>
            <Image source={{ uri: artwork.imageUrl }} style={styles.image} />
          </Text>
          <Text
            style={{
              ...styles.text,
              ...{ fontWeight: 'bold', fontSize: 12, color: artwork.isCurrentlyAccessible ? 'black' : 'gray' },
            }}
          >
            {artwork.title}
          </Text>
          <Text style={{ ...styles.text, ...{ fontSize: 10, color: artwork.isCurrentlyAccessible ? 'black' : 'red' } }}>
            {artwork.isCurrentlyAccessible
              ? `${artwork.artists.join(', ')} (${artwork.year})`
              : 'Dieses Kunstwerk ist zur Zeit nicht zugänglich'}
          </Text>
        </View>
      </View>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: Colors.primary,
    borderWidth: 0.5,
  },
  bubbleContent: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: Colors.secondary,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: Colors.primary,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  imageWrapper: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: { height: 100, width: 100, resizeMode: 'cover' },
});

export default MarkerCallout;

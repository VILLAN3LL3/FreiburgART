import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { GetIconSource, GetGermanDateString } from '../services/artwork-service';
import Colors from '../constants/Colors';

const StatisticsListItem = ({artwork}) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: artwork.imageUrl }} style={styles.image} resizeMode='cover' />
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ color: 'gray' }}>{artwork.artists.join(', ')}</Text>
          <Text style={{ fontWeight: 'bold' }}>{artwork.title.toUpperCase()}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={GetIconSource(artwork)} style={{ width: 20, height: 20, marginRight: 5 }} />
            <Text style={{ color: 'gray' }}>Besucht am {GetGermanDateString(artwork.visitedOn)}</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 35,
    marginRight: 10,
    width: 70,
    height: 70,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.third,
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'column',
  },
});

export default StatisticsListItem;
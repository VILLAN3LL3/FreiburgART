import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import Colors from '../constants/Colors';
import StatisticsListItem from '../components/StatisticsListItem';

const ErfolgeScreen = (props) => {
  const artworkList = ARTWORK_LIST;
  const visitedArtworks = artworkList.filter((a) => !!a.visitedOn).sort((x,y) => y.visitedOn > x.visitedOn);
  return (
    <View style={styles.container}>
      <View style={styles.statisticsContainer}>
        <Text style={styles.highlighted}>
          {visitedArtworks.length} von {artworkList.length}
        </Text>
        <Text style={styles.statistics}>Kunstwerken besucht</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {visitedArtworks.map((artwork) => (
          <StatisticsListItem key={artwork.id} artwork={artwork} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  statisticsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  statistics: {
    fontSize: 24,
    textAlign: 'center',
  },
  highlighted: {
    fontSize: 60,
    fontWeight: 'bold',
    color: Colors.third,
  },
  scrollView: {
    backgroundColor: Colors.secondary,
    flex: 1,
    width: '100%',
    padding: 10,
    borderTopColor: 'gray',
    borderTopWidth: 10
  },
});

export default ErfolgeScreen;

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  artworkItemContainer: {
    flex: 1,
    height: 400,
    backgroundColor: Colors.secondary,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  artImageAndTitleContainer: {
    height: '80%',
  },
  artistsContainer: {
    paddingHorizontal: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
  },
  actionButtonsContainer: {
    height: '10%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

const ListScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const [searchValue, setSearchValue] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState(ARTWORK_LIST);

  const updateSearch = (search) => {
    setSearchValue(search);
    setFilteredArtworks(
      artworks.filter((a) =>
        `${a.title}|${a.artists.join('|')}|${a.material}|${a.year}|${
          a.dimensions
        }|${a.location}|${a.type}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  };

  const ArtworkItemList = ({ item }) => (
    <View style={{ ...styles.artworkItemContainer, ...props.style }}>
      <TouchableOpacity
        onPress={(e) => {
          if (
            e.nativeEvent.action === 'marker-inside-overlay-press' ||
            e.nativeEvent.action === 'callout-inside-press'
          ) {
            return;
          }
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              artworkId: item.id,
            },
          });
        }}
      >
        <View>
          <View style={styles.artImageAndTitleContainer}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.backgroundImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.artistsContainer}>
            <Text>{item.artists}</Text>
          </View>
          <View style={styles.actionButtonsContainer}>
            <Button
              title='Details'
              color={Colors.primary}
              onPress={(e) => {
                if (
                  e.nativeEvent.action === 'marker-inside-overlay-press' ||
                  e.nativeEvent.action === 'callout-inside-press'
                ) {
                  return;
                }
                props.navigation.navigate({
                  routeName: 'Details',
                  params: {
                    artworkId: item.id,
                  },
                });
              }}
            ></Button>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => {
    return <ArtworkItemList item={item} />;
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <SearchBar
        placeholder='Suchen...'
        onChangeText={updateSearch}
        lightTheme
        value={searchValue}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredArtworks}
        renderItem={renderItem}
        style={{ width: '100%' }}
      ></FlatList>
    </View>
  );
};

export default ListScreen;

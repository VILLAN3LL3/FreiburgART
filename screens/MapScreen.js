import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, Image } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MarkerCallout from '../components/MarkerCallout';
import { SearchBar } from 'react-native-elements';
import LogoTitle from '../components/LogoTitle';

// https://github.com/react-native-maps/react-native-maps
// https://dev-yakuza.posstree.com/en/react-native/react-native-maps/
const MapScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0322;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [region, setRegion] = useState({
    region: {
      latitude: 47.9959,
      longitude: 7.85222,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  });
  const [searchValue, setSearchValue] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState(ARTWORK_LIST);

  // ToDo: Herausfinden, was man tun muss, damit Geolocation im Emulator funktioniert
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({
  //         latitude,
  //         longitude,
  //       });
  //     },
  //     (error) => {
  //       console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //   );
  // }, []);

  const updateSearch = (search) => {
    setSearchValue(search);
    setFilteredArtworks(
      artworks.filter((a) =>
        `${a.title}|${a.artists.join('|')}|${a.material}|${a.year}|${a.dimensions}|${a.location}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <SearchBar placeholder='Suchen...' onChangeText={updateSearch} lightTheme value={searchValue} />
      <MapView region={region.region} style={{ flex: 1 }}>
        <Marker
          key={0}
          coordinate={{ latitude: region.region.latitude, longitude: region.region.longitude }}
          image={require('../assets/walking-96.png')}
        >
          <Callout>
            <Text>Ich :-)</Text>
          </Callout>
        </Marker>
        {filteredArtworks.map((artwork) => (
          <Marker
            key={artwork.id}
            identifier={artwork.id.toString()}
            coordinate={{ latitude: artwork.latitude, longitude: artwork.longitude }}
            image={
              artwork.isCurrentlyAccessible
                ? (artwork.isVisited ? require('../assets/sculpture-visited-96.png'): require('../assets/sculpture-96.png'))
                : require('../assets/sculpture-disabled-96.png')
            }
          >
            <Callout
              tooltip
              onPress={(e) => {
                if (
                  e.nativeEvent.action === 'marker-inside-overlay-press' ||
                  e.nativeEvent.action === 'callout-inside-press'
                ) {
                  return;
                }
                props.navigation.navigate({
                  routeName: 'Detail',
                  params: {
                    id: artwork.id,
                  },
                });
              }}
            >
              <MarkerCallout artwork={artwork} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

MapScreen.navigationOptions = () => {
  return { 
    headerTitle: () => <LogoTitle />,
  };
};

export default MapScreen;

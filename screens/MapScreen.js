import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import MapView, { Marker, Callout } from 'react-native-maps';
import MarkerCallout from '../components/MarkerCallout';
import { SearchBar } from 'react-native-elements';
import LogoTitle from '../components/LogoTitle';
import { GetIconSource } from '../services/artwork-service';
import { Button, Text, Overlay, Image } from 'react-native-elements';

const MapScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.025;
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
  const [overlayVisible, setOverlayVisible] = useState(true);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const updateSearch = (search) => {
    setSearchValue(search);
    setFilteredArtworks(
      artworks.filter((a) =>
        `${a.title}|${a.artists.join('|')}|${a.material}|${a.year}|${a.dimensions}|${a.location}|${a.type}`
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
            image={GetIconSource(artwork)}
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
                  routeName: 'Details',
                  params: {
                    artworkId: artwork.id,
                  },
                });
              }}
            >
              <MarkerCallout artwork={artwork} />
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
        <Text h3>Willkommen zu FreiburgArt,</Text>
        <Text h4>deiner App für Kunst im öffentlichen Raum!</Text>
        <Text style={{ marginVertical: 20 }}>Starte jetzt und entdecke spannende Kunstwerke in deiner Umgebung.</Text>
        <View style={{ marginBottom: 20 }}>
          <View style={styles.legendRow}>
            <Image source={require('../assets/walking-96.png')} style={{ width: 30, height: 30 }} />
            <Text>Deine aktuelle Position</Text>
          </View>
          <View style={styles.legendRow}>
            <Image source={require('../assets/easel-96.png')} style={{ width: 30, height: 30 }} />
            <Text>Gemälde</Text>
          </View>
          <View style={styles.legendRow}>
            <Image source={require('../assets/sculpture-96.png')} style={{ width: 30, height: 30 }} />
            <Text>Skulptur</Text>
          </View>
          <View style={styles.legendRow}>
            <Image source={require('../assets/graffiti-96.png')} style={{ width: 30, height: 30 }} />
            <Text>Graffiti</Text>
          </View>
          <View style={styles.legendRow}>
            <Image source={require('../assets/sculpture-visited-96.png')} style={{ width: 30, height: 30 }} />
            <Text>Bereits besuchtes Kunstwerk</Text>
          </View>
          <View style={styles.legendRow}>
            <Image source={require('../assets/sculpture-disabled-96.png')} style={{ width: 30, height: 30 }} />
            <Text>Zur Zeit nicht zugängliches Kunstwerk</Text>
          </View>
        </View>
        <Button title="Los geht's!" onPress={toggleOverlay} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  legendRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
});

MapScreen.navigationOptions = () => {
  return {
    headerTitle: () => <LogoTitle />,
  };
};

export default MapScreen;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, Image } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MarkerCallout from '../components/MarkerCallout';

// https://github.com/react-native-maps/react-native-maps
// https://dev-yakuza.posstree.com/en/react-native/react-native-maps/
const MapScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const firstItem = artworks[0];

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

  return (
    <View style={{ ...styles.container, ...props.style }}>
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
        {artworks.map((artwork) => (
          <Marker
            key={artwork.id}
            identifier={artwork.id.toString()}
            coordinate={{ latitude: artwork.latitude, longitude: artwork.longitude }}
            image={require('../assets/easel-96.png')}
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
                    id: artwork.id
                  }
                })
 
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

export default MapScreen;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Container } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

// https://github.com/react-native-maps/react-native-maps
// https://dev-yakuza.posstree.com/en/react-native/react-native-maps/
const MapScreen = (props) => {
  const artworks = ARTWORK_LIST;
  const firstItem = artworks[0];

  const [region, setRegion] = useState({
    region: {
      latitude: 47.9959,
      longitude: 7.85222,
      latitudeDelta: 0.0322,
      longitudeDelta: 0.0121,
    },
  });

  // onRegionChange = (region) => {
  //   setRegion({ region });
  // };

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
      {region && (
        <MapView region={region.region} style={{ flex: 1 }}>
          <Marker
            key={0}
            coordinate={{ latitude: region.region.latitude, longitude: region.region.longitude }}
            image={require('../assets/walking-96.png')}
          />
          {artworks.map((artwork) => (
            <Marker
              key={artwork.id}
              coordinate={{ latitude: artwork.latitude, longitude: artwork.longitude }}
              title={artwork.title}
              description={`${artwork.artists.join(', ')} (${artwork.year})`}
              image={require('../assets/easel-96.png')}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;

import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { TOUR_LIST } from '../data/dummy-data-tours';
import Colors from '../constants/Colors';
import { SearchBar } from 'react-native-elements';
import { GetTourPicture } from '../services/artwork-service';

const styles = StyleSheet.create({
  container: {},
  row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'green',
    alignContent: 'center',
  },
  rightContent: {
    display: 'flex',
  },
  productItemContainer: {
    flex: 1,
    height: 300,
    backgroundColor: '#ccc',
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  productImageAndTitleContainer: {
    height: '70%',
  },
  productDetailContainer: {
    paddingHorizontal: 30,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  description: {},
  productRow: {
    flexDirection: 'row',
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
    justifyContent: 'flex-end',
  },
  headerSecond: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  tourDetails: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  time: {
      textAlign: 'right'
  },
  createOwnHint: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 10,
  },
  createOwnHintSecond: {
    paddingHorizontal: 10,
  },
  tourPlanerBtn: {
      backgroundColor: Colors.fourth,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 200,
      borderRadius: 15,
      marginBottom: 10,
      marginTop: 10

  },
  textTourBtn: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
  }
});

const TourScreen = (props) => {
  const tours = TOUR_LIST;
  const [searchValue, setSearchValue] = useState('');
  const [filteredTours, setFilteredTours] = useState(TOUR_LIST);

  const updateSearch = (search) => {
    setSearchValue(search);
    setFilteredTours(
        // TODO: adapt to tours
      tours.filter((a) =>
        `${a.title}|${a.artists.join('|')}|${a.material}|${a.year}|${a.dimensions}|${a.location}|${a.type}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  };

  const TourItemList = ({ item }) => (
    <View style={{ ...styles.productItemContainer, ...props.style }}>
        <View>
          <View style={styles.productImageAndTitleContainer}>
            {/* <ImageBackground source={{ uri: item.imageUrl }} style={styles.backgroundImage}> */}
            {/* <ImageBackground source={GetTourPicture(item.id)} style={{ width: 400, height: 200, marginRight: 5 }}> */}
            <ImageBackground source={GetTourPicture(item)} style={styles.backgroundImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.productDetailContainer}>
          <Text style={styles.headerSecond}>{item.description}</Text>
          <View style={styles.tourDetails}>
            <Text>Distanz: {item.distance}</Text>
            <Text style={styles.time}>Dauer: {item.time}</Text>
            </View>
          </View>
        </View>
    </View>
  );

  const renderItem = ({ item }) => {
    return <TourItemList item={item} />;
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <SearchBar placeholder='Suchen...' onChangeText={updateSearch} lightTheme value={searchValue} />
      <View><Text style={styles.createOwnHint}>Nichts passendes dabei?</Text>
      <Text style={styles.createOwnHintSecond}>Erstellen Sie hier Ihre eigene Tour</Text>
      <TouchableOpacity
        style={styles.tourPlanerBtn}
        onPress={(e) => {
                console.log('btn not implemented');
              }}
      >
      <Text style={styles.textTourBtn}>Zum Tourenplaner</Text>
      </TouchableOpacity></View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredTours}
        renderItem={renderItem}
        style={{ width: '100%' }}
      ></FlatList>
    </View>
  );
}

export default TourScreen;

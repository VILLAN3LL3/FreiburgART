import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  Button,
  Linking,
} from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import Colors from '../constants/Colors';
import {
  SpeedDial,
  Image,
  SocialIcon,
  ListItem,
  Overlay,
  Rating,
} from 'react-native-elements';
import { GetGermanDateString } from '../services/artwork-service';
import Toast from 'react-native-root-toast';

const DetailScreen = (props) => {
  const [open, setOpen] = useState(false);
  const artworks = ARTWORK_LIST;
  const artworkId = props.navigation.getParam('artworkId');
  const [currentArtwork, setCurrentArtwork] = useState(
    artworks.find((artwork) => artwork.id === artworkId)
  );
  const [ratingOverlayVisible, setRatingOverlayVisible] = useState(false);
  let showThreeButton = false;
  if (currentArtwork.sketchfabUri) {
    showThreeButton = true;
  }
  const toggleOverlay = () => {
    setRatingOverlayVisible(!ratingOverlayVisible);
  };
  const ratingCompleted = (rating) => {
    Toast.show(`Du hast das Kunstwerk mit ${rating} Sternen bewertet.`, {
      duration: Toast.durations.LONG,
      backgroundColor: Colors.fourth,
      textColor: 'black',
      position: Toast.positions.TOP,
    });
    setRatingOverlayVisible(false);
  };
  const onShareButtonPress = () => {
    Toast.show("Danke für's Teilen :-)", {
      duration: Toast.durations.LONG,
      backgroundColor: Colors.fourth,
      textColor: 'black',
      position: Toast.positions.TOP,
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {showThreeButton && (
          <Button
            color={Colors.third}
            title='3D Modell oder Video verfügbar!'
            onPress={() => {
              props.navigation.navigate({
                routeName: 'ThreeDimModel',
                params: {
                  artworkId: currentArtwork.id,
                },
              });
            }}
          />
        )}
        <Image
          style={styles.image}
          source={
            currentArtwork.imageUrl
              ? { uri: currentArtwork.imageUrl }
              : require('../assets/dummy-artwork.jpg')
          }
          PlaceholderContent={<ActivityIndicator />}
        />
        {currentArtwork.visitedOn && (
          <Text style={{ paddingLeft: 5 }}>
            Besucht am {GetGermanDateString(currentArtwork.visitedOn)}
          </Text>
        )}
        {!currentArtwork.isCurrentlyAccessible && (
          <Text style={{ paddingLeft: 5, color: 'red' }}>
            Zur Zeit nicht zugänglich
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop:
              currentArtwork.visitedOn || !currentArtwork.isCurrentlyAccessible
                ? -55
                : -35,
          }}
        >
          <SocialIcon type='facebook' onPress={onShareButtonPress} />
          <SocialIcon type='twitter' onPress={onShareButtonPress} />
          <SocialIcon type='instagram' onPress={onShareButtonPress} />
        </View>
        <View style={styles.textContainer}>
          {currentArtwork.artists.length > 0 && (
            <ListItem key='artists' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Künstler</ListItem.Title>
                <ListItem.Subtitle>
                  {currentArtwork.artists.join(', ')}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          {currentArtwork.year && (
            <ListItem key='year' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Jahr der Fertigstellung</ListItem.Title>
                <ListItem.Subtitle>{currentArtwork.year}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          {currentArtwork.type && (
            <ListItem key='type' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Art des Kunstwerks</ListItem.Title>
                <ListItem.Subtitle>{currentArtwork.type}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          {currentArtwork.location && (
            <ListItem key='location' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Ort</ListItem.Title>
                <ListItem.Subtitle>{currentArtwork.location}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          {currentArtwork.material && (
            <ListItem key='material' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Verwendete Materialien</ListItem.Title>
                <ListItem.Subtitle>{currentArtwork.material}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          {currentArtwork.dimensions && (
            <ListItem key='dimensions' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Maße</ListItem.Title>
                <ListItem.Subtitle>
                  {currentArtwork.dimensions}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          {currentArtwork.infoUrls.length > 0 && (
            <ListItem key='links' bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Weiterführende Links</ListItem.Title>
                {currentArtwork.infoUrls.map((url) => (
                  <Text
                    key={url}
                    style={{ color: 'blue' }}
                    onPress={() => Linking.openURL(url)}
                  >
                    {url}
                  </Text>
                ))}
              </ListItem.Content>
            </ListItem>
          )}
        </View>
      </ScrollView>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'add', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        {!currentArtwork.visitedOn && currentArtwork.isCurrentlyAccessible && (
          <SpeedDial.Action
            icon={{ name: 'check-circle', color: '#fff' }}
            title='Als besucht markieren'
            onPress={() => {
              props.navigation.navigate('Quiz');
              currentArtwork.visitedOn = new Date();
              setCurrentArtwork({ ...currentArtwork });
            }}
          />
        )}

        <SpeedDial.Action
          icon={{ name: 'star-border', color: '#fff' }}
          title='Kunstwerk bewerten'
          onPress={() => {
            toggleOverlay();
            setOpen(false);
          }}
        />
        <SpeedDial.Action
          icon={{ name: 'favorite-border', color: '#fff' }}
          title='Als Favorit markieren'
          onPress={() => {
            Toast.show('Kunstwerk als Favorit markiert', {
              duration: Toast.durations.LONG,
              backgroundColor: Colors.fourth,
              textColor: 'black',
              position: Toast.positions.TOP,
            });
            setOpen(false);
          }}
        />
        <SpeedDial.Action
          icon={{ name: 'euro', color: '#fff' }}
          title='Spende an den Künstler'
          onPress={() => {
            Toast.show('Herzlichen Dank für Ihre Spende!', {
              duration: Toast.durations.LONG,
              backgroundColor: Colors.fourth,
              textColor: 'black',
              position: Toast.positions.TOP,
            });
            setOpen(false);
          }}
        />
      </SpeedDial>
      <Overlay isVisible={ratingOverlayVisible} onBackdropPress={toggleOverlay}>
        <Text>Bewerte das Kunstwerk:</Text>
        <Rating
          showRating
          onFinishRating={ratingCompleted}
          style={{ paddingVertical: 10 }}
          startingValue={0}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 400 },
  contentContainer: { paddingVertical: 20 },
  textContainer: { marginTop: 10 },
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

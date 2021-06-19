import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, Button, Linking } from 'react-native';
import { ARTWORK_LIST } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { SpeedDial, Image, SocialIcon, ListItem } from 'react-native-elements';
import { GetGermanDateString } from '../services/artwork-service';

const DetailScreen = (props) => {
  const [open, setOpen] = useState(false);
  const artworks = ARTWORK_LIST;
  const artworkId = props.navigation.getParam('artworkId');
  const currentArtwork = artworks.find((artwork) => artwork.id === artworkId);
  let showThreeButton = false;
  if(currentArtwork.sketchfabUri)
  {
    showThreeButton = true;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={{ ...styles.container, ...props.style }}> */}
        <Image
          style={styles.image}
          source={{ uri: currentArtwork.imageUrl }}
          PlaceholderContent={<ActivityIndicator />}
        />
        {currentArtwork.visitedOn && (
          <Text style={{ paddingLeft: 5 }}>Besucht am {GetGermanDateString(currentArtwork.visitedOn)}</Text>
        )}
        <View
          style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: currentArtwork.visitedOn ? -55 : -35 }}
        >
          <SocialIcon type='facebook' />
          <SocialIcon type='twitter' />
          <SocialIcon type='instagram' />
        </View>
        <View style={styles.textContainer}>
          <ListItem key='artists' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Künstler</ListItem.Title>
              <ListItem.Subtitle>{currentArtwork.artists.join(', ')}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem key='year' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Jahr der Fertigstellung</ListItem.Title>
              <ListItem.Subtitle>{currentArtwork.year}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem key='artists' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Art des Kunstwerks</ListItem.Title>
              <ListItem.Subtitle>{currentArtwork.type}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem key='location' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Ort</ListItem.Title>
              <ListItem.Subtitle>{currentArtwork.location}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem key='material' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Verwendete Materialien</ListItem.Title>
              <ListItem.Subtitle>{currentArtwork.material}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem key='dimensions' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Maße</ListItem.Title>
              <ListItem.Subtitle>{currentArtwork.dimensions}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem key='links' bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Weiterführende Links</ListItem.Title>
              {currentArtwork.infoUrls.map((url) => (
                <Text key={url} style={{ color: 'blue' }} onPress={() => Linking.openURL(url)}>
                  {url}
                </Text>
              ))}
            </ListItem.Content>
          </ListItem>
        </View>
        {showThreeButton && (
          <Button
            color={Colors.primaryDisabled}
            title='In 3D ansehen'
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
      </ScrollView>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'add', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        {!currentArtwork.visitedOn && (
          <SpeedDial.Action
            icon={{ name: 'check-circle', color: '#fff' }}
            title='Als besucht markieren'
            onPress={() => console.log('Mark artwork as visited')}
          />
        )}

        <SpeedDial.Action
          icon={{ name: 'share', color: '#fff' }}
          title='Teilen'
          onPress={() => console.log('Share artwork')}
        />
        <SpeedDial.Action
          icon={{ name: 'star-border', color: '#fff' }}
          title='Bewerten'
          onPress={() => console.log('Rate artwork')}
        />
        <SpeedDial.Action
          icon={{ name: 'favorite-border', color: '#fff' }}
          title='Als Favorit markieren'
          onPress={() => console.log('Set artwork as favorite')}
        />
      </SpeedDial>
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

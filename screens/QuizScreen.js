import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import Toast from 'react-native-root-toast';

const QuizScreen = (props) => {
  const [correct, setCorrect] = useState(null);

  const corretAnswerHandler = () => {
    setCorrect(true);
    Toast.show('Kunstwerk als besucht markiert', {
      duration: Toast.durations.LONG,
      backgroundColor: Colors.fourth,
      textColor: 'black',
      position: Toast.positions.TOP,
    });
    setTimeout(function () {
      props.navigation.goBack();
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Zeige uns, dass du hier warst und beantworte unser Quiz
      </Text>
      <Text style={styles.questionText}>
        Was steht auf der Rückseite des Kunstwerkes?
      </Text>
      <View style={styles.answerButton}>
        <Button
          style={styles.answerButton}
          color={Colors.third}
          title='Erstellt 1991'
          onPress={() => setCorrect(false)}
        ></Button>
      </View>
      <View style={styles.answerButton}>
        <Button
          style={styles.answerButton}
          color={Colors.third}
          title='Made in China'
          onPress={() => setCorrect(false)}
        ></Button>
      </View>
      <View style={styles.answerButton}>
        <Button
          style={styles.answerButton}
          color={Colors.third}
          onPress={corretAnswerHandler}
          title='Henry Moore'
        ></Button>
      </View>
      <View style={styles.answerButton}>
        <Button
          style={styles.answerButton}
          color={Colors.third}
          onPress={() => setCorrect(false)}
          title='Telefonnummer der Stadt'
        ></Button>
      </View>
      {correct !== null && (
        <View style={styles.icon}>
          <Icon
            reverse
            size={100}
            name={correct ? 'emoji-events' : 'thumb-down'}
            color={correct ? 'gold' : 'red'}
          ></Icon>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: Colors.fourth,
    padding: 20,
  },
  questionText: {
    fontSize: 16,
    marginVertical: 20,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  answerButton: {
    marginVertical: 5,
  },
  titleText: {
    fontSize: 20,
    borderBottomColor: Colors.primaryDisabled,
    borderBottomWidth: 1,
  },
});

export default QuizScreen;

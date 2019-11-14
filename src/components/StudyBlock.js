import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const StudyBlock = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.studyTitle}>{props.studyName}</Text>
        <View style={styles.studyOverview}>
          <Text>Dr. </Text>
          <Text>{props.doctorName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export const InfoBlock = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onpress}>
        <Text style={styles.studyTitle}>{props.prefix}</Text>
        <View style={styles.studyOverview}>
          <Text>{props.suffix}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default StudyBlock

const styles = StyleSheet.create({
  container: {
    width: '1000%',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  studyTitle: {
    fontWeight: 'bold',
    color: '#02aab0',
    textTransform: 'uppercase',
  },
  studyOverview: {
    flexDirection: 'row',
    marginTop: 5,
    color: 'white',
  },
});
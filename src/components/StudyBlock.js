import React from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

export default class StudyBlock extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity>
          <Text style={styles.studyTitle}>{this.props.studyName}</Text>
          <View style={styles.studyOverview}>
            <Text>Dr. </Text>
            <Text>{this.props.doctorName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    color: '#666',
  },
});
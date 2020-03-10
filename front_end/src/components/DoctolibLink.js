import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';

const DoctolibButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { Linking.openURL('https://www.doctolib.fr/doctors/' + props.doctorName.replace(' ', '+')) }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Doctolib</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default DoctolibButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 5,
    width: 100,
    backgroundColor: 'transparent',
    borderColor: '#00cdac',
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#00cdac',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    width: 300,
    borderBottomColor: '#00cdac',
    borderBottomWidth: 1,
  },
  button2Text: {
    fontSize: 14,
    color: '#00cdac',
  }
});
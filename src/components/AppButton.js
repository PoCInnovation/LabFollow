import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function AppButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonBg}
        onPress={() => { }} >
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonBg: {
    backgroundColor: "#4D9E9A",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    width: 250,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    color: "#fff",
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
});
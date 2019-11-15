import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MainHeader extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient
          style={styles.mainHeaderBackground}
          colors={["#00cdac", "#02aab0"]}
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.leftContainer}>
              <Button
                style={styles.textfieldIcon}
                title='='
                onPress={() => this.props.navigation.openDrawer()}
              />
            </View>
            <View style={styles.centerContainer}>
              <Text style={styles.mainHeaderTitle}>{this.props.title}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Icon style={styles.textfieldIcon} name="menu" size={22} color="#fff" />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainHeaderBackground: {
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  centerContainer: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 0.2,
    marginTop: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 0.2,
    marginTop: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  mainHeaderTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
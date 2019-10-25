import React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

Icon.loadFont();

function StackNavigatorHeader() {
  const { goBack } = this.props.navigation;
  return (
    <View style={styles.headerBar}>
      <TouchableOpacity
        onPress={() => goBack()} style={styles.button}>
        <Icon name="chevron-left" size={18} color="#fff" style={styles.headerButton} />
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    paddingTop: 1,
  },
  headerBar: {
    maxHeight: 105,
    padding: 3,
    paddingTop: 20,
    color: '#fff',
    width: '100%',
    zIndex: 3,
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default StackNavigatorHeader;
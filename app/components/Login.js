import React from 'react';
import { StyleSheet, Button, View, ScrollView, TextInput, Text, KeyboardAvoidingView, Dimensions } from 'react-native';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
const { height } = Dimensions.get('window');

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };
  state = {
    screenHeight: height,
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const { navigate } = this.props.navigation;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={styles.mainView}>
        <KeyboardAvoidingView style={styles.mainView} behavior="padding" enabled>
          <ScrollView style={styles.mainScrollView} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
            <Icon name='login-variant' size={90} color='#666' style={styles.mainIcon}></Icon>
            <Text style={styles.title}>Welcome back!</Text>
            <Text style={styles.paragraph}>Please enter your email and password to login.</Text>
            <Text style={styles.textfieldTitle}>Email</Text>
            <TextInput placeholder="john.doe@email.com" autoCapitalize='none' style={styles.textfield}></TextInput>
            <Text style={styles.textfieldTitle}>Password</Text>
            <TextInput placeholder="password" autoCapitalize='none' secureTextEntry={true} style={styles.textfield}></TextInput>
            <Button
              title="Login"
              onPress={() => navigate('Studies')}
            />
            <Button
              title="Go back"
              onPress={() => navigate('Home')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainIcon: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 60,
    borderColor: '#666',
    borderWidth: 1,
    width: 120,
    height: 120,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: '#0B7A75',
  },
  paragraph: {
    marginTop: 20,
  },
  textfield: {
    borderColor: '#ddd',
    borderWidth: 1,
    width: 270,
    padding: 5,
  },
  textfieldTitle: {
    color: '#0B7A75',
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 12,
    marginBottom: 3,
    marginTop: 20,
    width: 270,
  },
  mainScrollView: {
    flexGrow: 1,
  }
});
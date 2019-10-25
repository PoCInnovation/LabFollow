import React from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { loginPatient } from '../network/login'
import { _storeData } from '../utils/localStorage'

Icon.loadFont();
TextInput.defaultProps.selectionColor = 'white'

const Login = (props) => {

  const [login, setLogin] = React.useState('jean@epitech.eu')
  const [password, setPassword] = React.useState('azerty')

  const handleLogin = async () => {
    console.log(login, password)
    const token = await loginPatient(login, password)
    console.log(token)

    await _storeData('token', token)
    await _storeData('isLogged', true)
    props.navigation.navigate('Studies')
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["#00cdac", "#02aab0"]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Lab Follow
        </Text>
          <View style={styles.mainContainer}>
            <Text style={styles.paragraph}>
              Please enter your email and password to login to LabFollow.
            </Text>
            <View style={styles.textfieldContainer}>
              <Icon style={styles.textfieldIcon} name="email" size={20} color="#fff" />
              <TextInput
                placeholder="email"
                placeholderTextColor="#ffffff77"
                autoCapitalize='none'
                style={styles.textfield}
                onChangeText={text => setLogin(text)}
                value={login}
              />
            </View>
            <View style={styles.textfieldContainer}>
              <Icon style={styles.textfieldIcon} name="locked" size={20} color="#fff" />
              <TextInput
                placeholder="password"
                placeholderTextColor="#ffffff77"
                autoCapitalize='none'
                secureTextEntry={true}
                style={styles.textfield}
                onChangeText={text => setPassword(text)}
                value={password}
              />
            </View>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <View style={styles.button2}>
              <Text style={styles.button2Text}>Create an Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

Login.navigationOptions = {
  title: 'Login',
  header: null,
};

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    // paddingBottom: 20,
    borderRadius: 5,
    width: 300,
    backgroundColor: '#ffffff22',
    borderColor: '#ffffffaa',
    borderWidth: 1,
  },
  title: {
    margin: 24,
    fontSize: 32,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  paragraph: {
    margin: 15,
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    // letterSpacing: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  textfieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 270,
    marginTop: 10,
  },
  textfieldIcon: {
    padding: 10,
    // backgroundColor: '#fff',
  },
  textfield: {
    // borderColor: '#ddd',
    // borderWidth: 1,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#fff',
  },
  textfieldTitle: {
    color: '#fff',
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 12,
    marginBottom: 3,
    marginTop: 20,
    width: 270,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 5,
    width: 100,
    backgroundColor: '#ffffff33',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#fff',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    width: 300,
    borderBottomColor: '#ffffffaa',
    borderBottomWidth: 1,
  },
  button2Text: {
    fontSize: 14,
    color: '#fff',
  }
});
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Fontisto';
import { signupPatient } from '../network/register'
import Context from "../store/context";

FAIcon.loadFont();
TextInput.defaultProps.selectionColor = 'white'

const TextError = (props) => {
  return (
    props.hasError ? (
      <Text style={{ color: "red" }}>{props.value}</Text>
    ) : (<View></View>)
  )
}

const Signup = (props) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')

  const [errorEmail, setErrorEmail] = React.useState(false)
  const [errorPassword, setErrorPassword] = React.useState(false)
  const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState(false)

  const [passwordIdentical, setPasswordIdentical] = React.useState(false)
  const name = props.navigation.getParam("firstName") + " " + props.navigation.getParam("lastName")

  const checkPasswords = () => {
    if (errorEmail || errorPassword || errorPasswordConfirm)
      return false
    if (password === passwordConfirm)
      return false
    return true
  }

  const createAccount = async (context) => {

    setErrorEmail(email.trim() === "")
    setErrorPassword(password === "")
    setErrorPasswordConfirm(passwordConfirm === "")
    setPasswordIdentical(checkPasswords())

    if (!passwordIdentical && !errorEmail && !errorPassword && !errorPasswordConfirm) {
      const token = await signupPatient(name, email.trim(), password)
      if (token) {
        context.updateToken(token)
        props.navigation.navigate('Studies')
      }
    }
  }

  return (
    <Context.Consumer>
      {context => (
        <LinearGradient
          style={styles.container}
          colors={["#00cdac", "#02aab0"]}
        >
          <SafeAreaView>
            <View style={styles.container}>
              <FAIcon name='handshake-o' size={90} color='#fff' style={styles.mainIcon} />
              <Text style={styles.title}>Creation de compte</Text>
              <View style={styles.mainContainer}>
                <Text style={styles.paragraph}>
                  Choisissez l'email et le mot de passe que vous vous souhaitez utiliser.
                </Text>
                <View style={styles.textfieldContainer}>
                  <Icon style={styles.textfieldIcon} name="email" size={20} color="#fff" />
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="#ffffff77"
                    autoCapitalize='none'
                    style={styles.textfield}
                    onChangeText={text => setEmail(text)}
                    value={email}
                  />
                  <TextError hasError={errorEmail} value="Ce champ est obligatoire" />
                </View>
                <View style={styles.textfieldContainer}>
                  <Icon style={styles.textfieldIcon} name="locked" size={20} color="#fff" />
                  <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="#ffffff77"
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={styles.textfield}
                    onChangeText={text => setPassword(text)}
                    value={password}
                  />
                  <TextError hasError={errorPassword} value="Ce champ est obligatoire" />
                </View>
                <View style={styles.textfieldContainer}>
                  <Icon style={styles.textfieldIcon} name="locked" size={20} color="#fff" />
                  <TextInput
                    placeholder="Confirmez le mot de passe"
                    placeholderTextColor="#ffffff77"
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={styles.textfield}
                    onChangeText={text => setPasswordConfirm(text)}
                    value={passwordConfirm}
                  />
                  <TextError hasError={errorPasswordConfirm} value="Ce champ est obligatoire" />
                </View>
                <TouchableOpacity
                  onPress={() => createAccount(context)}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Create</Text>
                  </View>
                </TouchableOpacity>
                <TextError hasError={passwordIdentical} value="Les mots de passe ne sont pas identiques" />
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      )}
    </Context.Consumer>
  );
}

export default Signup

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
    padding: 15,
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
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
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
    marginTop: 20,
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
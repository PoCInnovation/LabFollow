import React from 'react';
import { StyleSheet, View, Text, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { loginPatient } from '../network/login'
import { StyledInput } from '../components/FormWrapper'
import Context from "../store/context";
import { Formik } from 'formik';
import * as yup from 'yup';
import { fetchMePatient } from '../network/mePatient'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .label('Email')
    .required("Ce champ est obligatoire"),
  password: yup
    .string()
    .label('Password')
    .required("Ce champ est obligatoire")
});

const Login = (props) => {

  const handleLogin = async (context, values) => {

    const token = await loginPatient(values.email, values.password)

    if (!token.errors) {
      context.updateToken(token.data.loginPatient.token)
      data = await fetchMePatient(token.data.loginPatient.token)
      if (!data.error) {
        context.updateId(data.data.mePatient.id)
        context.updateName(data.data.mePatient.name)
        context.updateEmail(data.data.mePatient.email)
        context.updateBirthday(data.data.mePatient.birthday)
        context.updateDoctor(data.data.mePatient.doctors)
        context.updateSurveys(data.data.mePatient.surveys)
      } else
        console.log(data.errors[0].message);
      props.navigation.navigate('Studies')
    } else
      console.log(token.errors[0].message);
  }

  return (
    <Context.Consumer>
      {context => (
        <Formik
          initialValues={{
            email: 'jean@epitech.eu',
            password: 'azerty',
          }}
          onSubmit={(values) => { handleLogin(context, values) }}
          validationSchema={validationSchema}
        >
          {formikProps => (
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
                      Entrez vous identifiants pour vous connecter à LabFollow.
                </Text>
                    <View>
                      <StyledInput
                        label="Email"
                        icon="email"
                        formikProps={formikProps}
                        formikKey="email"
                      // autoFocus
                      />
                      <StyledInput
                        label="Password"
                        icon="locked"
                        formikProps={formikProps}
                        formikKey="password"
                        secureTextEntry
                      />
                    </View>
                    {formikProps.isSubmitting ? (
                      <ActivityIndicator />
                    ) : (
                        <TouchableOpacity onPress={formikProps.handleSubmit}>
                          <View style={styles.button}>
                            <Text style={styles.buttonText}>Connexion</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                  </View>
                  <TouchableOpacity onPress={() => props.navigation.navigate('SignupDetails')}>
                    <View style={styles.button2}>
                      <Text style={styles.button2Text}>Créer un compte</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </LinearGradient>
          )}
        </Formik>
      )
      }
    </Context.Consumer >
  );
}

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
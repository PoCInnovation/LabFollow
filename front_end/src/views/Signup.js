import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { signupPatient } from '../network/register'
import { StyledInput } from '../components/FormWrapper'
import Context from "../store/context";
import { Formik } from 'formik';
import * as yup from 'yup';

FAIcon.loadFont();
TextInput.defaultProps.selectionColor = 'white'

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
    .min(6, '6 charactères minimum'),
  confirmPassword: yup
    .string()
    .required("Ce champ est obligatoire")
    .label('Confirm password')
    .test('passwords-match', 'Les mots de passe ne sont pas identiques', function (value) {
      return this.parent.password === value;
    }),
});


const Signup = (props) => {

  const name = props.navigation.getParam("firstName") + " " + props.navigation.getParam("lastName")

  const createAccount = async (context, values) => {

    const token = await signupPatient(name, values.email.trim(), values.password, props.navigation.getParam("birthDay"))

    if (!token.errors) {
      context.updateToken(token.data.signupPatient.token)
      context.updateId(token.data.signupPatient.patient.id)
      context.updateName(token.data.signupPatient.patient.name)
      context.updateEmail(token.data.signupPatient.patient.email)
      context.updateBirthday(token.data.signupPatient.patient.birthday)
      context.updateSurveys(token.data.signupPatient.patient.surveys)
      props.navigation.navigate('Studies')
    } else
      console.log(token.errors[0].message);
  }

  return (
    <Context.Consumer>
      {context => (
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => { createAccount(context, values) }}
          validationSchema={validationSchema}
        >
          {formikProps => (
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
                      <StyledInput
                        label="Confirm Password"
                        icon="locked"
                        formikProps={formikProps}
                        formikKey="confirmPassword"
                        secureTextEntry
                      />
                    </View>
                    {formikProps.isSubmitting ? (
                      <ActivityIndicator />
                    ) : (
                        <TouchableOpacity onPress={formikProps.handleSubmit}>
                          <View style={styles.button}>
                            <Text style={styles.buttonText}>Créer</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                  </View>
                </View>
              </SafeAreaView>
            </LinearGradient>
          )}
        </Formik>
      )}
    </Context.Consumer >
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
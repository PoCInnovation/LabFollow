import React from 'react';
import { StyleSheet, ActivityIndicator, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Fontisto';
import { StyledInput } from '../components/FormWrapper'
import { Formik } from 'formik';
import * as yup from 'yup';

FAIcon.loadFont();
TextInput.defaultProps.selectionColor = 'white'

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("Ce champ est obligatoire"),
  lastName: yup
    .string()
    .trim()
    .required("Ce champ est obligatoire"),
  birthDay: yup
    .string()
    .required("Ce champ est obligatoire"),
});

const SignupDetails = (props) => {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        birthDay: '',
      }}
      onSubmit={(values) => {
        console.log(values)
        props.navigation.navigate('Signup', {
          firstName: values.firstName,
          lastName: values.lastName,
          birthDay: values.birthDay,
        })
      }}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <LinearGradient
          style={styles.container}
          colors={["#00cdac", "#02aab0"]}
        >
          <SafeAreaView>
            <View style={styles.container}>
              <Icon name='person' size={90} color='#fff' style={styles.mainIcon} />
              <Text style={styles.title}>Bienvenue</Text>
              <View style={styles.mainContainer}>
                <Text style={styles.paragraph}>
                  Dites nous en plus à propos de vous. Ces informations seront utilisées par vos docteurs pour vous envoyer des questionnaires adaptés.
              </Text>
                <View>
                  <StyledInput
                    label="Prénom"
                    icon="person"
                    formikProps={formikProps}
                    formikKey="firstName"
                  />
                  <StyledInput
                    label="Nom de famille"
                    icon="person"
                    formikProps={formikProps}
                    formikKey="lastName"
                  />
                  <StyledInput
                    label="JJ.MM.AAAA"
                    icon="date"
                    formikProps={formikProps}
                    formikKey="birthDay"
                    keyboardType="number-pad"
                  />
                </View>
                {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                    <TouchableOpacity onPress={formikProps.handleSubmit}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Suivant</Text>
                      </View>
                    </TouchableOpacity>
                  )}
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      )}
    </Formik>
  );
}

export default SignupDetails

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
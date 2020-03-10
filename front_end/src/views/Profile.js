import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import MainHeader from '../components/MainHeader'
import Context from "../store/context";
import { InfoBlock } from '../components/StudyBlock'
import { Formik } from 'formik';
import { StyledInput } from '../components/FormWrapper'
import { editPatient } from '../network/editPatient'
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .label('Email')
    .required("Ce champ est obligatoire"),
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

const Profile = (props) => {

  const [isEditing, setIsEditing] = React.useState(false)

  function ShowProfile(context) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <InfoBlock
            prefix="Nom"
            suffix={context.name}
          />
          <InfoBlock
            prefix="Email"
            suffix={context.email}
          />
          <InfoBlock
            prefix="Date de naissance"
            suffix={context.birthday ? context.birthday : "Non précisée"}
          />
          <InfoBlock
            prefix="Questionnaires reçus"
            suffix={"Voir la liste de mes questionnaires"}
            onpress={() => props.navigation.navigate('Studies')}
          />
          <InfoBlock
            prefix="Mes docteurs"
            suffix={"Voir la liste de mes docteurs"}
            onpress={() => props.navigation.navigate('Doctors')}
          />
          <InfoBlock
            prefix="Editer mon profile"
            suffix={"Modifier mes informations"}
            onpress={() => setIsEditing(true)}
          />
        </View>
      </SafeAreaView>
    )
  }

  function ShowEditProfile(context) {

    const name = context.name.split(' ')

    const updatePatientData = async (context, values) => {
      console.log(values)
      console.log(`${values.firstName} ${values.lastName}`)
      const res = await editPatient(context.id, values.email, `${values.firstName} ${values.lastName}`, values.birthDay)
      if (!res.errors) {
        context.updateName(`${values.firstName} ${values.lastName}`)
        context.updateEmail(values.email)
        context.updateBirthday(values.birthDay)
        setIsEditing(false)
      } else
        console.log(res.errors[0].message);
    }

    return (
      <SafeAreaView >
        <View>
          <Formik
            initialValues={{
              firstName: name[0],
              lastName: name[1],
              email: context.email,
              birthDay: context.birthday,
            }}
            onSubmit={(values) => { updatePatientData(context, values) }}
            validationSchema={validationSchema}
          >
            {formikProps => (
              <View >
                <View >
                  <View>
                    <StyledInput
                      color="black"
                      label="Prénom"
                      icon="email"
                      formikProps={formikProps}
                      formikKey="firstName"
                      value={formikProps.values.firstName}
                    />
                    <StyledInput
                      color="black"
                      label="Nom de famille"
                      icon="email"
                      formikProps={formikProps}
                      formikKey="lastName"
                      value={formikProps.values.lastName}
                    />
                    <StyledInput
                      color="black"
                      label="Email"
                      icon="email"
                      formikProps={formikProps}
                      formikKey="email"
                      value={formikProps.values.email}
                    />
                    <StyledInput
                      color="black"
                      label="Date de Naissance"
                      icon="locked"
                      formikProps={formikProps}
                      value={formikProps.values.birthDay}
                      formikKey="birthDay"
                    />
                  </View>
                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                      <TouchableOpacity onPress={formikProps.handleSubmit}>
                        <View style={styles.button}>
                          <Text style={styles.buttonText}>Modifier</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                </View>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <Context.Consumer>
      {context => (
        <View style={"backgroundColor: blue"}>
          <MainHeader title="Mes Informations" navigation={props.navigation} context={context} />
          {isEditing ? ShowEditProfile(context) : ShowProfile(context)}
        </View>
      )}
    </Context.Consumer>
  );
}

export default Profile

const styles = StyleSheet.create({
  title: {
    color: 'rgb(236, 0, 140)'
  },
  titleSecond: {
    color: "white"
  },
  subtitle: {
    flex: 1,
    fontSize: 14,
    color: 'grey'
  },
  list: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(235,235,237)',
    borderRadius: 10,
  },
  listContainerSecond: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "pink"
  },
  contentContainer: {
    flex: 3
  },
})
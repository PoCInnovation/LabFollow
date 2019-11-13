import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MainHeader from '../components/MainHeader'
import { PatientSurveysList } from '../components/PatientSurveysList'
import Context from "../store/context";

const Studies = (props) => {

  return (
    <Context.Consumer>
      {context => (
        <View>
          <MainHeader title="Mes questionnaires" navigation={props.navigation} context={context} />
          <SafeAreaView>
            <PatientSurveysList context={context} />
          </SafeAreaView>
        </View>
      )}
    </Context.Consumer>
  );
}

export default Studies
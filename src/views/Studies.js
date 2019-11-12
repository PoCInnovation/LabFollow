import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import MainHeader from '../components/MainHeader'
import { ScrollView } from 'react-native-gesture-handler';
import { PatientSurveysList } from '../components/PatientSurveysList'
import Context from "../store/context";

const Studies = (props) => {

  return (
    <Context.Consumer>
      {context => (
        <View>
          <MainHeader title="Mes questionnaires" navigation={props.navigation} context={context} />
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <PatientSurveysList context={context} />
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
    </Context.Consumer>
  );
}

export default Studies

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
});
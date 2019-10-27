import React from 'react';
import { StyleSheet, Button, SafeAreaView, View } from 'react-native';
import MainHeader from '../components/MainHeader'
import { ScrollView } from 'react-native-gesture-handler';
import { MePatient } from '../network/mePatient'
import Context from "../store/context";

const Studies = (props) => {
  return (
    <Context.Consumer>
      {context => (
        <View>
          <MainHeader title="Mes questionnaires" navigation={props.navigation} />
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <MePatient context={context} />
              <Button
                title="Logout"
                onPress={() => props.navigation.navigate('Home')}
              />
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
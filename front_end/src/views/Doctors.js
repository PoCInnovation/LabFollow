import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader'
import Context from "../store/context";
import { InfoBlock } from '../components/StudyBlock'
import DoctolibButton from '../components/DoctolibLink'

const Doctors = (props) => {

  return (
    <Context.Consumer>
      {context => (
        <View>
          <MainHeader title="Mes docteurs" navigation={props.navigation} context={context} />
          <SafeAreaView>
            <FlatList
              data={context.doctors}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <View style={styles.leftContainer}>
                    <InfoBlock prefix={item.name} suffix={item.speciality} />
                  </View>
                  <View style={styles.rightContainer}>
                    <DoctolibButton doctorName={item.name} />
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </View>
      )}
    </Context.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 15,
  },
  centerContainer: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    // flex: 0.2,
    marginTop: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    // flex: 0.2,
    marginTop: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  mainHeaderTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default Doctors
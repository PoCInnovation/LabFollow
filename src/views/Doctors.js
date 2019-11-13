import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import MainHeader from '../components/MainHeader'
import Context from "../store/context";
import { InfoBlock } from '../components/StudyBlock'

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
                <InfoBlock
                  prefix={item.name}
                  suffix={item.email}
                />
              )}
            />
          </SafeAreaView>
        </View>
      )}
    </Context.Consumer>
  );
}

export default Doctors
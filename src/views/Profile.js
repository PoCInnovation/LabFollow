import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import MainHeader from '../components/MainHeader'
import Context from "../store/context";
import { InfoBlock } from '../components/StudyBlock'

const Profile = (props) => {

  return (
    <Context.Consumer>
      {context => (
        <View>
          <MainHeader title="Mes Informations" navigation={props.navigation} context={context} />
          <SafeAreaView>
            {console.log(context)}
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
            </View>
          </SafeAreaView>
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
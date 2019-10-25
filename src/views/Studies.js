import React from 'react';
import { StyleSheet, Button, SafeAreaView, View } from 'react-native';
import MainHeader from '../components/MainHeader'
import { ScrollView } from 'react-native-gesture-handler';
import { MePatient } from '../network/mePatient'

export default class Studies extends React.Component {
  static navigationOptions = {
    title: 'Studies',
    header: null,
    gesturesEnabled: false,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <MainHeader title='Studies List' navigation={this.props.navigation} />
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <MePatient />
            <Button
              title="Logout"
              onPress={() => navigate('Home')}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
});
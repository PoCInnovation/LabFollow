import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StudyBlock from './StudyBlock'
import fetchMePatient from '../network/mePatient'

export function PatientSurveysList(props) {

  const [data, setData] = React.useState()

  useEffect(() => {
    if (!data) {
      getData(props.context.data.token);
    }
  }, []);

  const getData = async (token) => {
    setData(await fetchMePatient(token, props.context))
  }

  return (
    <View style={styles.studyList}>
      <FlatList
        data={data.surveys}
        renderItem={({ item }) => (<StudyBlock studyName={item.title} doctorName={item.submitter.name} studyCreationDate={item.createdAt} />)}
        keyExtractor={item => item.id}
        width='90%'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  studyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
});
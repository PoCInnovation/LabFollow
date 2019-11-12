import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import StudyBlock from './StudyBlock'
import { fetchMePatient } from '../network/mePatient'

export function PatientSurveysList(props) {

  const [data, setData] = React.useState()

  useEffect(() => {
    if (!data) {
      getData(props.context.token);
    }
  }, []);

  useEffect(() => {
    if (data) {
      props.context.updateId(data.id)
      props.context.updateName(data.name)
      props.context.updateEmail(data.email)
      props.context.updateDoctor(data.doctors)
      props.context.updateSurveys(data.surveys)
    }
  }, [data]);

  const getData = async (token) => {
    setData(await fetchMePatient(token))
  }

  return (
    <View style={styles.studyList}>
      {!data ? <Text>Loading...</Text> :
        <FlatList
          data={data.surveys}
          renderItem={({ item }) => (<StudyBlock studyName={item.title} doctorName={item.submitter.name} studyCreationDate={item.createdAt} />)}
          keyExtractor={item => item.id}
          width='90%'
        />
      }
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
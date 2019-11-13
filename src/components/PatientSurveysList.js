import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import StudyBlock from './StudyBlock'
import { fetchMePatient } from '../network/mePatient'

export function PatientSurveysList(props) {

  const [data, setData] = React.useState()
  const [refreshing, setRefresh] = useState(false);

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

  handleRefresh = () => {
    setRefresh(true);
    getData(props.context.token);
  };

  const getData = async (token) => {
    setData()
    setData(await fetchMePatient(token))
    setRefresh(false);
  }

  return (
    <View style={styles.studyList}>
      {!data ? <ActivityIndicator /> :
        <FlatList
          data={data.surveys}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          width='90%'
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <StudyBlock
              studyName={item.title}
              doctorName={item.submitter.name}
              studyCreationDate={item.createdAt}
            />
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  studyList: {
    // flex: 1,
    // alignItems: 'center',
    marginStart: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    // width: '100%',
    // height: '100%',
  },
});
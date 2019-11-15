import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import StudyBlock from '../components/StudyBlock'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { _retrieveData } from '../utils/localStorage'

const ME_PATIENT = gql`
  {
    mePatient {
      doctors {
        id
        name
        email
      }
      id
      name
      email
      surveys {
        id
        title
        content
        submitter { name }
        createdAt
      }
    }
  }
`;

export function MePatient(token) {
  const { loading, error, data } = useQuery(ME_PATIENT);

  if (loading) return (
    <View style={styles.studyList}>
      <ActivityIndicator />
    </View>
  );
  if (error) return (
    <View style={styles.studyList}>
      <Text>An error occurred while trying to load your studies.</Text>
      <Text>Please retry later.</Text>
    </View>
  );

  console.log(data)
  return (
    <View style={styles.studyList}>
      <FlatList
        data={data.mePatient.surveys}
        renderItem={({ item }) => (<StudyBlock studyName={item.title} doctorName={item.submitter.name} studyCreationDate={item.createdAt}></StudyBlock>)}
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
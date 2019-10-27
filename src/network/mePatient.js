import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import StudyBlock from '../components/StudyBlock'
import { apolloFetch } from './index'

export function fetchMePatient(token, context) {
  return new Promise((resolve, reject) => {

    const query = `
      query getPatientInfo {
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

    apolloFetch.use(({ request, options }, next) => {
      if (!options.headers) { options.headers = {}; }
      options.headers['authorization'] = token;
      next();
    });

    return apolloFetch({ query })
      .then(res => {
        console.log(res.data.mePatient)
        context.updateName(res.data.mePatient.name)
        context.updateEmail(res.data.mePatient.email)
        resolve(res.data.mePatient.surveys);
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

export function MePatient(props) {

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
        data={data}
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
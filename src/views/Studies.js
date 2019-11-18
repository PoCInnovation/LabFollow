import React, { useEffect, useState, useContext } from 'react';
import MainHeader from '../components/MainHeader'
import { View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Context from "../store/context";
import StudyBlock from '../components/StudyBlock'
import { fetchMePatient } from '../network/mePatient'

const Studies = (props) => {

  const contextValue = useContext(Context);
  const [data, setData] = React.useState(contextValue)
  const [refreshing, setRefresh] = useState(false);

  useEffect(() => {
    if (data.length == 0) {
      getData(contextValue.token);
    }
  }, []);

  useEffect(() => {
    if ((data != contextValue) && data.length != 0) {
      contextValue.updateId(data.data.mePatient.id)
      contextValue.updateName(data.data.mePatient.name)
      contextValue.updateEmail(data.data.mePatient.email)
      contextValue.updateDoctor(data.data.mePatient.doctors)
      contextValue.updateSurveys(data.data.mePatient.surveys)
    }
  }, [data]);

  handleRefresh = () => {
    setRefresh(true);
    getData(contextValue.token);
  };

  const getData = async (token) => {
    setData([])
    setData(await fetchMePatient(token))
    setRefresh(false);
  }

  return (
    <View>
      <MainHeader title="Mes questionnaires" navigation={props.navigation} context={contextValue} />
      <SafeAreaView>
        {!contextValue.surveys ? <ActivityIndicator /> :
          <FlatList
            data={contextValue.surveys}
            refreshing={refreshing}
            onRefresh={handleRefresh}
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
      </SafeAreaView>
    </View>
  );
}

export default Studies
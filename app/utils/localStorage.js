import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) { console.log(error) }
};

export const _retrieveData = async (value) => {
  try {
    const result = await AsyncStorage.getItem(value);
    if (result !== null) {
      console.log(result);
      return (value)
    }
  } catch (error) { console.log(error) }
};
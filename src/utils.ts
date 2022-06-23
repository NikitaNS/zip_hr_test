import AsyncStorage from '@react-native-async-storage/async-storage';

export const persisttData = async (dataName: string, data: any) => {
  try {
    await AsyncStorage.setItem(dataName, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getPersistData = async (dataName: string) => {
  try {
    await AsyncStorage.getItem(dataName);
  } catch (error) {
    console.log(error);
  }
};

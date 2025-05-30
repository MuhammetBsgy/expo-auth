import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'user_uid';

export const saveUser = async (uid: string) => {
  await AsyncStorage.setItem(KEY, uid);
};

export const getUser = async () => {
  return await AsyncStorage.getItem(KEY);
};

export const clearUser = async () => {
  await AsyncStorage.removeItem(KEY);
};

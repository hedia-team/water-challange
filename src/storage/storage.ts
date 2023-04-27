import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const isLoggedIn = storage.getBoolean('isLoggedIn');

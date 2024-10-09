import {MMKV} from 'react-native-mmkv';
import {StoreApi, create} from 'zustand';
import {
  devtools,
  persist,
  StateStorage,
  createJSONStorage,
} from 'zustand/middleware';
import {IDrinkerSlice, drinkerSlice} from './slices/drinkerSlice';
import {IRecordSlice, recordSlice} from './slices/recordSlice';

// Initializing a MMKV storage instance
export const MMKVStorage = new MMKV();
// MMKVStorage.clearAll();

const MMKVZustandPersister = (): StateStorage => {
  return {
    getItem: (name: string) => MMKVStorage.getString(name) ?? null,
    setItem: (name: string, value: string) => MMKVStorage.set(name, value),
    removeItem: (name: string) => MMKVStorage.delete(name),
  };
};

export type StoreSlice<T> = (
  set: StoreApi<T>['setState'],
  get: StoreApi<T>['getState'],
) => T;

export type StoreState = IDrinkerSlice & IRecordSlice;

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (setState, getState) => ({
        ...drinkerSlice(setState, getState),
        ...recordSlice(setState, getState),
      }),
      {
        name: 'ZUSTAND_OFFLINE_CACHE',
        storage: createJSONStorage(MMKVZustandPersister),
      },
    ),
  ),
);

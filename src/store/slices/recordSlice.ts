import {Record} from '../../types';
import {StoreSlice} from '../storage';

export interface IRecordSlice {
  records: Record[];
  setRecords: (records: Record[]) => void;
  unsetRecords: () => void;
}

export const recordSlice: StoreSlice<IRecordSlice> = set => ({
  records: [],
  setRecords: records => set({records}),
  unsetRecords: () => set({records: []}),
});

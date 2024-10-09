import {mockRecords} from '../../data';
import {Record} from '../../types';

export const getRecords = async (): Promise<Record[]> => {
  return new Promise(resolve => resolve(mockRecords));
};

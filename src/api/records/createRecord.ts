import {mockRecords} from '../../data';
import {Record} from '../../types';

export const createRecord = async (
  drinkerId: string,
  amount: number,
): Promise<void> => {
  const newRecord: Record = {
    id: (mockRecords.length + 1).toString(),
    drinkerId,
    amount,
    createdAt: new Date().toISOString(),
  };
  mockRecords.push(newRecord);
  return new Promise(resolve => resolve());
};

import {mockRecords} from '../../data';

export const deleteRecord = async (recordId: string): Promise<void> => {
  const index = mockRecords.findIndex(record => record.id === recordId);
  if (index !== -1) {
    mockRecords.splice(index, 1);
  }
  return new Promise(resolve => resolve());
};

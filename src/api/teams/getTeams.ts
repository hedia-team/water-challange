import {mockTeams} from '../../data';
import {Team} from '../../types';

export const getTeams = async (): Promise<Team[]> => {
  return new Promise(resolve => resolve(mockTeams));
};

import {mockDrinkers} from '../../data';
import {Drinker} from '../../types';

export const getDrinkers = async (): Promise<Drinker[]> => {
  return new Promise(resolve => resolve(mockDrinkers));
};

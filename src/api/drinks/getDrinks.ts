import {mockDrinks} from '../../data';
import {Drink} from '../../types';

export const getDrinks = async (): Promise<Drink[]> => {
  return new Promise(resolve => resolve(mockDrinks));
};

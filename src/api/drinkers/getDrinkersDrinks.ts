import {mockDrinks} from '../../data';
import {Drink} from '../../types';

export const getDrinkersDrinks = async (
  drinkerId: string,
): Promise<Drink[]> => {
  return new Promise(resolve =>
    resolve(mockDrinks.filter(drink => drink.drinkerId === drinkerId)),
  );
};

import {mockDrinks} from '../../data';
import {Drink} from '../../types';

export const getTeamDrinks = async (teamId: string): Promise<Drink[]> => {
  return new Promise(resolve =>
    resolve(mockDrinks.filter(drink => drink.teamId === teamId)),
  );
};

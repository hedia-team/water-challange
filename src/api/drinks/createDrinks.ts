import {mockDrinks, mockTeams} from '../../data';
import {Drink} from '../../types';

export const createDrinks = async (
  drinkerId: string,
  amount: number,
): Promise<void> => {
  const newDrink: Drink = {
    id: (mockDrinks.length + 1).toString(),
    drinkerId,
    teamId: mockTeams.find(team => team.drinkers.includes(drinkerId))?.id || '',
    amount,
    createdAt: new Date().toISOString(),
  };
  mockDrinks.push(newDrink);
  return new Promise(resolve => resolve());
};

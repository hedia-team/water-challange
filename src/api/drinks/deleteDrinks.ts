import {mockDrinks} from '../../data';

export const deleteDrink = async (drinkId: string): Promise<void> => {
  const index = mockDrinks.findIndex(drink => drink.id === drinkId);
  if (index !== -1) {
    mockDrinks.splice(index, 1);
  }
  return new Promise(resolve => resolve());
};

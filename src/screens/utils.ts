import {Drink, Team} from '../types';
interface TotalByDrinker {
  [drinkerId: string]: number;
}
export interface TeamWithTotalAmount {
  team: Team;
  totalAmount: number;
}

export const getSortedDrinkers = (drinks: Array<Drink>) => {
  const totalByDrinker: TotalByDrinker = drinks?.reduce(
    (acc: TotalByDrinker, curr) => {
      const {drinkerId, amount} = curr;
      acc[drinkerId] = acc[drinkerId] ? acc[drinkerId] + amount : amount;
      return acc;
    },
    {},
  );

  const sortedDrinkersWithAmount = Object.entries(totalByDrinker)
    .sort(([, a], [, b]) => b - a)
    .map(([drinkerId, total]) => ({drinkerId, total}));
  return sortedDrinkersWithAmount;
};

/*
Using the getSortedDrinkers function, implement the getRanking function
that returns the ranking of a drinker based on the total amount of drinks they have consumed.
*/
export const getRanking = (drinks: Array<Drink>, drinkerId: string) => {
  return 1;
};

/*
Implement the sortTeamsByTotalAmount function that takes an array of teams and an array of drinks
and returns an array of TeamWithTotalAmount objects.
*/
export const sortTeamsByTotalAmount = (
  teams: Team[],
  drinks: Drink[],
): TeamWithTotalAmount[] => {
  return [];
};

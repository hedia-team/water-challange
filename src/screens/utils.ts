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

export const getRanking = (drinks: Array<Drink>, drinkerId: string) => {
  const sortedDrinkersWithAmount = getSortedDrinkers(drinks);
  const index = sortedDrinkersWithAmount.findIndex(
    ({drinkerId: id}) => id === drinkerId,
  );
  if (index === -1) {
    return sortedDrinkersWithAmount.length;
  }
  return index + 1;
};

export const sortTeamsByTotalAmount = (
  teams: Team[],
  drinks: Drink[],
): TeamWithTotalAmount[] => {
  const teamsWithTotalAmount =
    teams?.map(team => ({
      team,
      totalAmount: drinks
        ?.filter(d => d.teamId === team.id)
        .reduce((total, d) => total + d.amount, 0),
    })) ?? [];

  return teamsWithTotalAmount.sort((a, b) => b!.totalAmount - a!.totalAmount);
};

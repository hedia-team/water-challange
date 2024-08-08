import {Drink} from '../../types';
import {StoreSlice} from '../storage';

export interface IDrinkSlice {
  drinks: Drink[];
  setDrinks: (teams: Drink[]) => void;
  unsetDrinks: () => void;
}

export const drinkSlice: StoreSlice<IDrinkSlice> = set => ({
  drinks: [],
  setDrinks: drinks => set({drinks}),
  unsetDrinks: () => set({drinks: []}),
});

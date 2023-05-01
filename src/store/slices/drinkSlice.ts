import {Drink} from '../../data';
import {StoreSlice} from '../storage';

export interface IDrinkSlice {
  drinks: Drink[] | null;
  setDrinks: (teams: Drink[]) => void;
  unsetDrinks: () => void;
}

export const drinkSlice: StoreSlice<IDrinkSlice> = set => ({
  drinks: null,
  setDrinks: drinks => set({drinks}),
  unsetDrinks: () => set({drinks: null}),
});

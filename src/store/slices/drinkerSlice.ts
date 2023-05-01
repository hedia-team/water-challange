import {Drinker} from '../../data';
import {StoreSlice} from '../storage';

export interface IDrinkerSlice {
  drinker: Drinker | null;
  setDrinker: (drinker: Drinker) => void;
  unsetDrinker: () => void;
}

export const drinkerSlice: StoreSlice<IDrinkerSlice> = set => ({
  drinker: null,
  setDrinker: drinker => set({drinker}),
  unsetDrinker: () => set({drinker: null}),
});

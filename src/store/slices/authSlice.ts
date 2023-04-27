import {StoreSlice} from '../storage';

export type Auth = {
  isLoggedIn: boolean;
};

export interface IAuthSlice {
  auth: Auth | null;
  setAuth: (authData: Auth) => void;
  unsetAuth: () => void;
  isAuth: () => boolean;
}

export const authSlice: StoreSlice<IAuthSlice> = (set, get) => ({
  auth: null,
  setAuth: auth => set({auth}),
  unsetAuth: () => set({auth: null}),
  isAuth: (): boolean => !!get().auth,
});

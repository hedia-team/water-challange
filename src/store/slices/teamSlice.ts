import {Team} from '../../data';
import {StoreSlice} from '../storage';

export interface ITeamSlice {
  teams: Team[] | null;
  setTeams: (teams: Team[]) => void;
  unsetTeams: () => void;
}

export const teamSlice: StoreSlice<ITeamSlice> = set => ({
  teams: null,
  setTeams: teams => set({teams}),
  unsetTeams: () => set({teams: null}),
});

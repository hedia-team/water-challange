import {Team} from '../../data';
import {StoreSlice} from '../storage';

export interface ITeamSlice {
  teams: Team[];
  setTeams: (teams: Team[]) => void;
  unsetTeams: () => void;
}

export const teamSlice: StoreSlice<ITeamSlice> = set => ({
  teams: [],
  setTeams: teams => set({teams}),
  unsetTeams: () => set({teams: []}),
});

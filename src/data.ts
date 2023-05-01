export type Drinker = {
  id: string;
  name: string;
};

export type Team = {
  id: string;
  name: string;
  drinkers: string[];
};

export type Drink = {
  id: string;
  drinkerId: string;
  teamId: string;
  amount: number;
  createdAt: string;
};

export type WaterContainer = {
  id: string;
  name: string;
  capacity: number;
};

export const WATER_CONTAINER: Array<WaterContainer> = [
  {
    id: '1',
    name: 'Espresso Cup',
    capacity: 50,
  },
  {
    id: '2',
    name: '100 ml',
    capacity: 100,
  },
  {
    id: '3',
    name: '200 ml',
    capacity: 200,
  },
  {
    id: '4',
    name: 'glass',
    capacity: 300,
  },
  {
    id: '5',
    name: 'Bottle',
    capacity: 500,
  },
  {
    id: '6',
    name: 'Soda Stream Bottle',
    capacity: 1000,
  },
];

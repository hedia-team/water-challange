export type Drinker = {
  id: string;
  name: string;
};

export type Record = {
  id: string;
  drinkerId: string;
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
    name: '50 ml',
    capacity: 50,
  },
  {
    id: '2',
    name: '100 ml',
    capacity: 100,
  },
  {
    id: '3',
    name: '150 ml',
    capacity: 150,
  },
  {
    id: '4',
    name: '200 ml',
    capacity: 200,
  },
  {
    id: '5',
    name: '250 ml',
    capacity: 250,
  },
  {
    id: '6',
    name: 'Soda Stream Bottle (840 ml)',
    capacity: 840,
  },
  {
    id: '7',
    name: 'Hedia glass - (300 ml)',
    capacity: 300,
  },
  {
    id: '8',
    name: 'Water bottle - (500 ml)',
    capacity: 500,
  },
];

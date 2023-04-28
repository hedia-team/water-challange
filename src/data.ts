export type User = {
  id: string;
  title: string;
};

export const USERS = [
  {
    id: '1',
    title: 'Cosmax',
  },
  {
    id: '2',
    title: 'Zygi',
  },
  {
    id: '3',
    title: 'Pi',
  },
  {
    id: '4',
    title: 'Anders',
  },
  {
    id: '5',
    title: 'Chris',
  },
];

export const INTAKE_ENTRIES = [
  {
    title: 'Today February 28th',
    data: [
      {time: '12:12', amount: '200'},
      {time: '13:12', amount: '500'},
    ],
  },
  {
    title: 'Wednesday February 27th',
    data: [
      {time: '12:12', amount: '200'},
      {time: '13:12', amount: '500'},
    ],
  },
  {
    title: 'Tuesday February 26th',
    data: [
      {time: '12:12', amount: '200'},
      {time: '13:12', amount: '500'},
    ],
  },
  {
    title: 'Monday February 25th',
    data: [
      {time: '12:12', amount: '200'},
      {time: '13:12', amount: '500'},
    ],
  },
];

export type WaterContainer = {
  id: string;
  title: string;
  capacity: number;
};

export const WATER_CONTAINER: Array<WaterContainer> = [
  {
    id: '1',
    title: 'Espresso Cup',
    capacity: 50,
  },
  {
    id: '2',
    title: '100 ml',
    capacity: 100,
  },
  {
    id: '3',
    title: '200 ml',
    capacity: 200,
  },
  {
    id: '4',
    title: 'glass',
    capacity: 300,
  },
  {
    id: '5',
    title: 'Bottle',
    capacity: 500,
  },
  {
    id: '6',
    title: 'Soda Stream Bottle',
    capacity: 1000,
  },
];

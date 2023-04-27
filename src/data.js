export type User = {
  id: string,
  title: string,
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

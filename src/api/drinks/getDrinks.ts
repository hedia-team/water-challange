import {Drink} from '../../data';

export const getDrinks = async (): Promise<Drink[]> => {
  const token =
    'vtUWEwUgJJnz4Aay6w9TcxyUKUXsdJJdK4GdgdAiaGCiLDjqpszB7k3nk3AQAQWF';
  const url = 'https://hydratey.hedia.org/api/v1/drinks';
  const options = {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`,
    },
  };

  const response = await fetch(url, options);
  if (!response.status.toString().startsWith('2')) {
    return [];
  }
  return response.json();
};

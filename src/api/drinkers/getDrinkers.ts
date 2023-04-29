import {User} from '../../data';

export const getDrinkers = async (): Promise<User[]> => {
  const token =
    'vtUWEwUgJJnz4Aay6w9TcxyUKUXsdJJdK4GdgdAiaGCiLDjqpszB7k3nk3AQAQWF';
  const url = 'https://hydratey.hedia.org/api/v1/drinkers';
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

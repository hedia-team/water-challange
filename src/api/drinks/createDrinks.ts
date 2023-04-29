export const createDrinks = async (
  drinkerId: string,
  amount: number,
): Promise<void> => {
  const token =
    'vtUWEwUgJJnz4Aay6w9TcxyUKUXsdJJdK4GdgdAiaGCiLDjqpszB7k3nk3AQAQWF';
  const url = 'https://hydratey.hedia.org/api/v1/drinks}';
  const options = {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
    },
    body: JSON.stringify({drinkerId, amount}),
  };

  const response = await fetch(url, options);
  if (!response.status.toString().startsWith('2')) {
    return;
  }
  return response.json();
};

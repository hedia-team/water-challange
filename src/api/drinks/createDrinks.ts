export const createDrinks = async (
  drinkerId: string,
  amount: number,
): Promise<void> => {
  const token =
    'vtUWEwUgJJnz4Aay6w9TcxyUKUXsdJJdK4GdgdAiaGCiLDjqpszB7k3nk3AQAQWF';
  const url = 'https://hydratey.hedia.org/api/v1/drinks';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify({drinkerId, amount}),
  };

  await fetch(url, options);
};

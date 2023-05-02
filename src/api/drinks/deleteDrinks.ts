export const deleteDrink = async (drinkId: string): Promise<void> => {
  const token =
    'vtUWEwUgJJnz4Aay6w9TcxyUKUXsdJJdK4GdgdAiaGCiLDjqpszB7k3nk3AQAQWF';
  const url = `https://hydratey.hedia.org/api/v1/drinks/${drinkId}`;
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `token ${token}`,
    },
  };

  await fetch(url, options);
};

import {Record} from '../types';

type ScoreByDrinker = {
  drinkerId: string;
  total: number;
};

export const getScoreList = (records: Array<Record>) => {
  const scoreList: Array<ScoreByDrinker> = [];

  records.forEach(record => {
    const drinkerIndex = scoreList.findIndex(
      score => score.drinkerId === record.drinkerId,
    );
    if (drinkerIndex !== -1) {
      scoreList[drinkerIndex].total += record.amount;
    } else {
      scoreList.push({
        drinkerId: record.drinkerId,
        total: record.amount,
      });
    }
  });

  return scoreList;
};

/*
Using the sorted array from getScoreList function, implement the getRanking function
that returns the ranking of a drinker based on the total amount of drinks they have consumed.
*/
export const getRanking = (records: Array<Record>, drinkerId: string) => {
  return null;
};

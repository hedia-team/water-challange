import {getRanking} from '../../src/screens/utils';

describe('Test Get Ranking Function', () => {
  test('Get Ranking', () => {
    expect(getRanking([], '')).toBe(null);
  });
});

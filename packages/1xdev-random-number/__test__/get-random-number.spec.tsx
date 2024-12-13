import { getRandomNumber } from '../src';

describe('getRandomNumber', () => {
  it('Should return a random number', () => {
    const getRandom = getRandomNumber(10);
    expect(getRandom.random).toBeLessThan(10);
  })
});
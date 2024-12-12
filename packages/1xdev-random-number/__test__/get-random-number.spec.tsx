import { getRandomNumber } from '../src';

describe('getUsers', () => {
  it('Should return a random number', () => {
    const getRandom = getRandomNumber(10);
    expect(getRandom.random).toBeLessThan(10);
  })
});
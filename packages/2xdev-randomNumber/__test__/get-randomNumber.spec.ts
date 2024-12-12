import { getRandomNumber } from '../src';

describe('getUsers', () => {
  it('Should return a random number', () => {
    const random = getRandomNumber(10);
    expect(random.random).toBeLessThan(10);
  })
});

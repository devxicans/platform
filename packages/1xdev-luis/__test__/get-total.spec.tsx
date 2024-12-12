import { getTotal } from '../src';

describe('getTotalUsers', () => {
  it('Should get total number of users', () => {
    const total = getTotal();
    expect(total).toEqual(5);
  });
});

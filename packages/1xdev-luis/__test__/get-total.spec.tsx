import { getTotal } from '../src';

describe('getUsers', () => {
  it('Should get total users', () => {
    const totalUsers = getTotal();
    expect(totalUsers).toEqual(5);
  });
});

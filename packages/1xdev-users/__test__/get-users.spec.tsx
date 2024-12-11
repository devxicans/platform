import { getUsers } from '../src';

describe('getUsers', () => {
  it('Should get users', () => {
    const users = getUsers();
    expect(users).toHaveLength(5);
    expect(users).toContain('pablo')
    expect(users).toContain('nava'),
    expect(users).toContain('Adrian')
  });
});

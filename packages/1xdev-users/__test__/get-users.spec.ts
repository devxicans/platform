import { getUsers } from '../src';

describe('getUsers', () => {
  it('Should get users', () => {
    const users = getUsers();
    expect(users).toHaveLength(4);
    expect(users).toContain('nava'),
    expect(users).toContain('Adrian')
  });
});

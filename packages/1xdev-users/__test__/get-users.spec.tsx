import { getUsers } from '../src';

describe('getUsers', () => {
  it('Should get users', () => {
    const users = getUsers();
    expect(users).toHaveLength(4);
    expect(users[3]).toEqual('pablo');
    expect(users).toContain('nava')
  });
});

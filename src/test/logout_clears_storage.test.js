import { logout } from '../js/api/auth/logout.js';
import { remove } from '../js/storage/index.js';

jest.mock('../js/storage/index.js', () => {
  return {
    remove: jest.fn(),
  };
});

describe('Logout test function', () => {
  it('Removes token from localstorage', () => {
    logout();
    expect(remove).toHaveBeenCalledWith('token');
  });
});
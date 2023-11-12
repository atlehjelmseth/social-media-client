import { login } from '../js/api/auth/login.js';
import { save } from '../js/storage/index.js';


const mockFetchSuccess = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: 'testingToken',
        profileData: 'testingProfile',
      }),
  }),
);

global.fetch = mockFetchSuccess;

jest.mock("../js/storage/index.js", () => ({
  ...jest.requireActual("../js/storage/index.js"),
  save: jest.fn(),
}));

describe("Login test function", () => {
  it("fetches and stores a token in browser storage", async () => {
    await login("testing@email.com", "testingPassword");
    expect(save).toHaveBeenCalledWith('token', 'testingToken');
  })
})

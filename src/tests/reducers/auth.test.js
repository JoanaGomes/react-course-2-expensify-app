import authReducer from '../../reducers/auth';

const userInfo = {
  uid: 'abc123',
  displayName: 'gualter',
  email: 'user.email@expensify.net',
  photoURL: 'url-to-photo'
};

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOG_IN',
    ...userInfo
  };
  const state = authReducer({}, action);
  expect(state).toEqual(userInfo);
});

test('should clear uid for logout', () => {
  const action = { type: 'LOG_OUT' };
  const state = authReducer(userInfo, action);
  expect(state).toEqual({ });
});

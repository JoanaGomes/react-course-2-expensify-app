import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOG_IN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid: 'abc123' });
});

test('should clear uid for logout', () => {
  const action = { type: 'LOG_OUT' };
  const state = authReducer({ uid: '123abc' }, action);
  expect(state).toEqual({ });
});

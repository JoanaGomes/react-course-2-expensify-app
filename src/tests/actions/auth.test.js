import { login, logout } from '../../actions/auth';

test('should setup log in action object', () => {
  const action = login('123abc');
  expect(action).toEqual({
    type: 'LOG_IN',
    uid: '123abc'
  });
});

test('should setup log out action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOG_OUT'
  });
});
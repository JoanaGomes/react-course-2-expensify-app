import { firebase, googleAuthProvider } from '../../firebase/firebase';
import { startLogin, login, startLogout, logout } from '../../actions/auth';

test('should setup log in action object', () => {
  const action = login('123abc');
  expect(action).toEqual({
    type: 'LOG_IN',
    uid: '123abc'
  });
});

test('should call firebase login according to give provider', () => {
  const call = startLogin('google');
  expect(call).toEqual(expect.any(Function));
});

test('should setup log out action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOG_OUT'
  });
});

test('should call firebase logout', () => {
  const call = startLogout();
  expect(call).toEqual(expect.any(Function));
});
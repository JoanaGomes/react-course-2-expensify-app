import { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOG_IN',
  uid
});

export const logout = () => ({
  type: 'LOG_OUT'
});

export const startLogin = (provider) => {
  return () => {
      switch (provider) {
          case 'google':
              return firebase.auth().signInWithPopup(googleAuthProvider);
              case 'facebook':
                return firebase.auth().signInWithPopup(facebookAuthProvider);
              case 'github':
                return firebase.auth().signInWithPopup(githubAuthProvider);
    }
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
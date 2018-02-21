import { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName, email, photoURL) => ({
  type: 'LOG_IN',
  uid, 
  displayName,
  email,
  photoURL
});

export const logout = () => ({
  type: 'LOG_OUT'
});

export const startLogin = (provider) => {
  return (dispatch) => {
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
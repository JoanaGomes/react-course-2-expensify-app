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
  return () => {
      switch (provider) {
          case 'google':
              return firebase.auth().signInWithPopup(googleAuthProvider);
              case 'facebook':
                return firebase.auth().signInWithPopup(facebookAuthProvider);
              case 'github':
                firebase.auth().signInWithPopup(githubAuthProvider)
                .then((ret) => {
                  debugger
                })
                .catch((err) => {
                  debugger
                });
    }
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
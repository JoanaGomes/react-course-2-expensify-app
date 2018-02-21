export default (state = {}, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        uid: action.uid,
        displayName: action.displayName,
        email: action.email,
        photoURL: action.photoURL
      };
    case 'LOG_OUT':
      return { };
    default:
      return state;
  }
};
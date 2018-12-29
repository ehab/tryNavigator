const INITIAL_STATE = {user: null, loading: false, error: ''};
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'login_attempt':
      console.log('here we go AuthReducer.js...');

      break;
    default:
      console.log('default scenareo AuthReducer.js...');
      return state;

  }
}

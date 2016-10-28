// You cannot return undefined from a reducer, but null is OK
export default (state = null, action) => {
  switch(action.type) {
    case 'SELECT_LIBRARY':
      return action.payload;
  }
  return state;
};

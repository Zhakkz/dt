const initialState = {
  user: 'null',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state};
    default:
      return {...state};
  }
};

export default authReducer;

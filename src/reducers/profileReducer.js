import { getProfile } from '../services/spotify';

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.data;
    default:
      return state;
  }
};

export const setProfileCreator = () => {
  return async (dispatch) => {
    const data = await getProfile();
    dispatch({
      type: 'SET_PROFILE',
      data,
    });
  };
};

export default reducer;

import { getCharacters } from './api/charsData';

const CHARS = 'redux/actions/get_chars';

const getCharsAction = (characters) => ({
  type: CHARS,
  payload: characters,
});

export const setCharacters = (page, dispatch) => {
  getCharacters(page).then(({ results }) => {
    dispatch(getCharsAction(results));
  });
};

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case CHARS:
      return action.payload;
    default:
      return state;
  }
};

export default charactersReducer;

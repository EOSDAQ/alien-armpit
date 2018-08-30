import {
  createAction,
  handleActions,
} from 'redux-actions';

export const types = {
  FETCH_TOKENS: 'tokens/FETCH',
  UPDATE_TOKENS: 'tokens/UPDATE',
  TOGGLE_FAVORITE: 'tokens/TOGGLE_FAVORITE',
}

export const actions = {
  fetchTokens: createAction(types.FETCH_TOKENS),
  updateTokens: createAction(types.UPDATE_TOKENS),
  toggleFavorite: createAction(types.TOGGLE_FAVORITE),
}

const defaultState = {};

export default handleActions({
  [types.UPDATE_TOKENS]: (state, { payload }) => {
    const { tokens } = payload;
    return tokens;
  },
  [types.TOGGLE_FAVORITE]: (tokens, { payload }) => {
    const { pair } = payload;
    const token = tokens[pair];

    return {
      ...tokens,
      [pair]: {
        ...token,
        favorite: !token.favorite,
      },
    };
  },
}, defaultState);

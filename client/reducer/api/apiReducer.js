import {
  createAction,
  handleActions,
} from 'redux-actions';

export const types = {
  FETCH_QUERY: 'api/FETCH_QUERY',
  UPDATE_QUERY: 'api/UPDATE_QUERY',
}

export const actions = {
  fetchQuery: createAction(types.FETCH_QUERY),
  updateQuery: createAction(types.UPDATE_QUERY),
}

const defaultState = {
  dispatching: false,
};

export default handleActions({
  [types.FETCH_QUERY]: (state, { payload }) => {
    const { cacheKey, poll } = payload;
    return {
      ...state,
      dispatching: true,
      [cacheKey]: {
        ...(state[cacheKey] || {}),
        ...(!poll ? { loading: true } : { polling: true }),
        error: null,
      },
    };
  },
  [types.UPDATE_QUERY]: (state, { payload, type }) => {
    const { cacheKey, poll, error = null } = payload;
    const target = state[cacheKey] || {};
    const timestamp = Date.now();
    return {
      ...state,
      dispatching: false,
      [cacheKey]: {
        ...target,
        loading: false,
        ...(!poll ? { loading: false } : { polling: false }),
        error,
      },
    };
  }
}, defaultState);

import {
  createAction,
  handleActions,
} from 'redux-actions';

export const types = {
  FETCH_QUERY: 'api/RUN_QUERY',
  UPDATE_QUERY: 'api/UPDATE_QUERY',
}

export const actions = {
  fetchQuery: createAction(types.FETCH_QUERY),
  updateQuery: createAction(types.UPDATE_QUERY),
}

const defaultState = {

};

export default handleActions({
  [types.FETCH_QUERY]: (state, { payload }) => {
    const { cacheKey } = payload;
    return {
      ...state,
      [cacheKey]: {
        loading: true,
        error: null,
        meta: {
          timestamp: Date.now(),
        }
      },
    };
  },
  [types.UPDATE_QUERY]: (state, { payload }) => {
    const { cacheKey, error = null } = payload;
    const target = state[cacheKey] || {};
    const timestamp = Date.now();
    return {
      ...state,
      [cacheKey]: {
        ...target,
        loading: false,
        error,
        meta: {
          duration: timestamp - target.meta.timestamp,
          timestamp,
        }
      },
    };
  }
}, defaultState);

import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { languages } from 'constants/constants';

export const types = {
  OPEN_DROPBOX: 'language/dropbox/OPEN',
  CLOSE_DROPBOX: 'language/dropbox/CLOSE',
  UPDATE_DROPBOX_LANGUAGE_LIST: 'language/dropboxLanguageList/UPDATE',
};

export const actions = {
  openDropbox: createAction(types.OPEN_DROPBOX),
  closeDropbox: createAction(types.CLOSE_DROPBOX),
  updateDropboxLanguageList: createAction(types.UPDATE_DROPBOX_LANGUAGE_LIST),
};

const defaultState = {
  isDropboxOpen: false,
  dropboxLanguageList: languages,
};

const isDropboxOpen = handleActions({
  [types.OPEN_DROPBOX]: () => (true),
  [types.CLOSE_DROPBOX]: () => (false),
}, defaultState.isDropboxOpen);

const dropboxLanguageList = handleActions({
  [types.UPDATE_DROPBOX_LANGUAGE_LIST]: (state, { payload }) => {
    const list = languages.slice(0);
    const index = list.indexOf(payload);
    list.splice(index, 1);
    return [payload].concat(list);
  },
}, defaultState.dropboxLanguageList);

export default combineReducers({
  isDropboxOpen,
  dropboxLanguageList,
});

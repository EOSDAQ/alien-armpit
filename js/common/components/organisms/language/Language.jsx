import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { actions } from '../../../../reducer/language/languageReducer';
import LanguageDropbox from './LanguageDropbox';

class Language extends Component {
  constructor(props) {
    super();
    const { i18n } = props;
  }

  changeLanguage(lang) {
    const {
      i18n,
      updateDropboxLanguageList,
      closeDropbox,
    } = this.props;
    i18n.changeLanguage(lang);
    closeDropbox();
    updateDropboxLanguageList(lang);
  }

  render() {
    const {
      i18n,
      isDropboxOpen,
      openDropbox,
      closeDropbox,
      dropboxLanguageList,
    } = this.props;
    const { language } = i18n;

    return (
      <div>
        <button
          type="button"
          onClick={() => { openDropbox(); }}
        >
          {language}
        </button>
        { isDropboxOpen ? <LanguageDropbox
            closeDropbox={closeDropbox}
            dropboxLanguageList={dropboxLanguageList}
            changeLanguage={(lang) => { this.changeLanguage(lang); }}
          /> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.language,
});

const mapDispatchToProps = dispatch => ({
  openDropbox: () => { dispatch(actions.openDropbox()); },
  closeDropbox: () => { dispatch(actions.closeDropbox()); },
  updateDropboxLanguageList: (lang) => { dispatch(actions.updateDropboxLanguageList(lang)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate()(Language));

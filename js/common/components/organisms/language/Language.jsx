import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { actions } from '../../../../reducer/language/languageReducer';
import LanguageSelectedItem from './LangaugeSelectedItem';
import LanguageOption from './LanguageOption';
import Select from '../../molecules/Select';

class Language extends Component {
  changeLanguage(lang) {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  }

  render() {
    const {
      i18n,
      // isDropboxOpen,
      // openDropbox,
      // closeDropbox,
      dropboxLanguageList,
    } = this.props;

    const { language } = i18n;

    return (
      <div>
        <Select
          value={language}
          options={dropboxLanguageList.map(option => (
            <LanguageOption
              key={option}
              option={option}
              language={language}
              onClick={() => this.changeLanguage(option)}
            />
          ))}
        >
          <LanguageSelectedItem
            language={language}
          />
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.language,
});

// dropdown을 redux state로 관리해야할까? 채동님과 논의해보기
const mapDispatchToProps = dispatch => ({
  // openDropbox: () => { dispatch(actions.openDropbox()); },
  // closeDropbox: () => { dispatch(actions.closeDropbox()); },
  updateDropboxLanguageList: (lang) => { dispatch(actions.updateDropboxLanguageList(lang)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate()(Language));

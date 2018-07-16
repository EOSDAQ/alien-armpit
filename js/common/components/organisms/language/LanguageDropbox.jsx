import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class LanguageDropbox extends Component {
  handleClickOutside() {
    this.props.closeDropbox();
  }

  render() {
    const {
      dropboxLanguageList,
      changeLanguage,
    } = this.props;

    return (
      <div>
        {
          dropboxLanguageList.map(lang => (
            <button
              key={lang}
              type="button"
              onClick={() => { changeLanguage(lang); }}
            >
              {lang}
            </button>
          ))
        }
      </div>
    );
  }
};

export default enhanceWithClickOutside(LanguageDropbox);

import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import Button from '../../atom/Button';

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
            <Button
              key={lang}
              type="button"
              onClick={() => { changeLanguage(lang); }}
            >
              {lang}
            </Button>
          ))
        }
      </div>
    );
  }
};

export default enhanceWithClickOutside(LanguageDropbox);

import React from 'react';
import { SelectOptions } from './Select.styled';

class Select extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    this.state = {
      showDropdown: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        showDropdown: false,
      })
    }
  }
 
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  }

  onDocumentClick(e) {
    const contains = this.ref.contains(e.target);
    if (!contains) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.setState({
      showDropdown: false,
    });
    document.removeEventListener('click', this.onDocumentClick);
  }

  onClick() {
    const { showDropdown } = this.state;
    if (!showDropdown) {
      this.setState({
        showDropdown: true,
      });
      document.addEventListener('click', this.onDocumentClick);
    } else {
      this.closeDropdown();
    }

  }

  render() {
    const {
      children,
      options,
      direction = {
        top: 40,
        right: 0,
      },
    } = this.props;
    const { showDropdown } = this.state;

    return (
      <div
        ref={(e) => { this.ref = e; }}
        style={{ position: 'relative' }}
      >
        <div
          ref={(e) => { this.selectedRef = e; }}
          onClick={() => this.onClick()}
        >
          {React.cloneElement(children, {
            closeDropdown: () => this.closeDropdown(),
          })}
        </div>
        {showDropdown && (
          <SelectOptions {...direction}>
            {(Array.isArray(options) ? options : [options]).map((option) => 
              React.cloneElement(option, {
                key: option.key,
                closeDropdown: () => this.closeDropdown(),
              })
            )}
          </SelectOptions>
        )}
      </div>
    );
  }
}

export default Select;

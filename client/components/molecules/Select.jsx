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

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
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
    const { showDropdown: _showDropdown } = this.state;
    const contains = this.ref.contains(e.target);
    const insideSelected = this.selectedRef.contains(e.target);

    let showDropdown = false;

    if (!_showDropdown) {
      showDropdown = contains || insideSelected;
    } else if (insideSelected) {
      showDropdown = false;
    } else {
      showDropdown = !_showDropdown;
    }

    this.setState({
      showDropdown,
    });
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
        <div ref={(e) => { this.selectedRef = e; }}>
          {children}
        </div>
        {showDropdown && (
          <SelectOptions {...direction}>
            {options}
          </SelectOptions>
        )}
      </div>
    );
  }
}

export default Select;

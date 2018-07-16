import React from 'react';
import styled from 'react-emotion';

const SelectOptions = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 100px;
  color: black;
  background: white;
  border-radius: 2px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, .1);
`;

const SelectOption = styled.div`
  padding: 8px 4px;
`

class Select extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    this.state = {
      showDropdown: false,
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.onDocumentClick)
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
    this.setState({
      showDropdown: contains,
    });
  }

  render() {
    const { children, options } = this.props;
    const { showDropdown } = this.state;

    return (
      <div
        ref={(e) => { this.ref = e }}
        style={{ position: 'relative' }}
      >
        {children}
        {showDropdown && (
          <SelectOptions>
            {options.map(option => option)}
          </SelectOptions>
        )}
      </div>
    );
  }
}

export default Select;

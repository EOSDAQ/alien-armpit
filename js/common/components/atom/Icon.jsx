import React from 'react';

class Icon extends React.PureComponent {
  render() {
    let { type, ...iconProps } = this.props;
    let { default: Comp } = require(`./icons/ic-${type}.svg`);

    return (
      <Comp
        {...iconProps} 
      />
    );
  }
}

export default Icon;

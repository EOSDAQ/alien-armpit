import React from 'react';

class Icon extends React.PureComponent {
  render() {
    const { type, ...iconProps } = this.props;
    const { default: Comp } = require(`./icons/ic-${type}.svg`);

    return (
      <Comp
        {...iconProps}
      />
    );
  }
}

export default Icon;

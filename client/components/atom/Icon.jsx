import React from 'react';

class Icon extends React.PureComponent {
  render() {
    const { type, ...iconProps } = this.props;
    if (!type) {
      return null;
    }

    // eslint-disable-next-line
    const { default: Comp } = require(`./icons/ic-${type}.svg`);
    return (
      <Comp {...iconProps} />
    );
  }
}

export default Icon;

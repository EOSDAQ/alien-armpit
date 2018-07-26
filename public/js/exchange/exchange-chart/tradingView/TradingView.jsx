import React from 'react';
import widgetOptions from './widgetOptions';

class TradingViewWidget extends React.PureComponent {
  componentDidMount() {
    const widget = new window.TradingView.widget(widgetOptions);
  }

  render() {
    return (
      <div
        id={widgetOptions.container_id}
        style={{
          flex: '1 1',
          overflow: 'hidden',
        }}
      />
    );
  }
}

export default TradingViewWidget;

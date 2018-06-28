import React from 'react';
import Box from '../../common/components/atom/Box';
import { Text } from '../../common/components/atom/Text';
import { Container } from '../main.styled';

class Coming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    }
  }

  onClose() {
    this.setState({
      close: true,
    });
  }

  render() {
    let { close } = this.state;
    if (close) return null;
    
    return (
      <Box
        width={1}
        bg="#202525"
        color="#ccc"
        py={3}
      >
        <Container>
          <Text
            fontSize={14}
          >
            2018년 하반기. 세계 최초 EOS 기반 탈중앙화 거래소가 런칭합니다.
          </Text>
          <div onClick={() => this.onClose()}>Close</div>
        </Container>
      </Box>
    )
  }
}

export default Coming;

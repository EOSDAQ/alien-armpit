import React from 'react';
import Box from '../common/components/atom/Box';
import Text from '../common/components/atom/Text';
import { Container } from './Main.styled';
import Flex from '../common/components/atom/Flex';
import Icon from '../common/components/atom/Icon';

class MainComing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  onClose() {
    this.setState({
      close: true,
    });
  }

  render() {
    const { close } = this.state;
    if (close) return null;

    return (
      <Box
        width={1}
        bg="#141A2A"
        py={24}
      >
        <Container>
          <Flex justifyContent="space-between">
            <Text
              fontSize={14}
              color="grey200"
            >
              2018년 하반기. 세계 최초 EOS 기반 탈중앙화 거래소가 런칭합니다.
            </Text>
            <Box onClick={() => this.onClose()}>
              <Icon
                type="close"
                fill="white"
                width={12}
                height={12}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }
}

export default MainComing;

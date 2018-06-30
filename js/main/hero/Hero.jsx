import React from 'react';
import Box from '../../common/components/atom/Box';
import { Text } from '../../common/components/atom/Text';
import posed from 'react-pose';
import Waypoint from 'react-waypoint';

const config = (delay = 0) => ({
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration: 800,
    }
  },
  hidden: { opacity: 0, y: 30 },
});

const AnimatedTitle = posed.div(config(1000));
const AnimatedSubTitle = posed.div(config(1500));

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onEnter() {
    this.setState({
      visible: true,
    })
  }

  render() {
    const { visible } = this.state;

    return (
      <Waypoint
        onEnter={() => this.onEnter()}
      >
        <Box 
          py={120}
          px={48}
          m={16}
          style={{
            background: `url(/images/hero.png) 50% 50%/cover no-repeat`
          }}
        >
          <AnimatedTitle
            pose={visible ? "visible" : "hidden"}
          >
            <Text
              fontWeight={300}
              fontSize={60}
              color="primaryDark"
              lineHeight={1.1}
              textAlign="center"
            >
              Airdrop 토큰. 신속한 상장.
            </Text>
          </AnimatedTitle>
          <Box my={24}>
            <AnimatedSubTitle
              pose={visible ? "visible" : "hidden"}
            >
              <Text
                fontSize={16}
                color="primaryDark"
                lineHeight={1.46}
                textAlign="center"
              >
                EOS 기반 탈중앙화 거래소입니다.<br/>
                개인 지갑에 안전하게 자산을 관리하세요.<br/>
                모든 거래내역은 투명하게 블록체인에 기록됩니다.
              </Text>
            </AnimatedSubTitle>
          </Box>
          <img src="/images/airdrop-bg.png" width="100%" />
        </Box>
      </Waypoint>
    );
  }
}

export default Hero;

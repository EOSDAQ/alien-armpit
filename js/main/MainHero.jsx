import React from 'react';
import posed from 'react-pose';
import Box from '../common/components/atom/Box';
import Text from '../common/components/atom/Text';
import Waypoint from '../common/components/molecules/Waypoint';

const config = (delay = 0) => ({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 800,
    },
  },
  hidden: { opacity: 0, y: 30 },
});

const AnimatedTitle = posed.div(config(1000));
const AnimatedSubTitle = posed.div(config(1500));

const MainHero = () => (
  <Waypoint runOnce>
    {({ isIntersecting }) => {
      const animate = isIntersecting;

      return (
        <Box
          pt={100}
          px={48}
        >
          <AnimatedTitle
            pose={animate ? 'visible' : 'hidden'}
          >
            <Text
              textAlign="center"
              fontSize={24}
              mb={8}
              color="primary"
            >
              EOS 기반 탈중앙화 거래소.
            </Text>
            <Text
              fontWeight={700}
              fontSize={48}
              color="grey900"
              lineHeight={1.1}
              textAlign="center"
            >
              Airdrop 토큰의 신속한 상장.
            </Text>
          </AnimatedTitle>
          <Box my={24}>
            <AnimatedSubTitle
              pose={animate ? 'visible' : 'hidden'}
            >
              <Text
                fontSize={16}
                color="grey900"
                lineHeight={1.46}
                textAlign="center"
              >
                개인 지갑에 안전하게 자산을 관리하세요.
                <br />
                모든 거래내역은 투명하게 블록체인에 기록됩니다.
              </Text>
            </AnimatedSubTitle>
          </Box>
          <Box
            width={1}
            height={[160, 180, 240, 300]}
            style={{
              background: 'url(/images/airdrop-bg.png) 50% 50%/cover no-repeat',
            }}
          />
        </Box>
      );
    }}
  </Waypoint>
);

export default MainHero;

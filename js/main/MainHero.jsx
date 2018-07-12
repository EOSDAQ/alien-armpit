import React from 'react';
import Box from '../common/components/atom/Box';
import Text from '../common/components/atom/Text';
import Waypoint from '../common/components/molecules/Waypoint';
import animations from '../common/css/animations';

const MainHero = () => (
  <Waypoint runOnce>
    {({ isIntersecting }) => {
      const animate = isIntersecting;

      return (
        <Box
          pt={100}
          px={48}
          position="relative"
        >
          <Text
            textAlign="center"
            fontSize={18}
            fontWeight="bold"
            mb={20}
            css={animations.appearY(animate)}
          >
            이오스 기반 탈중앙화 거래소.
          </Text>
          <Text
            fontSize={52}
            color="grey900"
            fontWeight={400}
            lineHeight={1.1}
            textAlign="center"
            css={animations.appearY(animate, { delay: '200ms' })}
          >
            에어드랍 토큰의 <i>신속한</i> 상장
          </Text>
          <Box mt={32}>
            <Text
              fontSize={24}
              lineHeight={1.5}
              color="grey800"
              fontWeight={500}
              textAlign="center"
              css={animations.appearY(animate, { delay: '400ms' })}
            >
              개인소유 지갑에 안전하게 자산을 관리하세요.
              <br />
              모든 거래내역은 투명하게 블록체인에 기록됩니다.
            </Text>
          </Box>
          <Box
            position="absolute"
            width={580}
            height={200}
            bottom={80}
            left={0}
            style={{
              zIndex: -1,
              background: 'url(/images/tokens.png) 50% 50%/cover no-repeat',
            }}
          />
          <Box
            position="absolute"
            width={580}
            height={200}
            bottom={80}
            right={0}
            style={{
              transform: 'scaleX(-1)',
              zIndex: -1,
              background: 'url(/images/tokens.png) 50% 50%/cover no-repeat',
            }}
          />
          <img
            src="/images/eosdaq-mac.png"
            alt=""
            style={{
              width: 1000,
              margin: '80px auto -80px auto',
              display: 'block',
            }}
          />
        </Box>
      );
    }}
  </Waypoint>
);

export default MainHero;

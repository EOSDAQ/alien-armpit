import React from 'react';
import Box from '../common/components/atom/Box';
import Text from '../common/components/atom/Text';
import Waypoint from '../common/components/molecules/Waypoint';
import animations from '../common/css/animations';
import Image from '../common/components/atom/Image';

const MainHero = () => (
  <Waypoint runOnce>
    {({ isIntersecting }) => {
      const animate = isIntersecting;

      return (
        <Box
          overflow="hidden"
        >
          <Box
            pt={[40, 100]}
            px={48}
          >
            <Text
              textAlign="center"
              fontSize={[16, 18]}
              fontWeight="bold"
              lineHeight={1.3}
              mb={20}
              css={animations.appearY(animate)}
            >
              이오스 기반 탈중앙화 거래소 - 2018년 하반기 런칭
            </Text>
            <Text
              fontSize={[48, 60]}
              color="grey900"
              fontWeight={400}
              lineHeight={1.3}
              textAlign="center"
              css={animations.appearY(animate, { delay: '200ms' })}
            >
              {'에어드랍 토큰의 '}
              <i>
                신속한
              </i>
              {' 상장'}
            </Text>
            <Box mt={32}>
              <Text
                fontSize={[20, 24]}
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
          </Box>
          <Box
            position="relative"
            overflow="hidden"
            mx={[-100, 0]}
          >
            <Box
              position="absolute"
              width={580}
              height={200}
              bottom={80}
              display={['none', 'none', 'block']}
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
              display={['none', 'none', 'block']}
              style={{
                transform: 'scaleX(-1)',
                zIndex: -1,
                background: 'url(/images/tokens.png) 50% 50%/cover no-repeat',
              }}
            />
            <Image
              src="/images/eosdaq-mac.png"
              width={['100%', '100%', '100%', 1000]}
              mt={[40, 80]}
              mb={-80}
              mx="auto"
              display="block"
            />
          </Box>
        </Box>
      );
    }}
  </Waypoint>
);

export default MainHero;

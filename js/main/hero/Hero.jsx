import React from 'react';
import Box from '../../common/components/atom/Box';
import { Text } from '../../common/components/atom/Text';

class Hero extends React.Component {
  render() {
    return (
      <Box 
        py={120}
        px={48}
        my={16}
        style={{
          background: `url(/images/hero.png) 50% 50%/cover no-repeat`
        }}
      >
        <Text
          fontWeight={300}
          fontSize={60}
          color="#primaryDark"
          lineHeight={1.1}
          textAlign="center"
        >
          Airdrop 토큰. 신속한 상장.
        </Text>
        <Box my={24}>
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
        </Box>
        <img src="/images/airdrop-bg.png" width="100%" />
      </Box>
    );
  }
}

export default Hero;

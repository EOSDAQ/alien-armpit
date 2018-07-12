import React from 'react';
import Waypoint from '../common/components/molecules/Waypoint';
import {
  Section,
  Container,
  Headline,
  SubHeadline,
  ContentWrapper,
  Content,
  ContentTitle,
  Description,
  SectionLabel,
} from './Main.styled';
import Text from '../common/components/atom/Text';
import Box from '../common/components/atom/Box';
import animations from '../common/css/animations';
import Flex from '../common/components/atom/Flex';

const compare = [
  { name: 'EOS', value: 4000, text: '200x' },
  { name: 'ETH', value: 20, text: '(Baseline)' },
];

const MainTransaction = () => (
  <Waypoint
    steps={3}
  >
    {({ intersectionRatio }) => {
      const animate = intersectionRatio > 0;
      return (
        <Section>
          <Container>
            <SectionLabel color="#08f">
              속도
            </SectionLabel>
            <Headline pose={animate}>
              세계 최고 수준의
              <br />
              탈중앙화 거래속도
            </Headline>
            <SubHeadline pose={animate}>
              이오스 블록체인을 통해 빠른 거래속도를 경험할 수 있으며,
              <br />
              대량거래 시에도 안전하게 속도가 유지됩니다.
            </SubHeadline>
            <ContentWrapper pose={animate}>
              <Content>
                <ContentTitle>
                  빠른 거래속도
                </ContentTitle>
                <Description>
                  이오스는 0.5초마다 블록이 생성되며, 초당 1만건의 거래를 처리합니다. 현존하는 탈중앙화 거래소 중 가장 빠른 거래속도를 경험할 수 있습니다.
                </Description>
              </Content>
              <Content>
                <ContentTitle>
                  안정적인 속도 유지
                </ContentTitle>
                <Description>
                  EOSDAQ은 충분한 이오스 자원(RAM, CPU, 대역폭)을 확보하여, 안정적인 거래속도를 제공합니다.
                </Description>
              </Content>
              <Content>
                <Box
                  mt={42}
                  mb={32}
                >
                  <Text fontWeight={500}>
                    Transaction Per Second (TPS)
                  </Text>
                </Box>
                <Box mt={8}>
                  {compare.map((item, i) => (
                    <Flex
                      key={item.name}
                      mb={12}
                      alignItems="center"
                    >
                      <Box mr={16}>
                        <Text
                          color="grey800"
                          fontSize={12}
                        >
                          {item.name}
                        </Text>
                      </Box>
                      <Box
                        css={animations.scaleX(animate, { delay: '1000ms' })}
                        style={{
                          transformOrigin: 'left',
                          background: i === 0 ? 'linear-gradient(to right, rgb(128, 243, 201), rgb(4, 198, 220))' : '#aaa',
                          width: item.value / 10,
                          height: 5,
                        }}
                      />
                      <Box ml={16}>
                        <Text
                          color={i === 0 ? 'primary' : 'grey400'}
                          fontSize={i === 0 ? 24 : 14}
                          fontWeight={i === 0 && 700}
                        >
                          {item.text}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Box>
              </Content>
            </ContentWrapper>
          </Container>
        </Section>
      );
    }}
  </Waypoint>
);

export default MainTransaction;

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
} from './Main.styled';

const MainWallet = () => (
  <Waypoint
    steps={3}
  >
    {({ intersectionRatio }) => {
      const animate = intersectionRatio > 0.3;
      return (
        <Section
          bg="rgb(250, 250, 250)"
        >
          <Container>
            <Headline pose={animate}>
              강력한 개인 지갑
            </Headline>
            <SubHeadline pose={animate}>
              개인이 자산을 직접 보관하는 탈중앙화 방식의 지갑을 제공합니다. 이 방식은 기존 거래소들이 사용하는 중앙집중화된 자산보관 방식과 차별화되며, 해킹 위험이 현저히 낮습니다.
            </SubHeadline>
            <ContentWrapper pose={animate}>
              <Content>
                <ContentTitle>
                  안전한 자산
                </ContentTitle>
                <Description>
                  개인 지갑의 Private key 정보와 거래하지 않는 자산은 거래소에서 보관하지 않습니다. 해킹으로부터 안전하게 내 자산을 지킬 수 있습니다.
                </Description>
              </Content>
              <Content>
                <ContentTitle>
                  다중 권한 지갑
                </ContentTitle>
                <Description>
                  다중 권한 지갑을 통해 트레이딩 전문가에게 거래를 맡겨 내 자산을 운용할 수 있습니다.
                </Description>
              </Content>
            </ContentWrapper>
          </Container>
        </Section>
      );
    }}
  </Waypoint>
);

export default MainWallet;

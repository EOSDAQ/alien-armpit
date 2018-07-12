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

const MainWallet = () => (
  <Waypoint
    steps={3}
  >
    {({ intersectionRatio }) => {
      const animate = intersectionRatio > 0;
      return (
        <Section
          bg="rgb(250, 250, 250)"
        >
          <Container>
            <SectionLabel color="#f74f18">
              보안
            </SectionLabel>
            <Headline pose={animate}>
              강력한 개인소유 지갑
            </Headline>
            <SubHeadline pose={animate}>
              개인이 자산을 직접 보관하는 방식의 지갑을 제공합니다.
              <br />
              이 방식은 중앙화 거래소들의 자산보관 방식과 차별화되며,
              <br />
              해킹 및 도난의 위험이 현저히 낮습니다.
            </SubHeadline>
            <ContentWrapper pose={animate}>
              <Content>
                <ContentTitle>
                  안전한 자산 보관
                </ContentTitle>
                <Description>
                  개인의 자산과 Private Key는 본인만이 접근하고 보관할 수 있습니다. 해킹 및 도난으로부터 안전하게 내 자산을 지킬 수 있습니다.
                </Description>
              </Content>
              <Content>
                <ContentTitle>
                  투명한 거래기록
                </ContentTitle>
                <Description>
                  모든 거래는 EOSDAQ 스마트 컨트랙트를 통해 투명하게 이오스 블록체인에 기록됩니다. 사용자는 언제든지 본인의 거래기록을 확인할 수 있습니다.
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

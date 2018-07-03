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

const MainHolder = () => (
  <Waypoint
    steps={3}
  >
    {({ intersectionRatio }) => {
      const animate = intersectionRatio > 0.3;

      return (
        <Section bg="primary100">
          <Container>
            <Headline pose={animate}>
              EOS에 특화된 거래소.
              <br />
              <b>
                신속한 토큰 상장
              </b>
              과
              <strong>
                투표
              </strong>
            </Headline>
            <SubHeadline pose={animate}>
              EOS 홀더들은 EOS로부터 직접 Airdrop 토큰을 제공받습니다.
            </SubHeadline>
            <ContentWrapper pose={animate}>
              <Content>
                <ContentTitle>
                  EOS Airdrop 토큰을 신속히 상장
                </ContentTitle>
                <Description>
                  Airdrop 토큰이 EOSDAQ 개인 지갑에 할당되면 즉시 거래가 가능합니다. Airdrop 받은 본인의 토큰내역이 매주 업데이트 됩니다.
                </Description>
              </Content>
              <Content>
                <ContentTitle>
                  편리한 투표
                </ContentTitle>
                <Description>
                  건강한 EOS 생태계를 책임지는 Block Producer의 선출을 위한 투표를 지원합니다. Worker Proposal System을 통해 EOS 커뮤니티의 이익이 되는 애플리케이션을 투표할 수 있습니다.
                </Description>
              </Content>
            </ContentWrapper>
          </Container>
        </Section>
      );
    }}
  </Waypoint>
);

export default MainHolder;

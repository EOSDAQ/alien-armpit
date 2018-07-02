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

// onScroll() {
//   let { top } = this.el.getBoundingClientRect();
//   if (top < window.innerHeight) {
//     let offset = top - window.innerHeight;
//     window.requestAnimationFrame(() => this.animateY(offset));
//   }
// }

// animateY(offset) {
//   this.el.style.transform = `translateY(${offset * .3}px)`;
//   // this.imageEl.style.transform = `translateY(${offset * .3}px)`;
// }

const MainTransaction = () => (
  <Waypoint
    steps={3}
  >
    {({ intersectionRatio }) => {
      const animate = intersectionRatio > 0.3;
      return (
        <Section pb={300}>
          <Container>
            <Headline pose={animate}>
              빠른 거래
            </Headline>
            <SubHeadline pose={animate}>
              순간적인 대량 거래를 안정적으로 처리하려 노력합니다.
            </SubHeadline>
            <ContentWrapper pose={animate}>
              <Content>
                <ContentTitle>
                  안정적인 EOS 플랫폼
                </ContentTitle>
                <Description>
                  EOS는 0.5초마다 블록이 생성되며 초당 10000건의 트랜잭션을 처리합니다. 거래소의 거래 속도와 안정성을 위해 EOS Network로부터 충분한 NET, CPU, RAM을 확보합니다.
                </Description>
              </Content>
              <Content>
                <ContentTitle>
                  스마트 컨트랙트를 통한 주문
                </ContentTitle>
                <Description>
                  모든 주문 행위는 EOSDAQ 스마트 컨트랙트를 통해 EOS Blockchain에 기록됩니다. EOSDAQ은 주문을 조작하지도 않고 시장을 기만하지도 않습니다.
                </Description>
              </Content>
            </ContentWrapper>
          </Container>
        </Section>
      );
    }}
  </Waypoint>
);

export default MainTransaction;

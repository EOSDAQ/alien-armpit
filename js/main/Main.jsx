import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Section, Headline, SubHeadline, ContentWrapper, Content, ContentTitle, Description, Container } from './main.styled';
import Box from '../common/components/atom/Box';
import { Text } from '../common/components/atom/Text';
import { Flex } from '../common/components/atom/Flex';
import Footer from '../common/components/organisms/Footer';
import Dashboard from './dashboard/Dashboard';
import Coming from './coming/Coming';
import Header from '../common/components/organisms/Header';
import Hero from './hero/Hero';
import Waypoint from '../common/components/molecules/Waypoint';

class Holder extends Component {
  render() {
    return (
      <Waypoint
        options={{
          threshold: [0, .3, 1.0],
        }}
      >
        {({ intersectionRatio }) => {
          const animate = intersectionRatio > 0.3;

          return (
            <Section bg="aliceblue">
              <Container>
                <Headline pose={animate}>
                  EOS에 특화된 거래소.<br/>
                  <b>신속한 토큰 상장</b>과 <strong>투표</strong>.
                </Headline>
                <SubHeadline pose={animate}>
                  EOS 홀더들은 EOS로부터 직접 Airdrop 토큰을 제공받습니다.
                </SubHeadline>
                <ContentWrapper pose={animate}>
                  <Content>
                    <ContentTitle>EOS Airdrop 토큰을 신속히 상장</ContentTitle>
                    <Description>Airdrop 토큰이 EOSDAQ 개인 지갑에 할당되면 즉시 거래가 가능합니다. Airdrop 받은 본인의 토큰내역이 매주 업데이트 됩니다.</Description>
                  </Content>
                  <Content>
                    <ContentTitle>편리한 투표</ContentTitle>
                    <Description>건강한 EOS 생태계를 책임지는 Block Producer의 선출을 위한 투표를 지원합니다. Worker Proposal System을 통해 EOS 커뮤니티의 이익이 되는 애플리케이션을 투표할 수 있습니다.</Description>
                  </Content>
                </ContentWrapper>
              </Container>
            </Section>
          )
        }}
      </Waypoint>
    );
  }
}

class Transaction extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onScroll = this.onScroll.bind(this);
  // }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.onScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.onScroll);
  // }

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

  render() {
    return (
      <Waypoint
        options={{
          threshold: [0, .3, 1.0],
        }}
      >
        {({ intersectionRatio }) => {
          const animate = intersectionRatio > 0.3;
          return (
            <Section
              innerRef={e => this.el = e}
              pb={300}
            >
              <Container>
                <Headline pose={animate}>
                  빠른 거래
                </Headline>
                <SubHeadline pose={animate}>
                  순간적인 대량 거래를 안정적으로 처리하려 노력합니다.
                </SubHeadline>
                <ContentWrapper pose={animate}>
                  <Content>
                    <ContentTitle>안정적인 EOS 플랫폼</ContentTitle>
                    <Description>
                      EOS는 0.5초마다 블록이 생성되며 초당 10000건의 트랜잭션을 처리합니다. 거래소의 거래 속도와 안정성을 위해 EOS Network로부터 충분한 NET, CPU, RAM을 확보합니다.
                    </Description>
                  </Content>
                  <Content>
                    <ContentTitle>스마트 컨트랙트를 통한 주문</ContentTitle>
                    <Description>
                      모든 주문 행위는 EOSDAQ 스마트 컨트랙트를 통해 EOS Blockchain에 기록됩니다. EOSDAQ은 주문을 조작하지도 않고 시장을 기만하지도 않습니다.
                    </Description>
                  </Content>
                </ContentWrapper>
              </Container>
            </Section>
          )
        }}
      </Waypoint>
    )
  }
}

class Wallet extends Component {
  render() {
    return (
      <Waypoint
        options={{
          threshold: [0, .3, 1.0],
        }}
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
                    <ContentTitle>안전한 자산</ContentTitle>
                    <Description>개인 지갑의 Private key 정보와 거래하지 않는 자산은 거래소에서 보관하지 않습니다. 해킹으로부터 안전하게 내 자산을 지킬 수 있습니다.</Description>
                  </Content>
                  <Content>
                    <ContentTitle>다중 권한 지갑</ContentTitle>
                    <Description>다중 권한 지갑을 통해 트레이딩 전문가에게 거래를 맡겨 내 자산을 운용할 수 있습니다.</Description>
                  </Content>
                </ContentWrapper>
              </Container>
            </Section>
          )
        }}
      </Waypoint>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <Coming />
        <Header />
        <Hero />
        <Holder />
        <Transaction />
        <Wallet />
        <Footer />
      </div>
    );
  }
}

export default translate(['main'])(Main);

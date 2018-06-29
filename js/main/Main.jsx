import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Section, Headline, SubHeadline, ContentWrapper, Content, ContentTitle, Description, Container, Blur } from './main.styled';
import Box from '../common/components/atom/Box';
import { Text } from '../common/components/atom/Text';
import { Flex } from '../common/components/atom/Flex';
import Footer from '../common/components/organisms/Footer';
import Dashboard from './dashboard/Dashboard';
import Coming from './coming/Coming';
import Header from '../common/components/organisms/Header';

class Decentralized extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Flex>
            <Box width={1/4}></Box>
            <Box></Box>
          </Flex>
        </Container>
      </Section>
    )
  }
}

class Holder extends Component {
  render() {
    return (
      <Section pb={300}>
        <Container>
          <Headline>
            EOS에 특화된 거래소.<br/>
            신속한 토큰 상장과 투표.
          </Headline>
          <SubHeadline>
            EOS 홀더들은 EOS로부터 직접 Airdrop 토큰을 제공받습니다.
          </SubHeadline>
          <ContentWrapper>
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
        <Blur
          type="blue"
          width={1000}
          height={500}
        />
      </Section>
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
      <Section
        innerRef={e => this.el = e}
        bg="primaryDark"
        color="white"
        pb={300}
      >
        <Container>
          <Headline>
            빠른 거래
          </Headline>
          <SubHeadline>
            순간적인 대량 거래를 안정적으로 처리하려 노력합니다.
          </SubHeadline>
          <ContentWrapper>
            <Content>
              <ContentTitle color="white">안정적인 EOS 플랫폼</ContentTitle>
              <Description color="rgba(255, 255, 255, 0.7)">
                EOS는 0.5초마다 블록이 생성되며 초당 10000건의 트랜잭션을 처리합니다. 거래소의 거래 속도와 안정성을 위해 EOS Network로부터 충분한 NET, CPU, RAM을 확보합니다.
              </Description>
            </Content>
            <Content>
              <ContentTitle color="white">스마트 컨트랙트를 통한 주문</ContentTitle>
              <Description color="rgba(255, 255, 255, 0.7)">
                모든 주문 행위는 EOSDAQ 스마트 컨트랙트를 통해 EOS Blockchain에 기록됩니다. EOSDAQ은 주문을 조작하지도 않고 시장을 기만하지도 않습니다.
              </Description>
            </Content>
          </ContentWrapper>
        </Container>
        <Blur
          type="transaction"
          innerRef={e => this.imageEl = e}
          width={1000}
          height={400}
        />
      </Section>
    )
  }
}

class Wallet extends Component {
  render() {
    return (
      <Section bg="rgb(250, 250, 250)">
        <Container>
          <Headline>
            강력한 개인 지갑
          </Headline>
          <SubHeadline>
            개인이 자산을 직접 보관하는 탈중앙화 방식의 지갑을 제공합니다. 이 방식은 기존 거래소들이 사용하는 중앙집중화된 자산보관 방식과 차별화되며, 해킹 위험이 현저히 낮습니다.
          </SubHeadline>
          <ContentWrapper>
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
        <img 
          src="/images/blur-pink.png" 
          // ref={e => this.imageEl = e}
        />
      </Section>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Coming />
        <Header />
        <Dashboard />
        <Box 
          py={120}
          px={48}
          m={24}
          style={{
            background: `url(/images/hero.png) 50% 50%/cover no-repeat`
          }}
        >
          <Text
            fontWeight={700}
            fontSize={72}
            lineHeight={1.1}
            textAlign="center"
          >
            Airdrop 토큰<br/> 
            신속한 상장
          </Text>
          <Box mt={24}>
            <Text
              fontSize={20}
              color="primaryDark"
              lineHeight={1.46}
              textAlign="center"
            >
              EOS 기반 탈중앙화 거래소입니다.<br/>
              개인 지갑에 안전하게 자산을 관리하세요.<br/>
              모든 거래내역은 투명하게 블록체인에 기록됩니다.
            </Text>
          </Box>
        </Box>
        <Box maxWidth={1366} mx="auto">
          <Holder />
          <Transaction />
          <Wallet />
        </Box>
        <Footer />
      </div>
    );
  }
}

export default translate(['main'])(Main);

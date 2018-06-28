import React, { Component } from 'react';
import { Section, Headline, SubHeadline } from './main.styled';

class Main extends Component {
  render() {
    return (
      <div>
        <Section>
          <Headline>Airdop 토큰<br/>신속한 상장</Headline>
          <SubHeadline>
            EOS 기반 탈중앙화 거래소입니다<br/>
            개인 지갑에 안전하게 자산을 관리하세요<br/>
            모든 거래내역은 투명하게 블록체인에 기록됩니다
          </SubHeadline>
        </Section>
      </div>
    );
  }
}

export default Main;

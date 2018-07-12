import React from 'react';
import Waypoint from '../common/components/molecules/Waypoint';
import {
  Section,
  Container,
  Headline,
  SubHeadline,
  ContentWrapper,
} from './Main.styled';
import { EOSFeature, Badge, BadgeLabel } from './MainHolder.styled';

const eosFeatures = [
  {
    type: 'createAccount',
    label: '이오스 계좌생성',
    color: '#0943c8',
    primary: 'white',
  },
  {
    type: 'airdrop',
    label: '에어드랍',
    color: '#fff',
    primary: '#08f',
  },
  {
    type: 'ram',
    label: 'RAM 거래',
    color: '#454645',
    primary: 'white',
  },
  {
    type: 'staking',
    label: '스테이킹',
    color: '#082D66',
    primary: 'white',
  },
  {
    type: 'vote',
    label: '투표',
    color: '#e21c1c',
    primary: 'white',
  },
];

const MainHolder = () => (
  <Waypoint
    steps={3}
  >
    {({ intersectionRatio }) => {
      const animate = intersectionRatio > 0.3;
      return (
        <Section
          bg="#f7fafa"
          pb={200}
        >
          <Container>
            <Headline
              pose={animate}
            >
              편리한 이오스 활용
            </Headline>
            <SubHeadline
              pose={animate}
            >
              이오스에 특화된 다양한 기능을 통해 이오스 생태계 구축에 기여할 수 있습니다.
            </SubHeadline>
            <ContentWrapper
              pose={animate}
            >
              {eosFeatures.map((feature, i) => (
                <EOSFeature
                  key={feature.type}
                  animate={animate}
                  delay={i * 100 + 1000}
                  color={feature.color}
                >
                  <Badge
                    type={feature.type}
                  />
                  <BadgeLabel color={feature.primary}>
                    {feature.label}
                  </BadgeLabel>
                </EOSFeature>
              ))}
            </ContentWrapper>
          </Container>
        </Section>
      );
    }}
  </Waypoint>
);

export default MainHolder;

import React from 'react';
import { translate } from 'react-i18next';
import Waypoint from 'components/molecules/Waypoint';
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

const MainHolder = (props) => {
  const { t } = props;

  return (
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
                {t('utility.title')}
              </Headline>
              <SubHeadline
                pose={animate}
              >
                {t('utility.desc')}
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
                      {t(`utility.${feature.type}`)}
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
};

export default translate('main')(MainHolder);

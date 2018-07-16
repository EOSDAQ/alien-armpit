import React from 'react';
import { translate } from 'react-i18next';
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

const MainWallet = (props) => {
  const { t } = props;

  return (
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
                {t('security.subject')}
              </SectionLabel>
              <Headline pose={animate}>
                {t('security.title')}
              </Headline>
              <SubHeadline pose={animate}>
                {t('security.descFirst')}
                <br />
                {t('security.descSecond')}
                <br />
                {t('security.descThird')}
              </SubHeadline>
              <ContentWrapper pose={animate}>
                <Content>
                  <ContentTitle>
                    {t('security.subTitleFirst')}
                  </ContentTitle>
                  <Description>
                    {t('security.subDescFirst')}
                  </Description>
                </Content>
                <Content>
                  <ContentTitle>
                    {t('security.subTitleSecond')}
                  </ContentTitle>
                  <Description>
                    {t('security.subDescSecond')}
                  </Description>
                </Content>
              </ContentWrapper>
            </Container>
          </Section>
        );
      }}
    </Waypoint>
  );
};

export default translate('main')(MainWallet);

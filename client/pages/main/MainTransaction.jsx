import React from 'react';
import { translate } from 'react-i18next';
import Waypoint from 'components/molecules/Waypoint';
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
import Text from 'components/atom/Text';
import Box from 'components/atom/Box';
import animations from 'components/css/animations';
import Flex from 'components/atom/Flex';

const compare = [
  { name: 'EOS', value: 4000, text: '200x' },
  { name: 'ETH', value: 20, text: '(Baseline)' },
];

const MainTransaction = (props) => {
  const { t } = props;
  return (
    <Waypoint
      steps={3}
    >
      {({ intersectionRatio }) => {
        const animate = intersectionRatio > 0;
        return (
          <Section>
            <Container>
              <SectionLabel color="#08f">
                {t('speed.subject')}
              </SectionLabel>
              <Headline pose={animate}>
                <span dangerouslySetInnerHTML={{__html: t('speed.title') }} />
              </Headline>
              <SubHeadline pose={animate}>
                <span dangerouslySetInnerHTML={{__html: t('speed.desc') }} />
              </SubHeadline>
              <ContentWrapper pose={animate}>
                <Content>
                  <ContentTitle>
                    {t('speed.subTitleFirst')}
                  </ContentTitle>
                  <Description>
                    {t('speed.subDescFirst')}
                  </Description>
                </Content>
                <Content>
                  <ContentTitle>
                    {t('speed.subTitleSecond')}
                  </ContentTitle>
                  <Description>
                    {t('speed.subDescSecond')}
                  </Description>
                </Content>
                <Content>
                  <Box
                    mt={42}
                    mb={32}
                  >
                    <Text fontWeight={500}>
                      Transaction Per Second (TPS)
                    </Text>
                  </Box>
                  <Box mt={8}>
                    {compare.map((item, i) => (
                      <Flex
                        key={item.name}
                        mb={12}
                        alignItems="center"
                      >
                        <Box mr={16}>
                          <Text
                            color="grey800"
                            fontSize={12}
                          >
                            {item.name}
                          </Text>
                        </Box>
                        <Box
                          css={animations.scaleX(animate, { delay: '1000ms' })}
                          style={{
                            transformOrigin: 'left',
                            background: i === 0 ? 'linear-gradient(to right, rgb(128, 243, 201), rgb(4, 198, 220))' : '#aaa',
                            width: item.value / 10,
                            height: 5,
                          }}
                        />
                        <Box ml={16}>
                          <Text
                            color={i === 0 ? 'primary' : 'grey400'}
                            fontSize={i === 0 ? 24 : 14}
                            fontWeight={i === 0 && 700}
                          >
                            {item.text}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </Box>
                </Content>
              </ContentWrapper>
            </Container>
          </Section>
        );
      }}
    </Waypoint>
  )
};

export default translate('main')(MainTransaction);

import React from 'react';
import { translate } from 'react-i18next';
import Text from 'components/atom/Text';
import Flex from 'components/atom/Flex';
import Icon from 'components/atom/Icon';
import Box, { Container } from 'components/atom/Box';

class MainComing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  onClose() {
    this.setState({
      close: true,
    });
  }

  render() {
    const { t } = this.props;
    const { close } = this.state;
    if (close) return null;

    return (
      <Box
        width={1}
        bg="#141A2A"
        pt={20}
        pb={16}
      >
        <Container large>
          <Flex justifyContent="space-between">
            <Text
              fontSize={14}
              color="grey200"
            >
              {t('coming.title')}
            </Text>
            <Box onClick={() => this.onClose()}>
              <Icon
                type="close"
                fill="white"
                width={12}
                height={12}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }
}

export default translate('main')(MainComing);

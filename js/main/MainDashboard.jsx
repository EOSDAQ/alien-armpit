import React from 'react';
import { css } from 'emotion';
import Box from '../common/components/atom/Box';
import Flex from '../common/components/atom/Flex';
import Text from '../common/components/atom/Text';

const timer = new Worker('/workers/timer.js');

const coinList = [
  { name: 'CARMEL', src: 'ic-carmel.png' },
  { name: 'CET', src: 'ic-chaince.png' },
  { name: 'chintai', src: 'ic-chintai.png' },
  { name: 'eosDAC', src: 'ic-eosdac.png' },
  { name: 'IQ', src: 'ic-iq.png' },
  { name: 'INSTAR', src: 'ic-instar.svg' },
  { name: 'PLT', src: 'ic-plactal.svg' },
];

class MainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.animate = true; // flag for animateBelt render loop to stop.

    this.state = {
      coins: coinList,
    };
  }

  componentDidMount() {
    setTimeout(() => this.animateBelt(), 500);
    this.appendItemToBelt();
    timer.onmessage = () => this.appendItemToBelt();
  }

  componentWillUnmount() {
    this.animate = false;
    timer.terminate(); // todo. restart on timer when user re-visits main page.
  }

  getX() {
    if (!this.item) return 0;
    const { transform } = this.item.style;
    let x = /translateX\((.+)px\).+/.exec(transform);

    if (Array.isArray(x)) {
      x = Math.round(x[1] * 100) / 100;
      return x;
    }

    return 0;
  }

  setX(x) {
    if (!this.item) return;

    this.item.style.transform = `translateX(${x}px) translateZ(0px)`;
  }

  animateBelt() {
    if (!this.item) return;
    this.animate = true;

    const animate = () => {
      if (!this.animate) return;

      const x = this.getX();
      this.setX(x - 1.4);

      requestAnimationFrame(() => animate());
    };

    animate();
  }

  appendItemToBelt() {
    if (!this.item) return;
    const rect = this.item.getBoundingClientRect();
    const { children } = this.item;

    let paddingLeft = 0;
    const shouldRemove = [];

    let shouldUpdateCoins = false;
    let appendCoin = true;

    [...children].forEach((child) => {
      const childRect = child.getBoundingClientRect();
      if (childRect.right > rect.right + 200) {
        appendCoin = false;
      }

      const hidden = (childRect.left + childRect.width) < 0;

      if (hidden) {
        shouldRemove.push(child);
        paddingLeft += childRect.width;
      }
    });

    const { coins: prevCoins } = this.state;
    let newCoins = [...prevCoins];

    if (shouldRemove.length > 0) {
      newCoins = newCoins.slice(shouldRemove.length);
      this.animate = false; // stop the animate function on this.animateBelt.
      this.setX(this.getX() + paddingLeft);
      requestAnimationFrame(() => this.animateBelt());
      shouldUpdateCoins = true;
    }

    if (appendCoin) {
      const lastCoin = newCoins[newCoins.length - 1];
      const lastCoinIndex = coinList.findIndex(c => c.name === lastCoin.name);
      const inserted = Object.assign({}, coinList[(lastCoinIndex + 1) % coinList.length]);
      inserted.hash = performance.now();
      newCoins.push(inserted);

      shouldUpdateCoins = true;
    }

    if (shouldUpdateCoins) {
      this.setState({
        coins: newCoins,
      });
    }
  }

  render() {
    const { coins } = this.state;

    return (
      <Box
        width={1}
        color="white"
        bg="grey900"
      >
        <Box
          innerRef={(e) => {
            this.belt = e;
          }}
          overflow="hidden"
          userSelect="none"
          pointerEvents="none"
          py={2}
        >
          <Flex
            innerRef={(e) => {
              this.item = e;
            }}
          >
            {coins.map((coin) => {
              if (!coin) return null;
              return (
                <Flex
                  key={coin.hash || coin.name}
                  alignItems="center"
                  flex="0 0 auto"
                >
                  <img
                    src={`./images/${coin.src}`}
                    alt={coin.src}
                    className={css`
                      width: 20px;
                      height: 20px;
                    `}
                  />
                  <Text
                    color="white"
                    fontFamily="menlo, consolas, monospace"
                    fontWeight="bold"
                    fontSize={14}
                    mx={2}
                  >
                    {coin.name}
                  </Text>
                  <Text
                    color="rgba(255, 255, 255, .8)"
                    fontSize={12}
                    mr={40}
                    fontFamily="menlo, consolas, monospace"
                  >
                    (0%)
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Box>
    );
  }
}

export default MainDashboard;

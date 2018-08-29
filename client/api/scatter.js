// eslint-disable-next-line
/* global scatter */

import Eos from 'eosjs';
import jdenticon from 'jdenticon';
import { actions } from 'reducer/account/accountReducer';
import store from '../store';

jdenticon.config = {
  // hues: [170, 180, 195, 210],
  // lightness: {
  //   color: [.5, .5],
  //   grayscale: [1, 1],
  // },
  // saturation: {
  //   color: [.9, 1],
  //   grayscale: [0, 0],
  // },
  // backColor: "#000",
  // replaceMode: "once"
};

const network = {
  blockchain: 'eos',
  host: 'ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com',
  port: 18888,
  protocol: 'http',
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
};

class CustomScatterError extends Error {
  constructor({ code, message }) {
    super(message);
    this.code = code;
    this.message = message;
    this.timestamp = Date.now();
  }
}

class Scatter {
  constructor() {
    this.instance = window.scatter;
    this.loaded = !!this.instance;
    if (!this.instance) {
      document.addEventListener('scatterLoaded', () => this.onLoad());
    }
  }

  onLoad() {
    this.set(window.scatter);
    store.dispatch(actions.authenticateScatter());
    window.scatter = null;
  }

  set(instance) {
    this.instance = instance;
    this.loaded = !!instance;
  }

  get() {
    if (this.instance) {
      return this.instance;
    }

    throw new CustomScatterError({
      code: 500,
      message: 'Scatter is not installed',
    });
  }

  authenticate() {
    const scatter = this.get();
    return scatter.authenticate();
  }

  getIdentity(...args) {
    const scatter = this.get();
    return scatter.getIdentity(...args);
  }

  revokeIdentity(...args) {
    const scatter = this.get();
    return scatter.forgetIdentity(...args);
  }

  get eos() {
    const scatter = this.get();
    const eos = scatter.eos(network, Eos, {});
    return eos;
  }

  transfer(...args) {
    return this.eos.transfer(...args);
  }

  contract(...args) {
    return this.eos.contract(...args);
  }
}

const scatter = new Scatter();

export const ask = async (data) => {
  const result = await scatter.transfer(
    data.from,
    'eosdaqoooo2o',
    data.amount,
    data.price.toFixed(4),
  );

  const { transaction: { transaction }, processed } = result;

  alert(`성공적으로 주문을 올렸습니다. ID(${processed.id}). Block(${transaction.ref_block_num}). ${processed.elapsed}ms`);
};

export const bid = async (data) => {
  const contract = await scatter.contract('oo1122334455');
  try {
    const result = await contract.transfer(data.from, 'eosdaqoooo2o', data.amount, data.price.toFixed(4));
    const { transaction: { transaction }, processed } = result;
    alert(`성공적으로 주문을 올렸습니다. ID(${processed.id}). Block(${transaction.ref_block_num}). ${processed.elapsed}ms`);
  } catch(e) {
    console.error(e);
  }
}

export const authenticateScatter = async () => {
  const result = await scatter.authenticate();
  console.log(result);
}

export const getScatterIdentity = async () => {
  const {
    publicKey: scatterPublicKey,
    accounts,
    ...props,
  } = await scatter.getIdentity({
    accounts: [network],
  });

  console.log(props, scatterPublicKey);
  let account;

  if (Array.isArray(accounts)) {
    // filter through...
    [account] = accounts;
  }

  if (!account) {
    throw Error('No viable account');
  }

  let identicon = jdenticon.toSvg(scatterPublicKey, 32);
  identicon = identicon.replace(/(width|height)="\d+"/g, '');

  return {
    ...account,
    identicon,
  };
};

export const forgetScatterIdentity = async () => {
  await scatter.revokeIdentity();
};

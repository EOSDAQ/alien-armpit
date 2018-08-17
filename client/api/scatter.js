// eslint-disable-next-line
/* global scatter */

import Eos from 'eosjs';
import Identicon from 'identicon.js';
import { actions } from 'reducer/account/accountReducer';
import store from '../store';

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
}

const scatter = new Scatter();

export const transfer = async (data) => {
  if (!scatter) {
    throw CustomScatterError({
      code: 500,
      message: 'Scatter is not installed',
    });
  }

  const eos = scatter.eos(network, Eos, {});

  const result = await eos.transfer({
    from: data.from,
    to: 'eosdaq',
    quantity: data.quantity,
    memo: data.price,
  });

  const { transaction: { transaction }, processed } = result;

  alert(`성공적으로 주문을 올렸습니다. ID(${processed.id}). Block(${transaction.ref_block_num}). ${processed.elapsed}ms`);
};

export const authenticateScatter = async () => {
  const result = await scatter.authenticate();
}

export const getScatterIdentity = async () => {
  const {
    publicKey: scatterPublicKey,
    accounts,
  } = await scatter.getIdentity({
    accounts: [network],
  });

  let account;

  if (Array.isArray(accounts)) {
    // filter through...
    [account] = accounts;
  }

  if (!account) {
    throw Error('No viable account');
  }

  // publicKey가 백엔드에 등록되어 있는지 확인해본다.
  // 없는 경우 -> 회원가입 || 있는 경우 -> 로그인
  // 지금은. window.exist로 체크한다.
  const authorized = false;

  const identiconOptions = {
    foreground: [103, 246, 249, 255],
    background: [19, 19, 19, 255],
    margin: 0.2,
    size: 40,
    format: 'svg',
  };

  const identicon = `data:image/svg+xml;base64,${new Identicon(scatterPublicKey, identiconOptions).toString()}`;

  return {
    name: account.name,
    identicon,
    authorized,
  };
};

export const forgetScatterIdentity = async () => {
  await scatter.revokeIdentity();
};

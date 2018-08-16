// eslint-disable-next-line
/* global scatter */

import Eos from 'eosjs';
import Identicon from 'identicon.js';

let scatter = null;

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

export function setScatter() {
  if (window.scatter) {
    scatter = window.scatter;
  }
  window.scatter = null;
}

document.addEventListener('scatterLoaded', setScatter);

export const transfer = async (data) => {
  if (!scatter) {
    throw CustomScatterError({
      code: 401,
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

export const getScatterIdentity = async () => {
  // 유저가 signIn을 클릭하는 시점 바로 직전에 scatter를 설치했을 수 있기 때문에 매번 이곳에서 window.scatter를 체크한다.
  if (!scatter) {
    throw new CustomScatterError({
      message: 'scatter is not installed',
      code: 500,
    });
  }

  if (scatter) {
    // await scatter.authenticate();

    const { publicKey: scatterPublicKey, accounts } = await scatter.getIdentity({
      accounts: [network],
    });

    await scatter.authenticate();
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
  }
};

export const forgetScatterIdentity = async () => {
  if (window.scatter) {
    await window.scatter.forgetIdentity();
  }
};

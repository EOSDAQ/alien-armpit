// eslint-disable-next-line
/* global scatter */
import Eos from 'eosjs';
import jdenticon from 'jdenticon';

const chainId = document.querySelector('meta[property="eos:chainId"]')
  .getAttribute('content');
const chainUrl = document.querySelector('meta[property="eos:chainUrl"]')
  .getAttribute('content');

const {
  protocol,
  host,
} = new URL(chainUrl);

const [_, port] = /:(\d+)/.exec(chainUrl);

const network = {
  blockchain: 'eos',
  host,
  port,
  protocol: protocol.slice(0, -1),
  chainId,
};

console.log(network);

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

  getArbitrarySignature(publicKey, data, whatfor, isHash) {
    const scatter = this.get();
    return scatter.getArbitrarySignature(
      publicKey,
      data,
      whatfor,
      isHash,
    );
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
  const { token } = data;
  const result = await scatter.transfer(
    data.from,
    token.contractAccount,
    data.amount,
    data.price.toFixed(4),
  );

  const { transaction: { transaction }, processed } = result;

  alert(`성공적으로 주문을 올렸습니다. ID(${processed.id}). Block(${transaction.ref_block_num}). ${processed.elapsed}ms`);
};

export const bid = async (data) => {
  const { token } = data;
  const contract = await scatter.contract(token.account);
  try {
    const result = await contract.transfer(
      data.from, 
      token.contractAccount, 
      data.amount,
      data.price.toFixed(4)
    );

    const { transaction: { transaction }, processed } = result;
    alert(`성공적으로 주문을 올렸습니다. ID(${processed.id}). Block(${transaction.ref_block_num}). ${processed.elapsed}ms`);
  } catch(e) {
    const errObj = JSON.parse(e);
    console.log(errObj);
    console.log(e.message, '----FROM SAGA');
  }
}

export const authenticateScatter = async () => {
  const result = await scatter.authenticate();
  // console.log(result);
  return result;
}

export const getScatterIdentity = async () => {
  const {
    publicKey: scatterPublicKey,
    accounts,
    ...props,
  } = await scatter.getIdentity({
    accounts: [network],
  });
  
  // const sig = await scatter.getArbitrarySignature(
  //   'EOS5ur6NmeN2XdfhZfDtHJWX5uhQPBV5sageY9xu2WyYE36NFqNdB',
  //   'SIG_K1_K8eN2Re2wVA7wNJof3CahXtQwE5Bv2DMxRvDaBssrrUcyKSYAcqbicz6jBejXMZ6woBu5kh6sLHcEjSGdsDj3jjonh2C1h',
  //   'authorization',
  //   true,
  // );

  // console.log(sig);

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

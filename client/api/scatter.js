// eslint-disable-next-line
/* global scatter */
import Eos from 'eosjs';

const chainId = document.querySelector('meta[property="eos:chainId"]')
  .getAttribute('content');
const chainUrl = document.querySelector('meta[property="eos:chainUrl"]')
  .getAttribute('content');

const {
  protocol,
  hostname: host,
} = new URL(chainUrl);

const [_, port] = /:(\d+)/.exec(chainUrl);

const network = {
  blockchain: 'eos',
  host,
  port,
  httpEndpoint: chainUrl,
  protocol: protocol.slice(0, -1),
  chainId,
};

console.log('EOS Network configured!', network);

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
    // window.scatter = null;
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
    return scatter.eos(network, Eos, { expireInSeconds: 60 })
  }

  transfer(...args) {
    const scatter = this.get();
    return scatter.eos.transfer(...args);
  }

  contract(...args) {
    const scatter = this.get();
    return scatter.eos.contract(...args);
  }
}

const scatter = new Scatter();
const eos = Eos({...network});

export const getCurrencyBalance = async ({ code, account }) => {
  try {
    const [balance] = await eos.getCurrencyBalance(code, account);
    return balance;
  } catch(err) {
    console.error(err);
  }
}

export const cancelOrder = async ({ id, type, account, accountName, contractAccount }) => {
  try {
    const contract = await scatter.eos.contract(contractAccount);
    const result = await contract.cancelorder(accountName, id, type, {
      authorization: [`${accountName}@active`],
    });
    
    alert(`Successfully canceled order! txID: ${result.transaction_id}`);
  } catch(err) {
    console.error(err);
  }
}

export const ask = async (data) => {
  const { token } = data;
  const contract = await scatter.eos.contract(token.account);
  const result = await contract.transfer(
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

  try {
    const result = await scatter.eos.transfer(
      data.from, 
      token.contractAccount, 
      data.amount,
      data.price.toFixed(4)
    );

    const { transaction: { transaction }, processed } = result;
    console.log(result);
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
    accounts,
    ...identity,
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

  const signature = await scatter.authenticate();

  return {
    signature,
    identity,
    account,
  };
};

export const forgetScatterIdentity = async () => {
  await scatter.revokeIdentity();
};

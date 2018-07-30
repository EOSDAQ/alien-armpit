import Eos from 'eosjs';
import Identicon from 'identicon.js';

export const getScatterIdentity = async () => {
  // 유저가 signIn을 클릭하는 시점 바로 직전에 scatter를 설치했을 수 있기 때문에 매번 이곳에서 window.scatter를 체크한다.
  if (window.scatter) {
    const network = {
      blockchain: 'eos',
      host: 'ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com',
      port: 18888,
      protocol:'http',
      chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
    };

    const { publicKey: scatterPublicKey, accounts } = await window.scatter.getIdentity({
      accounts: [network],
    });

    let account;
    if (Array.isArray(accounts)) {
      // filter through...
      account = accounts[0];
    }

    if (!account) {
      throw Error('No viable account');
    }

    const eos = scatter.eos(network, Eos, {});
    const contract = await eos.contract('eosdaq'); // contract name should be in config.

    const eosAccount = await eos.getAccount(account.name);
    // check user's permission.
 
    const publicKey = eosAccount.permissions.filter(p => p.perm_name === 'owner')[0].required_auth.keys[0].key;

    // publicKey가 백엔드에 등록되어 있는지 확인해본다.
    // 없는 경우 -> 회원가입 || 있는 경우 -> 로그인
    // 지금은. window.exist로 체크한다.
    let authorized = false;

    if (window.exist) {
      authorized = true;
    }

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
      publicKey: publicKey,
      identicon,
      authorized,
    };
  }
}

export const forgetScatterIdentity = async () => {
  if (window.scatter) {
    await window.scatter.forgetIdentity();
  }
  return;
}
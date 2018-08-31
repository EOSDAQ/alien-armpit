import axios from 'axios';
import errorHandler from './errorHandler';
import { proxy } from './apis';

const userBaseUrl = '/api/v1/account/user';

export const signUp = body =>
  proxy.post('/account/signup', body);

export const signIn = body =>
  proxy.post('/account/signin', body);

export const signOut = () =>
  proxy.post('/account/signout');

// export const signUp = async (params) => {
//   try {
//     const response = await axios.post(userBaseUrl, params);
//     return response.data.resultData;
//   } catch (err) {
//     return errorHandler(err);
//   }
// };

export const resendEmail = body =>
  proxy.post(`/account/user/resend-email`, body);

export const get = async (accountName) => {
  const { data, error } = await proxy.get(`/account/user/${accountName}`);
  console.log(data, error);
  return data;
};

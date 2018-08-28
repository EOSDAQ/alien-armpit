import axios from 'axios';
import errorHandler from './errorHandler';
import { proxy } from './apis';

const userBaseUrl = '/api/v1/account/user';

export const signUp = async (params) => {
  try {
    const response = await axios.post(userBaseUrl, params);
    return response.data.resultData;
  } catch (err) {
    return errorHandler(err);
  }
};

export const resendEmail = async (body) => {
  const response = await axios.post(userBaseUrl + '/resend-email', body);
  const { data: { resultData } } = response;
  return resultData;
}

export const API_TYPES = {
  RESEND_EMAIL: '/resend-email',
}

class Api {
  constructor(baseURI) {
    this.baseURI = baseURI;
    this.client = axios;
  }

  buildURI(url) {
    return this.baseURI + url;
  }

  get(url, params) {
    return this.execute(this.client.get(this.buildURI(url)));
  }

  post(url, body) {
    return execute(this.client.post(this.buildURI(url), body));
  }

  async execute(fetch) {
    let res = {
      data: null,
      error: null,
    };

    try {
      const response = await fetch;
      res.data = response.data;
    } catch (err) {
      console.log(err);
      const { response } = err;

      res.error = {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        error: response.data,
      };
    }

    return res;
  }
}

// const { data, error } = await apiv1.get(API_TYPES.RESEND_EMAIL, body);

export const get = async (accountName) => {
  const { data, error } = await proxy.get(`/account/user/${accountName}`);
  console.log(data, error);
  return data;
};

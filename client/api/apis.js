import axios from 'axios';

class Api {
  constructor(baseURI) {
    this.baseURI = baseURI;
    this.client = axios;

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.buildURI = this.buildURI.bind(this);
    this.execute = this.execute.bind(this);
  }

  buildURI(url) {
    return this.baseURI + url;
  }

  get(url, params) {
    return this.execute(this.client.get(this.buildURI(url)));
  }

  post(url, body) {
    return this.execute(this.client.post(this.buildURI(url), body));
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

export const proxy = new Api('/api/v1');
export const burgundy = new Api('${burgundy}/api/v1');

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

  buildHeaders() {
    return {
      headers: {
        'language': localStorage.getItem('i18nextLng'),
      },
    };
  }

  get(url, params) {
    return this.execute(this.client.get(
      this.buildURI(url),
      this.buildHeaders(),
    ));
  }

  post(url, body) {
    return this.execute(this.client.post(
      this.buildURI(url),
      body,
      this.buildHeaders(),
    ));
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

const tiffanyApi = document.querySelector(`meta[property='api:tiffany']`)
  .getAttribute('content');

export const proxy = new Api('/api/v1');
export const tiffany = new Api(tiffanyApi);
// export const tiffany = new Api();
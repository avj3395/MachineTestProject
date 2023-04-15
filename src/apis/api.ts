import axios from 'axios';

export const getAxiosInstance = async () => {
  // const state = store.getState();
  let token = '';
  const BASE_URL = 'https://test.freshandfetch.com/api/v1/';

  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
      },
    });

    instance.interceptors.request.use(
      function (config) {
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        //   console.log(config, 'configg========');
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          resolve(response);
        }),
      async error => {
        if (!error.response) {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
    );

    return instance;
  }
};

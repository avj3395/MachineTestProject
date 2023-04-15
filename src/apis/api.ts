import axios from 'axios';
import store from '../store';
export const BASE_URL = 'https://test.freshandfetch.com';

export const getAxiosInstance = async () => {
  const state = store.getState();
  let token = state.app.token;

  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL + '/api/v1/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });

    instance.interceptors.request.use(
      function (config) {
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        console.log(config, 'configg========');
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
        if (error.response) {
          console.log('ERROR=======', error.response);

          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
    );

    return instance;
  }
};

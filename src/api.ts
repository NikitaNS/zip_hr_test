import axios, {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

interface IApiCallParams {
  url: string;
  method?: AxiosRequestConfig['method'];
  data?: any;
  timeout?: number;
}

const axiosInstance = axios.create({
  params: {'api-key': Config.APP_KEY},
});

axiosInstance.interceptors.response.use(
  function (config) {
    return config;
  },

  function (error) {
    const errorBody = {
      status: error.response.status,
      message: error.message,
      url: error.config.url,
    };

    return Promise.reject(errorBody);
  },
);

const makeAPICall = async ({url, method = 'get', data}: IApiCallParams) => {
  try {
    const defaultConfig: AxiosRequestConfig = {
      method,
      url,
      data,
    };

    const response = await axiosInstance(defaultConfig);

    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export default makeAPICall;

import axios from "axios";
import { storageKey, apiKey } from "../const";
export const get = async (path, headers = {}, params = {}) => {
  const response = await axios.get(
    _createPath(path),
    _generateParams(headers, params)
  );

  return response.data;
};

export const post = async (path, data = {}, headers = {}, params = {}) => {
  const response = await axios.post(
    _createPath(path),
    data,
    _generateParams(headers, params)
  );
  return response.data;
};
export const patch = async (path, data = {}, headers = {}, params = {}) => {
  const response = await axios.patch(
    _createPath(path),
    data,
    _generateParams(headers, params)
  );
  return response.data;
};

const _createPath = (path) => `${apiKey.baseUrl}${path}`;
const _generateParams = (headers, params) => {
  const token = localStorage.getItem(storageKey.token);
  const localHeader = {
    Authorization: token,
    ...headers,
  };
  return {
    headers: localHeader,
    params,
  };
};

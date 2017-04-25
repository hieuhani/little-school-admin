import _ from 'lodash';
import 'whatwg-fetch';
import { ACCESS_TOKEN_KEY } from 'config';

const baseAPIEndpoint = 'http://staging.littleschoolvn.com';

export const httpMethods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const routes = {
  /**
   * Exchange token by email and password
   * @param email
   * @param password
   * @returns {{path: string, method: string, body: {email: *, password: *}}}
   */
  exchangeToken(email, password) {
    return {
      path: '/api/tokens',
      method: httpMethods.POST,
      body: {
        email,
        password,
      },
    };
  },
};

// function buildQueryString(obj = {}) {
//   const qs = _.reduce(obj, (result, value, key) => (
//     (!_.isNull(value) && !_.isUndefined(value))
//       ? (result += `${key}=${value}&`) // eslint-disable-line no-param-reassign
//       : result
//   ), '').slice(0, -1);
//   return qs;
// }

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  return parseJSON(response).then((json) => {
    error.response = json;
    return Promise.reject(error);
  });
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} route  The route has to confront to value of routes dictionary
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(route) {
  const url = `${baseAPIEndpoint}${route.path}`;
  const options = {
    method: route.method,
  };
  const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    const authHeader = {
      'X-Access-Token': token,
    };
    options.headers = _.assign({}, options.headers, authHeader);
  }

  const body = route.body;
  if (body) {
    if (body instanceof FormData) {
      options.body = body;
    } else {
      const contentType = {
        'Content-Type': 'application/json',
      };
      options.headers = _.assign({}, options.headers, contentType);
      options.body = JSON.stringify(body);
    }
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => (Promise.resolve({ data })))
    .catch((error) => (Promise.resolve({ error })));
}
import { ACCESS_TOKEN_KEY } from 'config';
import {
  CHECK_LOG_IN_STATUS,
} from './constants';

export function checkLogInStatus() {
  const hasToken = window.localStorage.getItem(ACCESS_TOKEN_KEY) !== null;
  return {
    type: CHECK_LOG_IN_STATUS,
    payload: {
      hasToken,
    },
  };
}

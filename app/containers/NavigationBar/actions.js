/*
 *
 * NavigationBar actions
 *
 */
import {
  ACCESS_TOKEN_KEY,
 } from '../../config';
import {
  LOG_OUT,
} from './constants';

export function logout() {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  return {
    type: LOG_OUT,
  };
}

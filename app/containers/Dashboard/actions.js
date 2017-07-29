import { DEFAULT_SCHOOL_KEY } from 'config';
import {
  CHECK_DEFAULT_SCHOOL,
} from './constants';

export function checkDefaultSchool() {
  const defaultSchool = window.localStorage.getItem(DEFAULT_SCHOOL_KEY);
  return {
    type: CHECK_DEFAULT_SCHOOL,
    payload: {
      defaultSchool,
    },
  };
}

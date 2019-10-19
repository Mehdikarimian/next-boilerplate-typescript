import { DEFAULT_ACTION, GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_FAIELD } from './constants';


export function getAll() {
  return {
    type: GET_ALL_POST,
  }
}
export function getAllSuccess(data: any) {
  return {
    type: GET_ALL_POST_SUCCESS,
    data
  }
}
export function getAllFaield(error: any) {
  return {
    type: GET_ALL_POST_FAIELD,
    error
  }
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

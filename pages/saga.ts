import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
// import request from '../request';

import { getAllSuccess, getAllFaield } from './actions';
import { GET_ALL_POST } from './constants';

function* getAll() {
  try {
    const data = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(getAllSuccess(data));
  } catch (error) {
    yield put(getAllFaield(error));
  }
}

export default function* indexSaga() {
  yield takeLatest(GET_ALL_POST, getAll);
}

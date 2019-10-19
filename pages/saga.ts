import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../utils/request';
// import request from '../request';

import { getAllSuccess, getAllFaield } from './actions';
import { GET_ALL_POST } from './constants';

function* getAll() {
  try {
    const data = yield call(request.get, 'posts');
    yield put(getAllSuccess(data));
  } catch (error) {
    yield put(getAllFaield(error));
  }
}

export default function* indexSaga() {
  yield takeLatest(GET_ALL_POST, getAll);
}

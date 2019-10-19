/**
 * Combine all sagas in this file and export the rootSaga.
 */

import { all } from 'redux-saga/effects';

import IndexSaga from '../pages/saga';
import HomeSaga from '../pages/home/saga';


export default function* rootSaga() {
  yield all([
    IndexSaga(),
    HomeSaga(),
  ]);
};
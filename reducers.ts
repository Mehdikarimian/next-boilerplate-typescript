/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import indexReducer from './pages/reducer';
import { IIndexStore } from './pages/reducer';

import homeReducer from './pages/home/reducer';
import { IHomeStore } from './pages/home/reducer';

export interface IStore {
  home: IHomeStore,
  index: IIndexStore,
}
export default combineReducers<IStore>({
  index: indexReducer,
  home: homeReducer,
})

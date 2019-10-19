/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import indexReducer from '../pages/reducer';
import { IIndexPage } from '../pages/interfaces';

import homeReducer from '../pages/home/reducer';
import { IHomePage } from '../pages/home/interfaces';

export interface IStore {
  home: IHomePage.IState,
  index: IIndexPage.IState,
}
export default combineReducers<IStore>({
  index: indexReducer,
  home: homeReducer,
})

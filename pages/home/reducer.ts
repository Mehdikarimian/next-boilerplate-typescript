import produce from 'immer';
import { DEFAULT_ACTION } from './constants';
import { IHomeStore, IHomeAction } from './interfaces';

export const initialState: IHomeStore = {};

export const HomeReducer = (state = initialState, action: IHomeAction) =>
  produce(state, (/*draft*/) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      default:
        break;
    }
  });
export default HomeReducer;

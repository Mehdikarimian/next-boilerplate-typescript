import produce from 'immer';
import { DEFAULT_ACTION } from './constants';
import { IHomePage } from './interfaces';

export const initialState: IHomePage.IState = {};

export const HomeReducer = (state = initialState, action: IHomePage.IAction) =>
  produce(state, (/*draft*/) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      default:
        break;
    }
  });
export default HomeReducer;

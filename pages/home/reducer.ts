import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export interface IHomeStore {
  active: boolean;
}
export const initialState: IHomeStore = {
  active: false,
};

export const HomeReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      default:
        break;
    }
  });
export default HomeReducer;

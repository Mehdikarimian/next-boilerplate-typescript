import produce from 'immer';
import { DEFAULT_ACTION, GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_FAIELD } from './constants';
import { IIndexAction, IIndexStore } from './interfaces';

export const initialState: IIndexStore = {
  start: false,
  posts: [],
};



export const IndexReducer = (state = initialState, action: IIndexAction) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_POST:
        break;
      case GET_ALL_POST_SUCCESS:
        draft.posts = action.data.data
        break;
      case GET_ALL_POST_FAIELD:
        console.log(action.error)
        break;
      case DEFAULT_ACTION:
        draft.start = true;
        break;
      default:
        break;
    }
  });
export default IndexReducer;

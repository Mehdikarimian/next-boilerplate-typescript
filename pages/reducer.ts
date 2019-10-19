import produce from 'immer';
import { DEFAULT_ACTION, GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_FAIELD } from './constants';
import { IIndexPage } from './interfaces';

export const initialState: IIndexPage.IState = {
  start: false,
  posts: [],
};



export const IndexReducer = (state = initialState, action: IIndexPage.IAction) =>
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

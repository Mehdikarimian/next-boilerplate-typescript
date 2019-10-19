import { createSelector } from 'reselect';
import { IStore } from '../store/reducers';
import { initialState } from './reducer';

const selectIndexDomain = (state: IStore) => state.index || initialState;

const makeSelectPosts = () =>
  createSelector(
    selectIndexDomain,
    substate => substate,
  );

export default makeSelectPosts;
export { selectIndexDomain as selectImprintDomain };

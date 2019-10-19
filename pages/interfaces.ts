import { Action } from 'redux';

export interface IIndexStore {
  start: Boolean,
  posts: Array<Object>,
}

export type IIndexAction = Action & {
  data: any,
  error: any,
}

export interface IIndexProps {
  dispatch: Function,
  IndexState: any
}
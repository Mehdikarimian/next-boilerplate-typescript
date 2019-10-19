import { Action } from 'redux';

export namespace IIndexPage {
  export interface IState {
    start: Boolean,
    posts: Array<Object>,
  }

  export type IAction = Action & {
    data: any,
    error: any,
  }

  export interface IProps {
    dispatch: Function,
    IndexState: any
  }
} 

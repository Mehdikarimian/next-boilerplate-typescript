import { Action } from 'redux';
import { WithTranslation } from 'next-i18next';

export namespace IIndexPage {
  export interface IState {
    start: Boolean,
    posts: Array<Object>,
  }

  export type IAction = Action & {
    data: any,
    error: any,
  }

  export type IProps = WithTranslation & {
    dispatch: Function,
    IndexState: any,
  };
  export interface ISelectorProps {
    IndexState: any
  }
} 

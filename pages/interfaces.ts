import { Action } from 'redux';
import { WithTranslation } from 'next-i18next';
import { IPostsSection } from '../sections/posts/interfaces';

export namespace IIndexPage {
  export interface IState {
    start: Boolean,
    posts: Array<IPostsSection.Post>,
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

import { NextComponentType } from 'next';
import { TStore } from '../store/interfaces';

export interface IApp {
  store: TStore
}

export type IAppComponentType = NextComponentType & {
  Layout: Function
}
import { Action } from "redux";

export namespace IHomePage {
  export interface IState { }

  export type IAction = Action & {
    data: any,
    error: any,
  }
}
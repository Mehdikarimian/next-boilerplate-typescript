import { Action } from "redux";

export interface IHomeStore {

}
export type IHomeAction = Action & {
  data: any,
  error: any,
}
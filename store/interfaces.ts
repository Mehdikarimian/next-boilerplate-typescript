import { Store } from "redux";
import { Task } from "redux-saga";

export type TStore = Store & {
  sagaTask?: Task;
  runSagaTask?: () => void;
};
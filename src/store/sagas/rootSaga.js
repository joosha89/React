import createSagaMiddleware from "@redux-saga/core";
import { all, call } from "redux-saga/effects";
import watchGetData from "./fetchDataSaga";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([call(watchGetData)]);
}

export default sagaMiddleware;
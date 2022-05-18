import { all, fork } from "redux-saga/effects";
import movieSaga from "./movieSagas";

export default function* rootSaga() {
  yield all([fork(movieSaga)]);
}

import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../action-types';
import * as actionCreators from '../action-creators';
import { fetchMovie } from "../../services/api";

function* onLoadMovie({movieId}: actionTypes.GetMovieAction){
    try{
        yield put(actionCreators.getMovieRequest());
        const { data } = yield call(fetchMovie, movieId);
        yield put(actionCreators.getMovieSuccess(data.movie));
    } catch (error) { console.log(error) }
}

function* watchOnLoadMovies() {
    yield takeEvery(actionTypes.GET_MOVIE, onLoadMovie);
  }

export default function* movieSaga() {
    yield all([fork(watchOnLoadMovies)])
}
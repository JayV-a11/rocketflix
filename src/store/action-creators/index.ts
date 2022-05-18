import * as actions from '../action-types'
import { Imovie } from '../types';

export function setMovie(movie: Imovie): actions.SetMovieAction {
    return {
      type: actions.SET_MOVIE,
      response: movie
    };
}

export function getMovie(movieId: number): actions.GetMovieAction {
    return {
        type: actions.GET_MOVIE,
        movieId: movieId
    };
}

export function getMovieRequest(): actions.GetMovieRequestAction {
    return {
      type: actions.GET_MOVIE_REQUEST
    };
}

export function setMovieId(movieId: number): actions.SetMovieIdRequestAction {
    return {
      type: actions.SET_MOVIE_ID_REQUEST,
      payload: movieId
    };
}

export function getMovieSuccess(
    movie: Imovie
  ): actions.GetMovieSuccessAction {
    return {
      type: actions.GET_MOVIE_SUCCESS,
      response: movie
    };
}

export function getMovieFailure(
    error: Error | string
  ): actions.GetMovieFailureAction {
    return {
      type: actions.GET_MOVIE_FAILURE,
      error
    };
}
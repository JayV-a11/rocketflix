import { Imovie } from "../types";

export const SET_MOVIE = "SET_MOVIE";

export interface SetMovieAction {
  type: typeof SET_MOVIE;
  response: Imovie;
}

export const GET_MOVIE = "GET_MOVIE";

export interface GetMovieAction {
  type: typeof GET_MOVIE;
  movieId: number;
}

export const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
export interface GetMovieRequestAction {
  type: typeof GET_MOVIE_REQUEST;
}

export const SET_MOVIE_ID_REQUEST = "SET_MOVIE_ID_REQUEST";
export interface SetMovieIdRequestAction {
  type: typeof SET_MOVIE_ID_REQUEST;
  payload: number
}

export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export interface GetMovieSuccessAction {
  type: typeof GET_MOVIE_SUCCESS;
  response: Imovie;
}

export const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";
export interface GetMovieFailureAction {
  type: typeof GET_MOVIE_FAILURE;
  error: Error | string;
}

export type MovieAction =
  | SetMovieAction
  | GetMovieAction
  | SetMovieIdRequestAction
  | GetMovieRequestAction
  | GetMovieSuccessAction
  | GetMovieFailureAction
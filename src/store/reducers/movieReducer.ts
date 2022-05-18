import * as actions  from "../action-types";
import { Imovie } from "../types";

const initialState = {
    id: 0,
    name: '',
    overview: '',
    movieId: 0
}

export default function reducer(state: Imovie = initialState, action: actions.MovieAction) {
    switch(action.type) {
        case actions.SET_MOVIE:
        case actions.GET_MOVIE_SUCCESS:
            return action.response;
        case actions.SET_MOVIE_ID_REQUEST:
            return state.movieId = action.payload;
        default:
            return state;
    }
}
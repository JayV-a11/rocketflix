import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import isLoadingReducer from "./isLoadingReducer";
import movieReducer from './movieReducer';

const reducers = combineReducers({
    movie: movieReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
});

export type AppState = ReturnType<typeof reducers>

export default reducers;

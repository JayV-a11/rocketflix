import axios from "axios";
import { Imovie } from "../store/types";

interface movieResponse {
    movie: Imovie;
}

export const API_KEY = 'api_key=5666b3f56e3bda606ca11fdc8336d961';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const language = 'language=pt-BR';

export async function fetchMovie(movieId: number): Promise<movieResponse> {
    return await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=5666b3f56e3bda606ca11fdc8336d961`);
}
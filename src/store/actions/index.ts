import { Imovie } from "../types";

export interface Action{
    type: string,
    payload?: Imovie
}
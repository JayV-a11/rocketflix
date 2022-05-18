import React, { FunctionComponent } from "react";
import { Imovie } from "../../store/types";
import { useSelector } from 'react-redux';


const MovieComponent: FunctionComponent = () => {
    const {name} = useSelector((state:Imovie) => {
        return state
    })

    const {movieId} = useSelector((state:Imovie) => {
        return state
    })

    console.log(movieId);
    
    return <div>{name}</div>;
};

export default MovieComponent;

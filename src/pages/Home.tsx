import React from 'react';
import MovieComponent from '../components/Movie/MovieComponent';
import SuffleButton from '../components/SuffleButton/SuffleButton';

export default function Home() {

    return(
        <div className='homePage'>
            <SuffleButton />
            <MovieComponent/>
        </div>
    );
}
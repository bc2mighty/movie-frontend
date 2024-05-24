import React from 'react';
import Movie from './Movie';

function MovieList({movies, movieConfig: {base_url}}) {
    return (
        <div className='grid grid-cols-3'>
            {movies.map((movie, id) => (
                <Movie base_url={base_url} key={id} movie={movie}/>
            ))}
        </div>
    );
}

export default MovieList;
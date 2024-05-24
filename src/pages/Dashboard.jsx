import React, { useEffect, useState } from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Main from '../components/layouts/Main';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import axios from 'axios';

function Dashboard(props) {
    const [movies, setMovies] = useState([]);
    const [movieConfig, setMovieConfig] = useState({})

    useEffect(() => {
        const configureMovie = async() => {
            try {
                const response = await axios.get(`http://localhost:3002/configuration`, {
                    headers: {
                    }
                })
                setMovieConfig(response?.data?.data?.images)
            } catch(error) {
                console.log(error);
            }
        }
        configureMovie()
    }, [setMovieConfig])
    
    return (
        <div className='grid grid-cols-5 gap-4'>
            <Sidebar/>
            <Main>
                <Search setMovies={setMovies}/>
                <MovieList movieConfig={movieConfig} movies={movies}/>
            </Main>
        </div>
    );
}

export default Dashboard;
import React, { useCallback, useState } from 'react';
import axios from 'axios';

function Search({setMovies}) {
    const [movieQuery, setMovieQuery] = useState('');

    const handleSearch = useCallback(async(e) => {
        const movies = async() => {
            try {
                const response = await axios
                    .get(`http://localhost:3002?query=${movieQuery}`)
                const {results} = response.data?.data
                if(results) setMovies(results)
            } catch(error) {
                console.log(error);
            }
        }
        await movies()
    }, [movieQuery])

    return (
        <div className='w-100 h-20'>
            <div className='grid grid-cols-5'>
                <div className="col-span-4">
                    <div className="mb-6">
                        <input value={movieQuery} onChange={(e) => setMovieQuery(e.target.value)} placeholder='Search for a movie' type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </div>
                <div className="col-span-1">
                    <button onClick={handleSearch} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
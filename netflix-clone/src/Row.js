import React, { useEffect, useState } from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl}) {
    const  [movies, setMovies] = useState([]);

    // Snippet of code which runs based on specific conditions
    useEffect(() => {
        // [], run only once when row loads
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row-poster'>
                {/* row-posters */}

                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

            {/* container > movie posters */}
        </div>
  )
};
  


export default Row;

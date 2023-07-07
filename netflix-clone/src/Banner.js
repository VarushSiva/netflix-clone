import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] =  useState([]);

    // Fetch 1 movie for Banner
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);


  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: 'center center',
        }}
    >
        <div className='banner-content'>
            {/* Use movie name as h1, optional chaining to find the variable for movie name */}
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

            {/* Play and My List Buttons */}
            <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
            </div>

            {/* Movie Description fetched from TMDB */}
            <h1 className="banner-description">{movie?.overview}</h1>
        </div>
    </header>
  )
}

export default Banner
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
    <header>
        {/* background img */}
        {/* title */}
        {/* div > Play + My List */}
        {/* description */}
    </header>
  )
}

export default Banner
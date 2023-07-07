import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // Snippet of code which runs based on specific conditions
    useEffect(() => {
        // [], run only once when row loads
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(null ,{ tmdbId: movie.id })
                   .then((url)=>{
                     const urlParams=new URLSearchParams(new URL(url).search);
                     setTrailerUrl(urlParams.get("v"));
                   })
                   .catch((error)=> console.log(error));
        }
    }

    // Row Posters > Large poster gets separate css
    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row-posters'>
                {movies.map(movie => (
                    <img 
                    key={movie.id} 
                    onClick={() => handleClick(movie)}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {/* Embed YouTube trailer Video */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}            
        </div>
  )
};
  


export default Row;

import React, { useEffect, useState } from 'react'
import axios from './axios';

function Row({title, fetchUrl}) {
    const  [movies, setMovies] = useState([]);

    // Snippet of code which runs based on specific conditions
    useEffect(() => {
        // [], run only once when row loads
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            console.log(requests);
            return requests;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/* container > movie posters */}
        </div>
  )
};
  


export default Row;

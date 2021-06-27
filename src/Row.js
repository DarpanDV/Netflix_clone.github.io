import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';

const base_url="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow,isLargeHead}) {
    const [movies,setmovies]=useState([]);
    useEffect(() => {
        async function fetchData()
        {
          const requestss=await axios.get(fetchUrl);
          console.log("row effect woorkng");
          setmovies(requestss.data.results)
          return requestss;      
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);
  return (
    <div className="row">
        <h1 className="row_heading">{title}</h1>
        <div className="row_posters">
        {movies.map(movies =>(
         
            <img
            key={movies.id}
             className={`row_poster ${isLargeRow&& 'row_posterback'}`} src={`${base_url}${isLargeRow? movies.poster_path:movies.backdrop_path}`} alt={movies.name}></img>
        ))}
        </div>
    </div>
  );
}

export default Row;

import React,{useEffect,useState} from 'react';
import axios from './axios';
import request from './request'
import './Banner.css'

function Banner() {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function fetchData()
        {
            const requestss=await axios.get(request.fetchNetflixOriginals);
            // console.log(request.fetchNetflixOriginals);
            setmovies(
                requestss.data.results
                [Math.floor(Math.random() * requestss.data.results.length-1)
                ]
                );
            return requestss;     
        }
        fetchData();
    }, []);
    console.log(movies);
    function truncate(str,n){
        return str?.length>n ?str.substr(0,n-1)+"...":str;
    }
    return (
        <header className="banner" 
        style={{
            backgroundSize:"cover",
            background:`url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
            backgroundPosition:"center center"
        }}
        >
       

        <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">
            {movies?.title||movies?.name||movies?.original_name}
        </h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
       
        <h1 className="banner_description">
           {truncate(movies?.overview,110)}
        </h1>
        <div className="banner--fadeBottom"/>
        </div>
      
        </header>
    );
}

export default Banner

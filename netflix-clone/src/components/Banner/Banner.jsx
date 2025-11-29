import React, { useState,useEffect } from 'react'
import axios from "../../Page/Utils/Axios";
import Requests from "../../Page/Utils/Requests";
import  "./Banner.css";




const Banner = () => {
    const [movie, setMovie] = useState(null);
useEffect(()=>{
    (async() =>{
        try{
            const request = await axios.get(Requests.fetchNetflixOriginals);

            console.log(request);
            setMovie(request.data.results
            [Math.floor(Math.random() * request.data.results.length)

            ]);
            

        }catch (error){
            console.log("erroe",error);
        }
    })()
},[]);


if (!movie) return null;


function truncate(str, n) {
  if (!str) return "";
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat:'no-repeat',
      }}
    >
      
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">{truncate(movie.overview,150)}</h1>
        </div>
        <div className="banner_fadebutton"></div>
      </div>
    </div>
  );
}

export default Banner;
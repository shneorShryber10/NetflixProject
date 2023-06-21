
import React,{useEffect,useState} from 'react';
import { Routes, Route, useParams,Link } from 'react-router-dom';



export default function MovieList({data,setData}) {
    
    /* let {category} = useParams();
 
    
     useEffect(() => {
         fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
         //https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1
           .then((response) => {
             return response.json();
           })
           .then((data) => { 
            setData(data) 
        });
    }, [category]);
     */
  
  return (
    
    <div className="container">

   
  {/* { data.results.map((p)=>{return <div><p>{p.original_title}</p></div>})  } */}

</div>
  )
}

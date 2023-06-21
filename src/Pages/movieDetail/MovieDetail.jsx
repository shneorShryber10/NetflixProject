import React,{useEffect,useState} from 'react';
import { Routes, Route, useParams,Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import "./movieDetail.css";

export default function MovieDetail({data,setData,singelyMovie,setSingelyMovie}) {

    let {category} = useParams();  

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
   

   let str = category.toString();

   if(str=="top_rated")
   {
    var newStr = str.replace("_", " ");    
   }
   else{
    newStr=category.toString();
   }

 return (
   
<div className='category'>

    <div className='nav-category'>
    { <h2><p>{newStr}</p></h2> }
    </div>

   <div className="card-container">
            {data.results.map((list)=>{return <Card list={list} singelyMovie={singelyMovie} setSingelyMovie={setSingelyMovie}/>})}  
    </div>

</div>
 )
}

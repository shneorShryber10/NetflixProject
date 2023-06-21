import React from 'react'
import { Link } from 'react-router-dom';
import SingelCard from '../SingelCard/SingelCard';
import "./Card.css";

export default function Card({list,singelyMovie,setSingelyMovie}) {


    console.log(list);
function change()
{
  setSingelyMovie(list);
}

  return (

    <div className='card'>

     <img src={`https://image.tmdb.org/t/p/original/${list.backdrop_path}`} alt=""/>
    <div className="text-block">
        <Link to={`${list.original_title}`} style={{paddingLeft: 13, textDecoration: 'none' , color:"white"}} onClick={change} > <h4>{list.original_title}</h4></Link>
        <p>{list.release_date}</p>
    </div>

            
    </div>
  )
}


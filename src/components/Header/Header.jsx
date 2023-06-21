import { Link } from 'react-router-dom'
import "./Header.css"
import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Switch,createBrowserRouter,RouterProvider,Routes,} from "react-router-dom";
import MovieDetail from '../../Pages/movieDetail/MovieDetail';

export default function Header({data,setData}) {

  return (
    
    <div className="nav-container">
    
        <ul className='nav-option'>
        <Link to={'/'} > <li><img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png`} width="80" height="40" alt="" /></li> </Link>
        <Link  to={"top_rated"} style={{paddingLeft: 13, textDecoration: 'none'}} ><li >top Reted</li> </Link>
        <Link to={"upcoming"} style={{paddingLeft: 13, textDecoration: 'none'}}> <li>Updcoming Movie</li> </Link>
        <Link to={"popular"} style={{paddingLeft: 13, textDecoration: 'none'}}> <li>Popular</li> </Link>
        </ul>
    </div>
  )
}

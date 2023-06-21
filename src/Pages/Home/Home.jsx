import React from 'react'
import {BrowserRouter, Route, Switch,createBrowserRouter,RouterProvider,Routes,Outlet} from "react-router-dom";
import Header from '../../components/Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import TestComponent from '../../components/testComponent/UncontrolledExample';
import UncontrolledExample from '../../components/testComponent/UncontrolledExample';

import MovieDetail from '../movieDetail/MovieDetail';


export default function Home({data,setData}) {
  return (
    <div>
        <UncontrolledExample/>
        
    </div>
    
  )
}



import './App.css';
import {BrowserRouter, Route, Switch,createBrowserRouter,RouterProvider,Routes,} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import MovieList from "./components/movieList/movieList"
import React, { useEffect, useState } from "react";
import Header from './components/Header/Header';
import MovieDetail from './Pages/movieDetail/MovieDetail.jsx';
import SingelCard from './components/SingelCard/SingelCard';

function App() {

  const [data, setData] = useState([]);
  const[singelyMovie,setSingelyMovie]= useState([]);
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          setData(data)
        
        
      });
  }, []);


  return (

   <div className='app'>

     <Header data={data} setData={setData}/>
   

    <Routes>
    <Route path='/' element={<Home data={data} setData={setData}/>} />
    <Route path='/:category' element={<MovieDetail data={data} setData={setData} singelyMovie={singelyMovie} setSingelyMovie={setSingelyMovie}/>} />
    <Route path='/:category/:original_title' element={<SingelCard singelyMovie={singelyMovie} setSingelyMovie={setSingelyMovie} />} />
    </Routes>
   </div>
   
  );
}

export default App;

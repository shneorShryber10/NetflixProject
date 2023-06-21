import React from 'react'
import "./SingelyCard.css"

export default function SingelCard({singelyMovie,setSingelyMovie,}) {
   
  return (

    <div className='SingelyCard'>

    <img src={`https://image.tmdb.org/t/p/original/${singelyMovie.backdrop_path}`} alt="" height={"500px"} width={"100%"}/>
    <div className="Singely-text-block">
         <h4>{singelyMovie.original_title}</h4>
        <p>{singelyMovie.release_date}</p>
    </div>
  
    </div>
  )
}

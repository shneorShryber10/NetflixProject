import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    const [slider, setSlider] = useState([]);
   
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1')
            .then((res) => res.json())
            .then((data) => setSlider(data.results))
    }, [])
    
const sliders = slider.map((data, index)=>{
    if(data.backdrop_path != null){
    return (
        <Carousel.Item key={index}>
                        <img 
                            className="d-block"
                            src= {`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                            alt="First slide"
                            style={{height: "527px", width:"100%" }}
                        />
                <Carousel.Caption >
                    <h1 style={{display:"flex", justifyContent: "left"}}>{data.title}</h1>
                <h3 style={{display:"flex", justifyContent: "left" }}>{data.release_date} {data.vote_average}<i className="fa-solid fa-star"></i></h3>
                <p style={{display:"flex", justifyContent: "left" }}>{data.overview}</p>
                </Carousel.Caption>
         </Carousel.Item>
    )
    }
})
    return (
        <>
        <Carousel slide={true} interval={1500}>
            { sliders}
           

        </Carousel>
           
            </>
    );
}

export default UncontrolledExample;
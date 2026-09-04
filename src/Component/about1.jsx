import React from 'react'
import './Home.css'
import frontimg3 from './image/frontimg3new.jpg';
import frontimg4 from './image/front img4.webp';
import frontimh1 from './image/frontimh1.webp';


export default function Home() {
  return (
    <>
    
<div className="home-carousel">
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={frontimh1} className="d-block w-100" alt="tribal fashion" />
      </div>

      <div className="carousel-item">
        <img src={frontimg4} className="d-block w-100" alt="fashion accessories" />
      </div>

      <div className="carousel-item">
        <img src={frontimg3} className="d-block w-100" alt="front img" />
      </div>
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
</div>

{/*!--rgb(41, 24, 24)--!>*/}











    </>
  )
}

import React from 'react'
import './About.css'
import bastarart2 from './image/bastarart2.webp';
import bastarart4 from './image/bastarart4.webp';
import bastarart5 from './image/bastar art5.webp';
import bast3 from './image/bast3.webp';
import img10 from './image/img10.webp';
// import "@fortawesome/fontawesome-free/css/all.min.css";

import bastarart51 from './image/bastarart51.webp';


export default function About() {
  return (
    <>
     <div> 
      
    <div className="container">
        <div className="box1" >
          <img src={bastarart2} alt="" style={{ width: "100%", height: "100%", borderRadius: "20px", border: "1px solid rgb(41, 24, 24)" }} />
        </div>
        <div className="box2">
          <img src={bastarart4} alt="" style={{ width: "100%", height: "100%", borderRadius: "20px", border: "1px solid rgb(41, 24, 24)" }} />
        </div>
        <div className="box3">
          <img src={bastarart51} alt="" style={{ width: "100%", height: "100%", borderRadius: "20px", border: "1px solid rgb(41, 24, 24)" }} />

        </div>
        <div className="box4">
          <img src={bastarart5} alt="" style={{ width: "100%", height: "100%", borderRadius: "20px", BackgroundSize: "auto", border: "1px solid rgb(41, 24, 24)" }} />
        </div>
      </div>
      <div className="title">
        <div className="content">Forgotten Treasure of the World</div>
        {/*<p>Turn Tradition into Fashion</p>*/}
        <p>Be Classy, Be Cultural, Be Unique</p>
        <h6 className='para'>"In a world of fast trends, choose the timeless beauty of traditional art.
          Every handmade piece carries a story, a heritage, and a soul.
          Wearing and using these crafts is not just style, it’s identity.
          Stand out by embracing culture in a modern way.”</h6>
           <br />
        <button className='title-btn'>know more</button>

        
      </div>

    </div>




<section className="features">
  <div className="feature">
    <i className="fa-solid fa-truck"></i>
    <div>
      <h3>FREE SHIPPING</h3>
      <p>On orders over $75</p>
    </div>
  </div>

  <div className="feature">
    <i className="fa-solid fa-rotate"></i>
    <div>
      <h3>EASY RETURNS</h3>
      <p>30 days return policy</p>
    </div>
  </div>

  <div className="feature">
    <i className="fa-solid fa-shield-halved"></i>
    <div>
      <h3>SECURE PAYMENT</h3>
      <p>100% secure checkout</p>
    </div>
  </div>

  <div className="feature">
    <i className="fa-solid fa-headphones"></i>
    <div>
      <h3>CUSTOMER SUPPORT</h3>
      <p>We're here to help</p>
    </div>
  </div>
</section>

{/*
    < section >

    <div className="section1">
     <div className="card1">
      <img  id='img' src={img10} alt="" />
     </div>
     <div className="card2">
      <img id='img' src={img10} alt="" />
     </div>
     <div className="card3">
      <img id='img' src={img10} alt="" />
     </div>
     </div>
    </section>
 
    < section className='section2'>
     <div className="card1">
      <img src={img10} alt="" />
     </div>
     <div className="card2">
      <Reactimg src={img10} alt="" />
     </div>
     <div className="card3">
      <img src={img10} alt="" />
     </div>
    </section>


     < section className='section3'>
     <div className="card1">
      <img src={img10} alt="" />
     </div>
     <div className="card2">
      <Reactimg src={img10} alt="" />
     </div>
     <div className="card3">
      <img src={img10} alt="" />
     </div>
    </section>  */}

    

    </>
  )
}

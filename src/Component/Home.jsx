import React from 'react'
import './Home.css'
import bastarart2 from './image/bastarart2.webp';
import bastarart4 from './image/bastarart4.webp';
import bastarart5 from './image/bastar art5.webp';
import bamboo_lamp from './image/bamboo_lamp.jpg';
import img2 from './image/img2.webp';
import img11 from './image/img11.webp';
import img1 from './image/img1.webp';
import img12 from './image/img12.jpg';
import img14 from './image/img14.webp';
import img15 from './image/img15.jpg';
import img16 from './image/img16.webp';
import img9 from './image/img9.webp';
import img19 from './image/img19.webp'
import bastarart51 from './image/bastarart51.webp';
import bastar from './image/bastar art1 gond art.webp';
import cshirt from './image/cs1.jpg';
import f1 from './image/f1.webp'
import f2 from './image/f2.jpg'
import fs1 from './image/fs1.jpg'
import bag from './image/bag.jpg'
import f8 from './image/f8.jpg'
import f6 from './image/f6.jpg'
import f0 from './image/f0.png'
import img230 from './image/img230.jpg'
import img27 from './image/img27.jpg'
import img31 from './image/img31.jpg'
import img26 from './image/img26.jpg'
import img28 from './image/img28.png'
import img32 from './image/img32.jpg'
import img22 from './image/img22.jpg'
import jwe from './image/jwe.jpg'


import rakhi from './image/rakhi.jpg';

import rajsthani from './image/rajsthani.jpg';

import gond_p from './image/gond_painting.webp';
import deer from './image/Deer_candle_stand.webp';

// import "@fortawesome/fontawesome-free/css/all.min.css";




export default function Home() {
  return (
    <>
     <section className='hero'> 
      
    <div className="hero-images">
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
        <p>Be classy, Be Cultural, Be Unique</p>
        <h6 className='para'>"In a world of fast trends, choose the timeless beauty of traditional art.
          Every handmade piece carries a story, a heritage, and a soul.
          Wearing and using these crafts is not just style, it’s identity.
          Stand out by embracing culture in a modern way.”</h6>
           <br />
        <button className='title-btn'>know more</button>

        
      </div>

    </section>




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










{/*-------------------------- section one ----------------------*/}
<div className="section-heading">
  <h2>Home Decor Collection</h2>
</div>
<div className="products-con">
  {/* <!-- Product Box 1 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={bamboo_lamp} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Linn Midi Dress</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img2} alt="Casual Blazer"/>
    </div>
    <div class="product-information">
      <h3 class="product-title"></h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img15} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Jaipuri Wall Art</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img12} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Deer Wall Decor</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>


{/*-------------------------- section two ----------------------*/}
<div className="section-heading">
  <h2>Shop by Craft</h2>
</div>
<div className="products-con">
  {/* <!-- Product Box 1 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img14} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Desk Dtems</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

{/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={deer} alt="Casual Blazer"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Candle Stand</h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={bastar} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Bastar art</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={rajsthani} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Rajisthani Idol</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>
    
    
    {/*-------------------------- section three ----------------------*/}
<div className="section-heading">
  <h2>Kitchen & Dining</h2>
</div>
<div className="products-con">
  {/* <!-- Product Box 1 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img16} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Tortoise Saunf Supari set</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

{/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img9} alt="Casual Blazer"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Fruit Bowl</h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img19} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Tissu Stand</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={bastarart51} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Tea Stand</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>
    
    {/*-------------------------- section four ----------------------*/}
<div className="section-heading">
  <h2>Fashion Accessories</h2>
</div>
<div className="products-con">
  {/* <!-- Product Box 1 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={fs1} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Choker</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

{/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={f2} alt="Casual Blazer"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Kauri Choker Set</h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={f1} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Bastar Jwellery</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={cshirt} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Cotton Block Printed Shirt</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>
    
    
{/*-------------------------- section five ----------------------*/}
<div className="section-heading">
  <h2>Bag collections</h2>
</div>
<div className="products-con">
  {/* <!-- Product Box 1 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={bag} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">stylish bag</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={f0} alt="bag"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">gujrati bag</h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={f8} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">joot bag</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={f6} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">bag</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>

 {/*-------------------------- section six----------------------*/}
<div className="section-heading">
  <h2>Shop by category</h2>
</div>
<div className="products-con">
  {/* <!-- Product Box 1 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={jwe} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Gujrati Neckless</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img22} alt="bag"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Wall things</h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img27} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Idols</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img31} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Hair Belt</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>


<div className="products-con">
  {/* <!-- Product Box 5 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img28} alt="Linn Midi Dress"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Cort Set</h3>
      <p class="product-prize">$89.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 6 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img26} alt="bag"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">show piece</h3>
      <p class="product-prize">$120.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 7 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img32} alt="Ribbed Knit Top"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">neck piece</h3>
      <p class="product-prize">$45.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 8 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img230} alt="Denim Jacket"/>
    </div>
    <div class="product-information">
      <h3 class="product-title">Hair Accesseries</h3>
      <p class="product-prize">$98.00</p>
      <button class="shop-btn">Shop Now</button>
    </div>
  </div>
</div>
    
    </>
  )
}




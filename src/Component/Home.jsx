

import React from 'react'
// import { FaHeart } from "react-icons/fa";
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
import rajsthani from './image/rajsthani.jpg';
import deer from './image/Deer_candle_stand.webp';
import { Link, useNavigate } from 'react-router-dom';









export default function Home() {

   const navigate = useNavigate();

  const handleShopNow = (product) => {

    // ================= WISHLIST =================

// const [wishlist, setWishlist] = useState(() => {
//   try {
//     return JSON.parse(localStorage.getItem("wishlist")) || [];
//   } catch (error) {
//     return [];
//   }
// });

// const handleWishlist = (product) => {

//   const alreadyExists = wishlist.some(
//     (item) => item.id === product.id
//   );

//   let updatedWishlist;

//   if (alreadyExists) {

//     // Remove from wishlist
//     updatedWishlist = wishlist.filter(
//       (item) => item.id !== product.id
//     );

//   } else {

//     // Add to wishlist
//     updatedWishlist = [...wishlist, product];

//   }

//   setWishlist(updatedWishlist);

//   localStorage.setItem(
//     "wishlist",
//     JSON.stringify(updatedWishlist)
//   );
// };

    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    navigate("/product");
  };
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
      <img src={bamboo_lamp} alt="bamboo lamp"/>
      {/* <button
    className="wishlist-btn"
    onClick={() =>
      handleWishlist({
        id: "home-bamboo-lamp",
        name: "Bamboo Lamp",
        price: 400,
        image: bamboo_lamp,
        category: "Home Decor",
        description: "Beautiful handmade traditional home decor product."
      })
    }
  >
    <FaHeart
      className={
        wishlist.some(
          (item) => item.id === "home-bamboo-lamp"
        )
          ? "heart-filled"
          : "heart-empty"
      }
    />
  </button> */}

    </div>
    <div className="product-information">
      <h3 className="product-title">Bamboo Lamp</h3>
      <p className="product-prize">400 Rs.</p>
      <button className="shop-btn"  onClick={() =>
    handleShopNow({
      name: "bamboo mlamp",
      price: 400,
      image: bamboo_lamp,
      category: "Home Decor",
      description: "Beautiful handmade traditional home decor product."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img2} alt="wall hanging"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Wall Hanging</h3>
      <p className="product-prize">210 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Wall Hanging",
      price: 120,
      image: img2,
      category: "Home Decor",
      description: "Beautiful traditional handmade wall decoration."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img15} alt="jaipuri wall art"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Jaipuri Wall Art</h3>
      <p className="product-prize">199 Rs.</p>
      <button className="shop-btn"  onClick={() =>
    handleShopNow({
      name: "Jaipuri Wall Art",
      price: 199,
      image: img15,
      category: "Home Decor",
      description: "Traditional Jaipuri handmade wall art."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img12} alt="Deer Wall Decor"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Deer Wall Decor</h3>
      <p className="product-prize">899 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Deer Wall Decor",
      price: 899,
      image: img12,
      category: "Home Decor",
      description: "Elegant handmade deer wall decoration."
    })
  }>Shop Now</button>
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
      <img src={img14} alt="Desk Items"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Desk Items</h3>
      <p className="product-prize">460 Rs.</p>
      <button className="shop-btn"  onClick={() =>
    handleShopNow({
      name: "Desk Items",
      price:460 ,
      image: img14,
      category: "Craft",
      description: "Beautiful handmade desk decoration."
    })
  }>Shop Now</button>
    </div>
  </div>

{/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={deer} alt="Candle Stand"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Candle Stand</h3>
      <p className="product-prize">120.00 Rs.</p>
      <button className="shop-btn" 
  onClick={() =>
    handleShopNow({
      name: "Candle Stand",
      price: 120,
      image: deer,
      category: "Craft",
      description: "Handcrafted decorative candle stand."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={bastar} alt="Bastar art"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Bastar art</h3>
      <p className="product-prize">920.00 Rs.</p>
      <button className="shop-btn"onClick={() =>
    handleShopNow({
      name: "Bastar Art",
      price: 920,
      image: bastar,
      category: "Craft",
      description: "Authentic traditional Bastar artwork."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={rajsthani} alt="Rajisthani Idol"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Rajisthani Idol</h3>
      <p className="product-prize">98 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Rajasthani Idol",
      price: 98,
      image: rajsthani,
      category: "Craft",
      description: "Traditional handcrafted Rajasthani idol."
    })
  }>Shop Now</button>
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
      <img src={img16} alt="Tortoise Saunf Supari set"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Tortoise Saunf Supari set</h3>
      <p className="product-prize">640.00 Rs</p>
      <button className="shop-btn"  onClick={() =>
    handleShopNow({
      name: "Tortoise Saunf Supari set",
      price: 640,
      image: "Tortoise Saunf Supari set",
      category: "Kitchen & Dining",
      description: "Beautiful handmade traditional Tortoise Saunf Supari set."
    })
  }>Shop Now</button>
    </div>
  </div>

{/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img9} alt="Fruit Bowl"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Fruit Bowl</h3>
      <p className="product-prize">690 Rs.</p>
      <button className="shop-btn"  onClick={() =>
    handleShopNow({
      name: "Fruit Bowl",
      price: 690,
      image: "Fruit Bowl",
      category: "Kitchen & Dining",
      description: "Beautiful handmade traditional Fruit Bowl."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={img19} alt="Tissu Stand"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Tissu Stand</h3>
      <p className="product-prize">99 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Tissu Stand",
      price: 99,
      image: "Tissu Stand",
      category: "Kitchen & Dining",
      description: "Beautiful handmade traditional Tissu Stand."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={bastarart51} alt="Tea Stand"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Tea Stand</h3>
      <p className="product-prize">260 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Tea Stand",
      price: 260,
      image: "Tea Stand",
      category: "Kitchen & Dining",
      description: "Beautiful handmade Tea Stand."
    })
  }>Shop Now</button>
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
      <img src={fs1} alt="Choker"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Choker</h3>
      <p className="product-prize">288 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Choker",
      price: 288,
      image: "Choker",
      category: "Fashion Accessories",
      description: "Beautiful handmade Choker."
    })
  }>Shop Now</button>
    </div>
  </div>

{/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={f2} alt="Kauri Choker Set"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Kauri Choker Set</h3>
      <p className="product-prize">250 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Kauri Choker Set",
      price: 250,
      image: "Kauri Choker Set",
      category: "Fashion Accessories",
      description: "Beautiful handmade Kauri Choker Set."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={f1} alt="Bastar Jwellery"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Bastar Jwellery</h3>
      <p className="product-prize">401 Rs</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Bastar Jwellery",
      price: 401,
      image: "Bastar Jwellery",
      category: "Fashion Accessories",
      description: "Beautiful handmade Bastar Jwellery."
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img src={cshirt} alt="Cotton Block Printed Shirt"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Cotton Block Printed Shirt</h3>
      <p className="product-prize">399 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Cotton Block Printed Shirt",
      price: 399,
      image: "Cotton Block Printed Shirt",
      category: "Fashion Accessories",
      description: "Beautiful handmade Cotton Block Printed Shirt."
    })
  }>Shop Now</button>
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
      <img className="bag" src={bag} alt="stylish bag"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">stylish bag</h3>
      <p className="product-prize">658 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "stylish bag",
      price: 658,
      image: "stylish bag",
      category: "Bag collections",
      description: "Beautiful handmade stylish bag"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={f0} alt="bag"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">gujrati bag</h3>
      <p className="product-prize">345 Rs.</p>
      <button className="shop-btn"  onClick={() =>
    handleShopNow({
      name: "gujrati bag",
      price: 345,
      image: "gujrati bag",
      category: "Bag collections",
      description: "Beautiful handmade gujrati bag"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={f8} alt="joot bag"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">joot bag</h3>
      <p className="product-prize">599 Rs.</p>
      <button className="shop-btn"onClick={() =>
    handleShopNow({
      name: "joot bag",
      price: 599,
      image: "joot bag",
      category: "Bag collections",
      description: "Beautiful handmade joot bag"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={f6} alt="bag"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">bag</h3>
      <p className="product-prize">640 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "joot bag",
      price: 599,
      image: "joot bag",
      category: "Bag collections",
      description: "Beautiful handmade joot bag"
    })
  }>Shop Now</button>
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
      <img className="bag" src={jwe} alt="Gujrati Neckless"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Gujrati Neckless</h3>
      <p className="product-prize">210 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Gujrati Neckless",
      price: 210,
      image: "Gujrati Neckless",
      category: "Shop by category",
      description: "Beautiful handmade Gujrati Neckless"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 2 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img22} alt="Wall things"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Wall things</h3>
      <p className="product-prize">370 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Wall things",
      price: 210,
      image: "Wall things",
      category: "Shop by category",
      description: "Beautiful handmade Wall things"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 3 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img27} alt="Idols"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Idols</h3>
      <p className="product-prize">400 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Idols",
      price: 400,
      image: "Idols",
      category: "Shop by category",
      description: "Beautiful handmade Idols"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 4 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img31} alt="Hair Belt"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Hair Belt</h3>
      <p className="product-prize">150 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Hair Belt",
      price: 150,
      image: "Hair Belt",
      category: "Shop by category",
      description: "Beautiful handmade Hair Belt"
    })
  }>Shop Now</button>
    </div>
  </div>
</div>


<div className="products-con">
  {/* <!-- Product Box 5 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img28} alt="Cort Set"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Cort Set</h3>
      <p className="product-prize">499 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Cort Set",
      price: 499,
      image: "Cort Set",
      category: "Shop by category",
      description: "Beautiful handmade Cort Set"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 6 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img26} alt="show piece"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">show piece</h3>
      <p className="product-prize">369 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "show piece",
      price: 369,
      image: "show piece",
      category: "Shop by category",
      description: "Beautiful handmade show piece"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 7 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img32} alt="neck piece"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">neck piece</h3>
      <p className="product-prize">299 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "neck piece",
      price: 299,
      image: "neck piece",
      category: "Shop by category",
      description: "Beautiful handmade neck piece"
    })
  }>Shop Now</button>
    </div>
  </div>

  {/* <!-- Product Box 8 --> */}
  <div className="product-card">
    <div className="product-image">
      <img className="bag" src={img230} alt="Hair Accesseries"/>
    </div>
    <div className="product-information">
      <h3 className="product-title">Hair Accesseries</h3>
      <p className="product-prize">130 Rs.</p>
      <button className="shop-btn" onClick={() =>
    handleShopNow({
      name: "Hair Accesseries",
      price: 130,
      image: "Hair Accesseries",
      category: "Shop by category",
      description: "Beautiful handmade Hair Accesseries"
    })
  }>Shop Now</button>
    </div>
  </div>
</div>
    
    </>
  )
}





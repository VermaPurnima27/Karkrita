
import React from 'react'
import './Home.css'
import bamboo_lamp from './image/bamboo_lamp.jpg';
import img2 from './image/img2.webp';
import img12 from './image/img12.jpg';
import img15 from './image/img15.jpg';



function Category() {
  return (
    <div className="category-page">

      {/*-------------------------- section one ----------------------*/}

      <div className="section-heading">
        <h2>Home Decor Collection</h2>
      </div>

      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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

      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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
        <h2>Jewellery Collection</h2>
      </div>
      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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

      <div className="products-con">
        {/* yahan 4 jewellery products */}
      </div>
      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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


      {/*-------------------------- section three ----------------------*/}

      <div className="section-heading">
        <h2>Dhokra Collection</h2>
      </div>

      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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

      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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

      <div className="section-heading">
        <h2>Dhokra Collection</h2>
      </div>

      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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

      <div className="products-con">
        {/* <!-- Product Box 1 --> */}
        <div className="product-card">
          <div className="product-image">
            <img src={bamboo_lamp} alt="bamboo lamp"/>
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
    </div>

    
          


  );
}

export default Category;
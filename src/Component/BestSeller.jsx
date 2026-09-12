import React from "react";
import "./BestSeller.css";

// Images
import bamboo_lamp from "./image/bamboo_lamp.jpg";
import img2 from "./image/img2.webp";
import img15 from "./image/img15.jpg";
import img12 from "./image/img12.jpg";


function BestSeller({ handleShopNow }) {

  return (
    <div className="best-seller-page">

      {/* ===================== PAGE HEADING ===================== */}

      <div className="best-seller-heading">
        <h1>Best Sellers</h1>
        <p>
          Loved by our customers, crafted with tradition.
        </p>
      </div>


      {/* =========================================================
                         SECTION ONE
      ========================================================= */}

      <section className="best-section">

        <div className="section-heading">
          <h2>Most Loved Home Decor</h2>
        </div>


        <div className="products-con">


          {/* Product 1 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={bamboo_lamp}
                alt="Bamboo Lamp"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Bamboo Lamp
              </h3>

              <p className="product-prize">
                400 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Bamboo Lamp",
                    price: 400,
                    image: bamboo_lamp,
                    category: "Home Decor",
                    description:
                      "Beautiful handmade traditional home decor product."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 2 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img2}
                alt="Wall Hanging"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Wall Hanging
              </h3>

              <p className="product-prize">
                210 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Wall Hanging",
                    price: 210,
                    image: img2,
                    category: "Home Decor",
                    description:
                      "Beautiful traditional handmade wall decoration."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 3 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img15}
                alt="Jaipuri Wall Art"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Jaipuri Wall Art
              </h3>

              <p className="product-prize">
                199 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Jaipuri Wall Art",
                    price: 199,
                    image: img15,
                    category: "Home Decor",
                    description:
                      "Traditional Jaipuri handmade wall art."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 4 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img12}
                alt="Deer Wall Decor"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Deer Wall Decor
              </h3>

              <p className="product-prize">
                899 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Deer Wall Decor",
                    price: 899,
                    image: img12,
                    category: "Home Decor",
                    description:
                      "Elegant handmade deer wall decoration."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* =========================================================
                         SECTION TWO
      ========================================================= */}

      <section className="best-section">

        <div className="section-heading">
          <h2>Trending Handmade Collection</h2>
        </div>


        <div className="products-con">


          {/* Product 1 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img12}
                alt="Traditional Craft"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Traditional Craft
              </h3>

              <p className="product-prize">
                799 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Traditional Craft",
                    price: 799,
                    image: img12,
                    category: "Handicraft",
                    description:
                      "Beautiful traditional handmade craft."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 2 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img15}
                alt="Handmade Art"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Handmade Art
              </h3>

              <p className="product-prize">
                599 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Handmade Art",
                    price: 599,
                    image: img15,
                    category: "Handicraft",
                    description:
                      "Unique handmade traditional artwork."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 3 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={bamboo_lamp}
                alt="Decorative Lamp"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Decorative Lamp
              </h3>

              <p className="product-prize">
                699 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Decorative Lamp",
                    price: 699,
                    image: bamboo_lamp,
                    category: "Home Decor",
                    description:
                      "Elegant handmade decorative lamp."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 4 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img2}
                alt="Handmade Decoration"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Handmade Decoration
              </h3>

              <p className="product-prize">
                449 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Handmade Decoration",
                    price: 449,
                    image: img2,
                    category: "Home Decor",
                    description:
                      "Beautiful handmade decorative product."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* =========================================================
                         SECTION THREE
      ========================================================= */}

      <section className="best-section">

        <div className="section-heading">
          <h2>Customer Favourite</h2>
        </div>


        <div className="products-con">


          {/* Product 1 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img15}
                alt="Traditional Wall Art"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Traditional Wall Art
              </h3>

              <p className="product-prize">
                499 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Traditional Wall Art",
                    price: 499,
                    image: img15,
                    category: "Wall Art",
                    description:
                      "Beautiful traditional handmade wall art."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 2 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img12}
                alt="Brass Decor"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Brass Decor
              </h3>

              <p className="product-prize">
                899 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Brass Decor",
                    price: 899,
                    image: img12,
                    category: "Decor",
                    description:
                      "Elegant traditional brass decoration."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 3 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={bamboo_lamp}
                alt="Bamboo Decoration"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Bamboo Decoration
              </h3>

              <p className="product-prize">
                350 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Bamboo Decoration",
                    price: 350,
                    image: bamboo_lamp,
                    category: "Home Decor",
                    description:
                      "Handcrafted bamboo home decoration."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>


          {/* Product 4 */}

          <div className="product-card">

            <div className="product-image">
              <img
                src={img2}
                alt="Handmade Hanging"
              />
            </div>

            <div className="product-information">

              <h3 className="product-title">
                Handmade Hanging
              </h3>

              <p className="product-prize">
                299 Rs.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  handleShopNow({
                    name: "Handmade Hanging",
                    price: 299,
                    image: img2,
                    category: "Home Decor",
                    description:
                      "Beautiful handmade hanging decoration."
                  })
                }
              >
                Shop Now
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default BestSeller;
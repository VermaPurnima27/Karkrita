import React from "react";
import "./Orders.css";

import product1 from "./image/bamboo_lamp.jpg";
import product2 from "./image/img15.jpg";
import product3 from "./image/img14.webp";

export default function Orders() {

  const orders = [
    {
      id: "KRK-2026-001",
      date: "August 28, 2026",
      status: "Delivered",
      delivery: "Delivered on August 31",
      image: product1,
      name: "Handmade Bamboo Lamp",
      price: "$89.00",
      quantity: 1
    },
    {
      id: "KRK-2026-002",
      date: "August 20, 2026",
      status: "On the way",
      delivery: "Arriving September 4",
      image: product2,
      name: "Traditional Jaipuri Wall Art",
      price: "$45.00",
      quantity: 1
    },
    {
      id: "KRK-2026-003",
      date: "August 15, 2026",
      status: "Delivered",
      delivery: "Delivered on August 19",
      image: product3,
      name: "Handcrafted Deer Decor",
      price: "$98.00",
      quantity: 1
    }
  ];

 return (
    <div className="orders-page">

     {/* Header */}
     {/* <div className="orders-header">

      <h1>Your Orders</h1> 

        <div className="order-search">
          <input
            type="text"
            placeholder="Search all orders"
          />
          <button>Search Orders</button>
        </div>

     </div>  */}


      {/* Navigation */}
      <div className="orders-nav">

        <span className="active">
          Orders
        </span>

        <span>
          Buy Again
        </span>

        <span>
          Not Yet Shipped
        </span>

        <span>
          Cancelled Orders
        </span>

      </div>


      {/* Orders */}
      <div className="orders-container">

        {/* <h2>
          Your Orders
        </h2> */}

        <p className="order-count">
          {orders.length} orders
        </p>


        {orders.map((order) => (

          <div className="order-card" key={order.id}>

            {/* Order top */}
            <div className="order-top">

              <div>
                <span>ORDER PLACED</span>
                <strong>{order.date}</strong>
              </div>

              <div>
                <span>TOTAL</span>
                <strong>{order.price}</strong>
              </div>

              <div>
                <span>ORDER #</span>
                <strong>{order.id}</strong>
              </div>

              <div className="order-links">
                <button>
                  View order details
                </button>

                <button>
                  Invoice
                </button>
              </div>

            </div>


            {/* Order body */}
            <div className="order-body">

              <div className="delivery-info">

                <h3>
                  {order.status}
                </h3>

                <p>
                  {order.delivery}
                </p>

              </div>


              <div className="product-row">

                <img
                  src={order.image}
                  alt={order.name}
                />

                <div className="product-details">

                  <h3>
                    {order.name}
                  </h3>

                  <p>
                    Handmade traditional Indian craft
                  </p>

                  <p>
                    Quantity: {order.quantity}
                  </p>

                  <strong>
                    {order.price}
                  </strong>

                </div>


                <div className="order-buttons">

                  <button className="track-btn">
                    Track Package
                  </button>

                  <button>
                    View Product
                  </button>

                  <button>
                    Return / Replace
                  </button>

                  <button>
                    Write a Review
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

     </div>
  );
}
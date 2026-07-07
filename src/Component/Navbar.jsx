import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import desilogo from "../Component/image/desilogo.png";

export default function Navbar() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(''); // keep selected category

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);
    return () => document.removeEventListener('mousedown', handleClickOutSide);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // FIX: correct way to read value from a native <select>
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    // If you want selecting a category to also fill the search box:
    setSearch(value);
  };

  // Prevent undefined function error when clicking the search button/icon
  const handleOnClick = () => {
    // put your search logic here, e.g., navigate or filter
    // console.log({ category, search });
  };

  return (
    <>
      <nav className="navbar">
        <img src={desilogo} alt="logo" className="nav-logo" />

        <div className="navAdd">
          <div className="nav-address">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="add-second">India</span>
            </div>
          </div>
        </div>

        <div className="nav-search">
          <select className="Category-select" onChange={handleCategoryChange} value={category}>
            <option value="" disabled>Select category</option>
            <optgroup label="office Essentials">
              <option value="Desk Accessories">Desk Accessories</option>
              <option value="Bookmarks & Bookends">Bookmarks & Bookends</option>
            </optgroup>
            <optgroup label="kitchen & Dining">
              <option value="Tableware">Tableware</option>
              <option value="Serving Platters">Serving Platters</option>
            </optgroup>
            <optgroup label="Eco Friendly items">
              <option value="Bamboo items">Bamboo items</option>
              <option value="Shishal Items">Shishal Items</option>
            </optgroup>
            <optgroup label='Home Decore'>
              <option value="Wall Art & Mirrors">Wall Art & Mirrors</option>
              <option value="Candle & Candle holders">Candle & Candle holders</option>
              <option value="Lamps">Lamps</option>
              <option value="Hooks & Hanger">Hooks & Hanger</option>
              <option value="Decoratives showpices">Decoratives showpices</option>
              <option value="Knobs and Door Handles">Knobs and Door Handles</option>
              <option value="Name plates">Name plates</option>
            </optgroup>
            <optgroup label='Fashion Accessories'>
              <option value="Neck-pieces">Neck-pieces</option>
              <option value="Earrings">Earrings</option>
              <option value="Buttons & Brooches">Buttons & Brooches</option>
            </optgroup>

          </select>

          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={handleSearch}
          />

          <button className="search-btn" onClick={handleOnClick}>
            <div className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </button>
        </div>

        {/* Account */}
        <div className="nav-right">
          <div className="innerAccount" onClick={toggleDropdown} ref={dropdownRef}>
            <p>please,Login</p>
            <span>Account & List</span>
          </div>

          {open && (
            <div className="dropdown">
              <div className="top">
                <button className="signin-btn">sign-in</button>
                <p>
                  New Customer? <a href="#">start here</a>
                </p>
              </div>
              <div className="dropdown-content">
                <div>
                  <h4 className="heading1">your Lists</h4>
                  <p>Create a Wish List</p>
                  <p></p>
                </div>
                <div>
                  <h4 className="heading2">Your Account</h4>
                  <p>Your Account</p>
                  <p>Your Orders</p>
                  <p>Your Wish list</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="nav-orders">
          <p>Return and</p>
          <span>Order</span>
        </div>

        <div className="cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">Cart</span>
        </div>
      </nav>
    </>
  );
}

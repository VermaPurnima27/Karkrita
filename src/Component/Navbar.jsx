import React, { useEffect, useState ,useRef} from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import desilogo from "../component/image/desilogo.png"



export default function Navbar() {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All");

  const[open ,setOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown=()=>{
    setOpen(!open);
  }

  useEffect(()=>{
    const handleClickOutSide=(e)=>{
 if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
  setOpen(false);
 }
    };

    document.addEventListener('mousedown', handleClickOutSide);
    return()=>document.removeEventListener("mousedown",handleClickOutSide);
  },[]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleOnClick = () => {
    console.log("button was clicked");
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }
  return (
    <>
      <nav className="navbar">

        <img src={desilogo} alt="logo" className='nav-logo' />
        <div className='navAdd'>
          <div className="nav-address">
            <p className='add-first'>Deliver to</p>
            <div className="add-icon">
              <FontAwesomeIcon icon={faLocationDot} />

              <span className='add-second'>India</span>
            </div>
          </div>
        </div>

        <div className='nav-search'>

          <select className='category' placeholder='All' name="category" value={category} onChange={handleCategory}>

            <option >All</option>
            <option >Electronics and related products</option>
            <option >Fashion</option>
            <option >Book</option>

          </select>

          <input type="text" placeholder='Search products' value={search} onChange={handleSearch} />

          <button className="search-btn" onClick={handleOnClick}>
            <div className="search-icon" onClick={handleOnClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </button>
        </div>

        {/*Account */}
        <div className="nav-right">

          <div className="innerAccount"  onClick={toggleDropdown} ref={dropdownRef}>
            <p>Hello,Sign </p>
            <span>Account & List</span>
          </div>

          {open && (
            <div className="dropdown">
              <div className="top">
                <button className="signin-btn">sign-in</button>
                <p>New Customer? <a href="#">start here</a> </p>
              </div>
              <div className="dropdown-content">
                <div>
                  <h4 className='heading1'>your Lists</h4>
                  <p>Create a Wish List</p>
                  <p></p>
                </div>
                <div>
                  <h4 className="heading2">Your Account</h4>
                  <p> Your Account</p>
                  <p>Your Orders</p>
                  <p> Your Wish list</p>
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
          <span className='cart-count'>Cart</span>
        </div>
      </nav>
    </>
  )
}

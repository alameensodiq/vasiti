import React from 'react';
import './styling/Navbar.css'


function NavBar() {
  return (
      <div className='over'>
          <div>
              {/* <img src={} /> */}
          </div>
          <div className='son'>
            <button className='navs'><span>ABOUT US</span></button>
            <button className='navs'><span>STORIES</span></button>
            <button className='navs'><span>CONTACT</span></button>
            <button className='navs'><span>LOG IN</span></button>
            <button className='navs'><span>SIGN UP</span></button>
          </div>
      </div>
  )
}

export default NavBar
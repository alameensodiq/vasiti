import React from 'react'
import './styling/First.css'
import sam from './images/Testimonial image 1.png'

function First() {
  return (
      <div className='men'>
          <div className='mainamaze'>
              <div className='amaze'>
           <b><h2>Amazing<br/>
                  Experience From Our<br/>
                  Wonderful Customers</h2></b> 
              </div>
              <div className='boll'>
                  <p>Here is what customers and vendor are saying about<br/>
                  us,you can share your stories with us too</p>
              </div>
          </div>
          <div className='circle'>
            
          </div>
          <div className='don'>
             <img src={sam} alt='vasiti' width='536px' height='568px'/>
           </div>
      </div>
  )
}

export default First
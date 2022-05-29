import React from 'react';
import './styling/Second.css'
import beauty from './images/black-beautiful-ladies-smiling 1.png'

function Second() {
  return (
    <div className='wow'>
        <div className='real'>
           <img src={beauty} alt='joy' width='380px'  height='380px'/>
        </div>
       <div className='sum'>
         
       </div>
       <div className='catch'>
           <h4 className='experience'>Tolu & Joy's Experience</h4>
           <button className='but'>customer</button>
           <h4 className='fam'>
            I had the best experience shopping with vasiti.<br/>
            Usability of the website was great, very good <br/>
            customer service, an all round great<br/>
            experience. I would definately be coming back!<br/>
            I had the best experience shopping with vasiti.<br/>
            Usability of the website was great, very good <br/>
            customer service, an all round great <br/>
            experience. I would definately be coming back!<br/>
            <br/>
            <br/>
            <br/>
            Share your own story!</h4>
           <p></p>
       </div>
    </div>
  )
}

export default Second
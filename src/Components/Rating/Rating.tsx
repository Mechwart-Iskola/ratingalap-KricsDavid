import React from 'react'
import star from "../../../images/icon-star.svg"

const Rating = () => {
  return (
    <div className='container'>
        <div className='star-container'>
            <img src={star} alt=""  />
        </div>
        <h1>How did we do?</h1>
        <p>Tell us how big of a karen you are!</p>
        <div className='button-group'>
          {[1,2,3,4,5].map(button=>(<button>{button}</button>))}
        </div>
        <button type="submit">submit</button>
    </div>
  )
}

export default Rating
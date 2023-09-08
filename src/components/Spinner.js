import React from 'react'
import  loading from './Spinner-1s-30px.gif'
const Spinner =()=>{
  
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading..." />
      </div>
    )
}
export default Spinner

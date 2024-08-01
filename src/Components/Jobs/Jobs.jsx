import React from 'react'
import './Jobs.css'
import jobs from './jobs.png'

export const Jobs = () => {
  return (
    <div className='Jobs__container'>
        <div className='job_img'>
            <img src={jobs} alt="" />
        </div>
        <div>
            <h2></h2>
            <p></p>
            <button></button>
        </div>
    </div>
  )
}


import React from 'react'
import './Jobs.css'
import jobs from '/images/jobs.png'

export const Jobs = () => {
  return (
    <div className='Jobs__container'>
        <div className='job_img'>
            <img src={jobs} alt="" />
        </div>
        <div className='job_text'>
            <h2>Jobs</h2>
            <p>Join us! We are constantly looking for candidates to <br /> expand our team.</p>
            <button> Available position</button>
        </div>
    </div>
  )
}


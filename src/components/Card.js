import React from 'react'
import '../styles/Card.css'
import Button from '@mui/material/Button';
import photo from '../assets/gears.gif';



function Card() {
  return (
    <div className='card'>
        <div className='left'>
        <h1  className='txth1'>Connect with</h1>
        <h1 className='txth1' id='ddu' data-text=' DDU Instrumentation'>DDU Instrumentation</h1>
        <h1 className='txth1'>Community</h1>

        <div className='btn'>
        <Button variant="contained">Register</Button>
        </div>

        </div>
       
        <div className='right'>
            <img src={photo} width='400' alt='img' />

        </div>

    </div>
  )
}

export default Card
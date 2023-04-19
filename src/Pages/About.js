import React from 'react'
import '../styles/About.css'
import Button from '@mui/material/Button';




function About() {
  return (

    <div className='about-pg'>



      <div className='inner-card'>
        <div className='why-txt'>
               
        <h1>Why </h1>
        <h3> Instrumentation ?</h3>

           <p>Instrumentation is a branch of physics. Which deals
          with measuring and Controlling variables in a process 
          Industry. In short Instrumentation is the study and 
           application of measurments and its control.  </p>

           <p> Aim of Instrumentation Engineer is to deal with the continuous demands
              for the improvement of quality of measurments,control
             the Instrumentation Engineer should strive to achieve maximum quality 
             product with minimum usage of raw material.
          </p>

        </div>
        <br/>
      
         <div className='purpose-txt'>
         <h2>Our Purpose</h2>

           <p>Our motive is to create awareness amongs students who wants 
            to excel in their Instrumentation-Control career,
             by enabling them to connect with Alumnus/Almunae who have 
             already gained expertise and experience 
             in the industrial domain. 
             </p>

             <p>This will help students to have a wider view to look ahead 
               in their career with better mindset as well as Finer clearity.
             </p>

         </div>
         
         <div className='btn'>
        <Button className='button-about' variant="contained">Know More</Button>
        </div>

      </div>

    

    </div>
  )
}

export default About
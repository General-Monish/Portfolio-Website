import React from 'react'
import './Experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__Frontend">
          <h3>Game Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
             <div>
             <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
             </div>
             </article>
             <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
             <div>
             <h4>Unity 2D</h4>
              <small className='text-light'>Intermediate</small>
             </div>
             </article>
            
                <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
             <div>
             <h4>Photoshop</h4>
              <small className='text-light'>Basic</small>
             </div>
             </article>
             
          </div>
        </div>
        <div className="experience__Backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
             <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
              <h4>OOPS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
              <h4>DSA</h4>
              <small className='text-light'>BASIC</small>
              </div>
             </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
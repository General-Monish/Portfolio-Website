import React from 'react'
import './Services.css'
import {BsShieldFillCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Software Development</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>Developing Custom Software </p>
            </li>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>Training Workshops</p>
            </li>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>Freelance Programming</p>
            </li>
          </ul>
        </article>
        {/* END ofsoftware dev */}
        <article className="services">
          <div className="services__head">
            <h3>GAME DEVELOPMENT</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>C++ And OOPS</p>
            </li>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>UNITY 2D</p>
            </li>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>Developing 2D game </p>
            </li>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>GAMES FOR DIFFERENT PLATFORMS , SUCH AS DESKTOP , MOBILE,OR WEB </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="services">
          <div className="services__head">
            <h3>Technical Writing</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsShieldFillCheck className='services__list-icons' />
              <p>Technical writing Services, 
              Utilizing my passion for reading and writing to offer technical writing services. 
              </p>
            </li>
        
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
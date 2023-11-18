import React from 'react'
import './About.css'
import ME from '../../asset/M.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {SiRotaryinternational} from 'react-icons/si'
import {GrProjects} from 'react-icons/gr'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>Student</small>
            </article>
            <article className='about__card'>
              <SiRotaryinternational className='about__icon'/>
              <h5>Internship</h5>
              <small>2 Months</small>
            </article>
            <article className='about__card'>
              <GrProjects className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>
          <p>

          I'm Mohammad Monis, an IT student at Chandigarh Group of Colleges,
           specializing in C and C++ programming with OOP concepts.
            My passion lies in exploring cryptocurrencies and video games,
             which fuels my curiosity for technological advancements.
              Besides coding, I'm an avid reader and sports enthusiast,
               as books broaden my knowledge and sports keep me active.
                Developing leadership and teamwork skills is crucial to my academic journey. 
                Through an internship at a startup,
                 I honed my problem-solving abilities and cultivated adaptability and perseverance.
                  With a strong belief in open communication,
                   I strive for effective collaboration and collective success. 
                   My portfolio reflects my commitment to continuous learning, showcasing my skills, experiences, and projects.
                    Thank you for visiting, and I look forward to connecting with you!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
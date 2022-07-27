import React from 'react'
import './About.css'
import ME from '../../assets/niks.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
        <img src={ME} alt="niks" />
        </div>
        </div>
        <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
          <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className="about_card">
          <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>10 Clients</small>
          </article>
          <article className="about_card">
          <VscFolderLibrary className='about_icon' />
            <h5>Projects</h5>
            <small>12 Projects Completed</small>
          </article>
        </div>

        <p>Hello, my name is Nekshan Kumar and I have completed my Bachelor Degree from Model Institute of Engineering and Technology in Computer Science. <br />
        Currently, I'm working as a Freelance and now I wanted to work as a full-time employee in a reputed company at a suitable position.
          </p>

        <a href="#contact" className='btn btn-primary'>Lets's Talk</a>

        </div>
      </div>
    
    </section>
  )
}

export default About

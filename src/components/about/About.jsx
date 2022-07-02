import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {IoIosFolderOpen} from 'react-icons/io'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <IoIosFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident minus architecto recusandae deleniti rerum unde, consequatur suscipit modi repellendus eos, illo voluptate animi quod vero beatae maxime tempore debitis corporis, at magni? Autem, vel labore. Unde rerum laudantium, perspiciatis cum assumenda nisi eaque praesentium numquam alias. Quam, dolorum iure odit officiis in provident magnam assumenda, atque debitis doloribus eum, exercitationem at nesciunt laborum facere ipsa dolore odio illum eos ratione ducimus. Officiis rerum iste inventore sequi aliquid officia quis. Quae maxime libero neque illo cum sed. Nemo accusantium illo minima expedita totam tempore beatae hic, vel molestias veritatis quam cum!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
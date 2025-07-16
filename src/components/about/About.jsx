import React from 'react'
import './about.css'
import S2 from '../../assets/avatar.jpg'
import Info from './Info'
const About = () => {
  return (
    <div className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={S2} alt="" className='about__img' />

            <div className="about__data">
                <Info />

                <p className="about__description">
                I am a Front-End Developer with strong expertise in building
                 modern, responsive web applications using React, TypeScript,
                  Next.js, and Tailwind CSS. I specialize in crafting clean, 
                  maintainable code and designing intuitive user interfaces 
                  that prioritize both user experience and performance. 
                  With a keen eye for detail and a passion for scalable 
                  front-end architecture, I thrive in collaborative 
                  environments, contributing to innovative and user-focused 
                  solutions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About

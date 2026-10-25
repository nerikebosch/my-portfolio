import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Hi. I am Nerike Bosch</h1>
                <p>I'm a full-stack developer creating amazing things.</p>
            </div>
            
            <img className="image" src="/images/nerike_foto.jpg" alt="Nerike Bosch" /> 
        </section>
    )
};

export default Hero
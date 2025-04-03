import React from 'react'

export const Hero = () => {
  return (
    <div id='hero' className="hero">
        <div className="hero__content">
            <div className='content'>
                <h1 className="hero__title">Alexander Rojas</h1>
                <p className="hero__description">Desarrollador full stack</p>
                <div className='hero__btns'>
                  <a href="./#projects">
                    <button className="hero__button">Proyectos</button>
                  </a>
                  <a href="">
                    <button className="hero__button">Descargar CV</button>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

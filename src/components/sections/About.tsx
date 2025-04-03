import React from 'react'

export const About = () => {
  return (
    <div id='about' className="about">
        <div className="about__content">
            <h2 className="about__title">Sobre mí</h2>
            <p className="about__description">Soy un desarrollador full stack con experiencia en React, Node.js y MongoDB. Me apasiona crear aplicaciones web modernas y escalables.</p>
            <div className='content'>
                <section className='about-me'>
                    <h3 className='title'>Conóceme mejor</h3>
                    <div className='details'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis voluptas aliquam culpa praesentium molestias quibusdam possimus, illo, ratione sapiente maiores quos animi amet quidem placeat. Tempore similique optio corrupti!</p>
                    </div>
                </section>
                <section className='skills'>
                    <h3 className="title">Habilidades</h3>
                    <div className="skills">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">React</div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

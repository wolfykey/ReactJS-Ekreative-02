import React from 'react'
import './AppHero.scss'

const AppHero = ({ content }) => {
  return (
    <section className='app-hero'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-6 content'>
            <h1 className='app-hero__title'>{content.title}</h1>
            <p className='app-hero__description'>{content.description}</p>
            <a href='#' className='app-hero__btn'>
              Order now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppHero

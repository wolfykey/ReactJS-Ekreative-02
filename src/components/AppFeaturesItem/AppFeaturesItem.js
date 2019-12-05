import React from 'react'
import './AppFeaturesItem.scss'

const AppFeaturesItem = ({ imgLink, title, description }) => {
  return (
    <div className='row app-features-item'>
      <img className='col-md-12 app-features__img' src={imgLink} alt={title} />
      <h2 className='col-md-4 app-features__title'>{title}</h2>
      <p className='col-md-8 app-features__description'>{description}</p>
    </div>
  )
}

export default AppFeaturesItem

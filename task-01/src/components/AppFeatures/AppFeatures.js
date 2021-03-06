import React from 'react'
import './AppFeatures.scss'
import AppFeaturesItem from './../AppFeaturesItem/AppFeaturesItem'

const AppFeatures = ({ content, onDeleted, onEditComponent }) => {
  const elements = content.map(item => {
    const { id, ...other } = item
    return (
      <AppFeaturesItem
        {...other}
        key={id}
        onDeleted={() => onDeleted(id)}
        onEditComponent={() => onEditComponent(id)}
      />
    )
  })

  return (
    <section className='app-features'>
      <div className='container'>{elements}</div>
    </section>
  )
}

export default AppFeatures

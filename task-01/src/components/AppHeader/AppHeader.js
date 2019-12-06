import React from 'react'
import './AppHeader.scss'
import AppHeaderLink from '../AppHeaderLink/AppHeaderLink'

const AppHeader = ({ links }) => {
  const elements = links.map(link => {
    const { id, ...linkProps } = link

    return (
      <li key={id} className='app-header-list-item'>
        <AppHeaderLink {...linkProps} />
      </li>
    )
  })

  return (
    <header className='app-header'>
      <div className='container'>
        <img
          src={process.env.PUBLIC_URL + '/logo.svg'}
          className='app-header-logo'
          alt='lorem'
        />
        <ul className='app-header-list'>{elements}</ul>
      </div>
    </header>
  )
}

export default AppHeader

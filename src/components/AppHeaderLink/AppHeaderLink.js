import React from 'react'

const AppHeaderLink = ({ label, active }) => {
  const style = {
    color: active ? 'steelblue' : 'black',
    fontWeight: active ? 'bold' : 'normal'
  }

  return (
    <a href='#' style={style}>
      {label}
    </a>
  )
}

export default AppHeaderLink

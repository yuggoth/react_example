import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuItem({ children, ...rest }) {
  return (
    <div>
      <NavLink {...rest} activeStyle={{ color: 'red' }}>
        {children}
      </NavLink>
    </div>
  )
}

MenuItem.propTypes = {}

export default MenuItem

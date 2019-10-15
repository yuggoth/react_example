import React, { Component } from 'react'
import MenuItem from './menu-item'

class MainMenu extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default MainMenu
export { MenuItem }

import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

  render() {
      const {count,handleClick} = this.props
    return (
      <h2 onMouseOver={handleClick}> Hover {count} times</h2>
    )
  }
}

export default UpdatedComponent(HoverCounter)
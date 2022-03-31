import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  render() {
    const {count,handleClick} = this.props
    return (
      <button onClick={handleClick}> clicked the Button {count} times clicked</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)
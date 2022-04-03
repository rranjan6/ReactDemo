import React from 'react'
import { ChannnelContext, UserContext } from '../App'
import ComponentD from './ComponentD'

function ComponentC() {
    const user = React.useContext(UserContext)
    const chanel = React.useContext(ChannnelContext)
  return (
    <div>
        {user} - {chanel}
    </div>
  )
}

export default ComponentC
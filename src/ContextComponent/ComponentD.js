import React from 'react'
import { ChannnelContext, UserContext } from '../App'

function ComponentD() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (<ChannnelContext.Consumer>
                        {
                            channel => {
                                return (<div>User context value: {user}, Channel: {channel}</div>)
                            }
                        }
                    </ChannnelContext.Consumer>)
                    
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentD
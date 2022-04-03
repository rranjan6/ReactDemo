import React from 'react'

function HookCounter() {
    const [count,setCount] = React.useState(0)

    const ck = () => {
        setCount(count+1)
    }

    React.useEffect(() => {
       const interval = setInterval(ck,1000)
       return () => {
         clearInterval(interval)
       }
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default HookCounter
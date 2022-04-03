import React from 'react'

function DataFetching() {
    const [posts,setPosts] = React.useState([])

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(resp=>{
            console.log(resp)
            setPosts(resp)
        })
    },[])

  return (
    <div>
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching
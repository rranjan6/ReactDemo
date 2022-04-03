import React from 'react'

function DataFetching() {
    const [post,setPost] = React.useState({})
    const [id,setId] = React.useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = React.useState(1)

    React.useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>res.json())
        .then(resp=>{
            console.log(resp)
            setPost(resp)
        })
    },[idFromButtonClick])

    const handleClick= () =>{
        setIdFromButtonClick(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Post Data</button>
        {post.title}
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching
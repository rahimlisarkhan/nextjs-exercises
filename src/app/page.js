import React from 'react'

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
 
  return (
    <div>
      {data?.map(el => (
        <span>{el.title}</span>
      ))}
    </div>
  )
}

export default page

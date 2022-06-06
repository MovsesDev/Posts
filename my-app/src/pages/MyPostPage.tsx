import React, { useState } from 'react'
import { addPost } from '../api/api'
import './MyPostPage.scss'

const MyPostPage: React.FC = () => {

const [user, setUser] = useState('')
const [description, setDescription] = useState('')

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  const post = {
    name: user,
    description
  }
  addPost(post)
  setUser('')
  setDescription('')
  
}
  
  return (
    <div className='MyPosts'>

    <form className='form'>
      <label htmlFor="username">Username:</label>
      <input 
      type="text"
      value={user}
      onChange={e => setUser(e.target.value)}
       /> <br />

      <label htmlFor="description">Description:</label>
      <input 
      type="text"
      value={description}
      onChange={e => setDescription(e.target.value)}
       /> <br />
       <button onClick={handleSubmit}>Add post</button>
    </form>
    </div>
  )
}

export default MyPostPage
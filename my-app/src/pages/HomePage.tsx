import React, { useEffect } from 'react'
import PostCard from '../components/PostCard/PostCard'
import { receivePosts } from '../features/PostSlice'
import { useAppDispatch, useAppSelector } from '../hooks'


const HomePage = () => {

  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(receivePosts())
  }, [])



  return (
    <div>
      {posts.map(p => <PostCard name={p.name} description={p.description} />)}
    </div>
  )
}

export default HomePage
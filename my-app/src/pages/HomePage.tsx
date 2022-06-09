import React, { useEffect } from 'react'
import PostCard2 from '../components/PostCard/PostCard2'
import { fetchPostsTC } from '../features/PostSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import './HomePage.scss'

const HomePage = () => {

  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)


  useEffect(() => {
    dispatch(fetchPostsTC())
  }, [])



  return (
    <div className='HomePage'>
      {posts.map(p => <PostCard2 key={p.id} name={p.name} description={p.description} image={p.image}/>)}
    </div>
  )
}

export default HomePage
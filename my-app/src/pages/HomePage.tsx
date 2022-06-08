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

  const isAuth = useAppSelector(state => state.posts.isAuth)


  return (
    <div className='HomePage'>
      {isAuth ? <div>You logged in</div> : <div>No</div>}
      {posts.map(p => <PostCard2 key={p.id} name={p.name} description={p.description} image={p.image}/>)}
    </div>
  )
}

export default HomePage
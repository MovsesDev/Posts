import React, { useEffect } from 'react'
import ModalForm from '../common/EditForm'
import PostCard from '../components/PostCard/PostCard'
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
      {posts.map(p => <PostCard post={p}/>)}
    </div>
  )
}

export default HomePage
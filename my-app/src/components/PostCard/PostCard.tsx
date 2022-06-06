import React from 'react'
import './PostCard.scss'
interface PostCardProps {
  name: string,
  description: string
}

const PostCard: React.FC<PostCardProps> = ({name, description}) => {
  return (
    <div className='post-card-container'>
      <div className='image'></div>
        <div className='post-name'>{name}</div>
        <div className='post-desc'>{description}</div>
    </div>
  )
}

export default PostCard
import React from 'react'
import './PostCard.scss'
interface PostCardProps {
  name: string,
  description: string,
  image: string
}

const PostCard: React.FC<PostCardProps> = ({name, description, image}) => {
  return (
    <div className='post-card-container'>
      <div className='image'>
        <img src={image}  />
      </div>
        <div className='post-name'>{name}</div>
        <div className='post-desc'>{description}</div>
    </div>
  )
}

export default PostCard
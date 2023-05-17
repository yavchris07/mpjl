import React from 'react'
import './blogs.scss'
import { Link } from 'react-router-dom'

const blog = ({items:{id,photo,title,author,author_photo,resumes}}) => {
  return (
    <div className='card'>
      <div>
        <img src={photo} alt='cover' />
      </div>
      <div>
        <h3>{title}</h3>
        <h5>{author}</h5>
        <Link to={`/blog/${id}`}>lire</Link>
      </div>
    </div>
  )
}

export default blog

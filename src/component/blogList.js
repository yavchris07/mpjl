import React from 'react'
import './blogs.scss'
import Blog from './blog'

const blogList = ({items}) => {
  return (
    <div className='blog-list'>
        {
            items.map((item)=>{
                return  <Blog items={item} key={item.id}/>
            })
        }
     
    </div>
  )
}

export default blogList 

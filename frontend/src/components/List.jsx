import React from 'react'
import Card from './Card'

const List = ({videos}) => {
  return (
    <div className='list'>
      {videos.map((item, index) =>{
        return(
          <div className='cardbox' key={index}>
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default List
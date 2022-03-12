import React from 'react'
import Tour from './Tour'
const Tours = ({ tours }) => {
  return (
    <>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />
      })}
    </>
  )
}

export default Tours

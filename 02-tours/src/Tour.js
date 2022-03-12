import React, { useContext, useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
  // const { removeTour } = useContext(TourContext)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {isVisible ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Read Less' : 'Read More'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour

import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  const getNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex < people.length - 1) return prevIndex + 1
      return 0
    })
  }

  const getPrev = () => {
    setIndex((prevIndex) => {
      if (prevIndex > 0) return prevIndex - 1
      return people.length - 1
    })
  }

  const getRandom = () => {
    const currentIndex = Math.floor(Math.random() * people.length)
    setIndex((prevIndex) => {
      if (currentIndex === prevIndex) getRandom()
      return currentIndex
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={getPrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={getNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={getRandom}>
        suprise me
      </button>
    </article>
  )
}

export default Review

import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories
        .filter((value, index) => categories.indexOf(value) === index)
        .map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => filterItems(value)}
              className='filter-btn'
            >
              {value}
            </button>
          )
        })}
    </div>
  )
}

export default Categories

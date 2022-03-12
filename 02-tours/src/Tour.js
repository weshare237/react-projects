import React, { useState } from 'react'

const Tour = ({ image, info }) => {
  return (
    <>
      <article>
        <img src={image} alt='' />
        <div>
          <h4>{info}</h4>
        </div>
      </article>
    </>
  )
}

export default Tour

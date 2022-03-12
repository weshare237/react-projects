import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchTours = async () => {
    const res = await fetch(url)
    const tours = await res.json()
    setTours(tours)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return <main>{isLoading ? <Loading /> : <Tours tours={tours} />}</main>
}

export default App

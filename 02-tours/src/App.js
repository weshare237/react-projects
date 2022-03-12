import React, { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'

export const TourContext = React.createContext()

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const removeTour = (tourID) => {
    setTours(tours.filter((tour) => tour.id !== tourID))
  }

  const fetchTours = async () => {
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setTours(tours)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <TourContext.Provider value={{ removeTour }}>
      <main>
        {isLoading ? (
          <Loading />
        ) : tours.length > 0 ? (
          <Tours tours={tours} />
        ) : (
          <div className='title'>
            <h2>No tours left</h2>
            <button className='btn btn-primary' onClick={fetchTours}>
              Refresh
            </button>
          </div>
        )}
      </main>
    </TourContext.Provider>
  )
}

export default App

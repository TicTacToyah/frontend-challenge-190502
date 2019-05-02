import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Stations from './Stations'

function App() {
  const [stations, setStations] = useState([])

  useEffect(() => {
    axios
      .get(
        'http://api.radio.de/info/v2/search/station?station=radiohamburg&apikey=dc7af0f65b39fc1b3fb8d72db1ff99be8856ad7f'
      )
      .then(results => setStations(results.data))
  }, [])

  return (
    <Router>
      <Route path="/station" render={() => <Stations stations={stations} />} />
    </Router>
  )
}

export default App

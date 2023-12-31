//push to Github

import { useState, useEffect } from 'react'
import './App.css'
import Starships from '../components/Starships'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  
  

  async function getData() {
    
    let api = "https://swapi.dev/api/starships/"

    let response = await fetch(api)
    const ships = await response.json();  
    
    setData(ships.results)
    
  }

  return (
    <div >
      <Starships data={data} />
    </div>
  )
}

export default App

import { useState } from 'react'
import Mainpage from './Components/Mainpage'
import './App.css'
import { Route, Routes } from 'react-router'
import Mealinfo from './Components/Mealinfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* <Mainpage /> */}
        <Routes>
          <Route path='/' element={ <Mainpage />}>
          </Route>
          <Route path='/:mealid' element={<Mealinfo/>}>

          </Route>
        </Routes>
     
    </>
  )
}

export default App

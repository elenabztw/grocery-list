import { useState } from 'react'
import './App.css'
import imgOne from './assets/shopping.jpg'
import imgTwo from './assets/man.jpg'
import { GroceryList } from './GroceryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="container">
          <img src={ imgOne } alt="shopping" width="200px"/>
        </div>
        <div className="container">
            <h1>Grocery List</h1>
        </div>
          <GroceryList />
        <div className="container">
            <img src={ imgTwo } alt="man" width="200px" />
        </div>
      </div>
    </>
  )
}

export default App

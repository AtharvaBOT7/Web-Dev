import { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  // Now instead of creating the state inside the child Card component, lets just create the state inside the App component that is the parent component which will enable us to use the same state variable inside all of the children present inside the App component.

  const [name, setName] = useState('');

  return (
    <div>
      {/* <Card name="I am Noobie Godly"> */}
       {/* <h1>Hello</h1> */}
      <Card name={name} setName={setName}>
        <p>I am inside the Parent Component (App) and the value of name is: {name}</p>
      </Card>
    </div>
  )
}

export default App

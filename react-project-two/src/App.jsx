import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from "./components/UserCard" 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Noobie1" desc="I am description of Noobie1"></UserCard>
      <UserCard name="Noobie2" desc="I am description of Noobie2"></UserCard>
      <UserCard name="Noobie3" desc="I am description of Noobie3"></UserCard>
    </div>
  )
}

export default App

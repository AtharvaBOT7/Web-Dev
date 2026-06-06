import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

      <Button incrementCount={handleClick} text="Click Me">
          <h1>{count}</h1>
      </Button>

      {/* <Card name="Noobie Godly"> 
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorem! </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores dicta architecto sapiente nihil odio debitis dolorem aperiam mollitia doloribus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, adipisci enim quibusdam dolore saepe ratione voluptates ducimus quia consequatur quos, dolor numquam exercitationem asperiores est nihil sint perspiciatis? Molestias, velit.</p>
      </Card>

      <Card children="I am inside Card.children variable">
        <br />
        <h1>Hello how are you?</h1>
      </Card> */}
    </div>
  )
}

export default App

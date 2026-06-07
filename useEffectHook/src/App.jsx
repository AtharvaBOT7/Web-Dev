import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'

function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);

  // first -> Side effect function / logic (this is the side effect that is triggered when a specific event occurs)
  // second -> Clean up function (for example cleaning up memory / free up space etc)
  // third -> comma separated dependency list (this is the list of events / entities anf after these events are fulfilled, the side effect function is called.)

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  // Variation 1: Runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // }) // this will run on every render

  // Variation 2: Runs on first render only
  // useEffect(() => {
  //   alert("I will run only on first render");
  // }, [])

  // Variation 3: Only runs when the value of count is updated
  // useEffect(() => {
  //   alert("I will run only when count variable's value is updated");
  // }, [count])

  // Variation 4: Multiple dependencies
  // useEffect(() => {
  //   alert("I render if total is updated or count is updated")
  // }, [count, total])

  // Variation 5: This time we will also add a Clean Up function
  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("Count is unmounted")
  //   }
  // }, [count])

  // function handleClick() {
  //   setCount(count+1);
  // }

  // function handleTotal() {
  //   setTotal(total+45);
  // }
  
  return (
   <div>
    
    {/* <TimerComponent>

    </TimerComponent> */}

      {/* <LoggerComponent>

      </LoggerComponent> */}

      {/* <button onClick={handleClick}>
          Count Update
      </button>
      <br />
      <br />
      <button onClick={handleTotal}>
          Total update
      </button>
      <br />
      <p>
        count is: {count}
        <br />
        total is: {total}
      </p> */}
   </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  function handleClick() {
    alert("I was clicked");
  }

  function handleMouseOver() {
    alert("Para Hovered");
  }

  function handleInputChange(e){
    // console.log("value in input field changed");

    console.log("Current value: ", e.target.value);
  }

  function handleSubmit(e) {

    // preventing the default behaviour
    e.preventDefault();

    // custom behaviour definition
    alert("Form submitted")
  }

  return (

    <button onClick={() => alert("I was clicked")}>
      Click Me
    </button>

    // <div>
    //   <form onSubmit={handleSubmit}>

    //     <input type="text" onChange={handleInputChange} />
    //       <button type='submit'>
    //         Submit
    //       </button>
    //   </form>
    // </div>

    // <div>

    //   <p onMouseOver={handleMouseOver} style={{color: "red", border: "1px solid black"}}>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, dicta.
    //   </p>

    //   <button onClick={handleClick}>
    //     Click Me
    //   </button>
    // </div>
  )
}

export default App

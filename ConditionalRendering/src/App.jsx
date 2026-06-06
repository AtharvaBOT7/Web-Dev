import { useState } from 'react'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!isLoggedIn){
    return (
      <LoginButton />
    )
  }

  return (
    <div>
      <h1>Welcome to Noobie Godly's Website</h1>
      <div>
        {isLoggedIn && <LogoutButton />}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutButton /> : <LoginButton />}
  //   </div>
  // )

  // if (isLoggedIn){
  //   return (
  //       <LogoutButton>

  //       </LogoutButton>
  //   )
  // }
  // else{
  //   return (
  //     <LoginButton>

  //     </LoginButton>
  //   )
  // }


}

export default App

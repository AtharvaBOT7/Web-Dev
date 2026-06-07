import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import ChildA from './components/ChildA';

// Step 1: Create context syntax:
// const UserContext = createContext();

// Step 2: Wrap all the children inside a provider
// The children which wwe want to give the status of a consumer or the children which we want to access the data from the parent component will be listed down in this wrapper. For this we are using UserContext.Provider

// Observe one more thing here, we have Child A inside the provider and Child B is a child of A and C is child of B thus all are indirectly wrapped inside the provider and any of the three children can become a consumer at any time.

// Step 3: Passing the value

// Step 4: Use the value from inside the consumer child.

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name: "noobie godly"});
  const [theme, setTheme] = useState('light');

  return (

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor: theme==='light' ? "green" : "pink"}}>
        <ChildA>

        </ChildA>
      </div>
    </ThemeContext.Provider>

    // <div>
    //   <UserContext.Provider value={user}>
    //   <ChildA>

    //   </ChildA>
    //   </UserContext.Provider>
    // </div>
  )
}

export default App
// export {UserContext} // It is very import to export the User Context.
export {ThemeContext}
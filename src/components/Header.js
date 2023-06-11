import React from 'react'
import { useState } from 'react';

function Header() {
    const [counter, setCounter] = useState(0);
    const increment = ()=>setCounter(counter+1);
    const decrement = ()=>setCounter(counter-1);
  return (
        <div>
      <h1>This is our Counter App ...</h1>
      <h3> Press the revlevant button for ther action...  </h3>
      <h1>{counter}</h1>
      <br></br>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default Header

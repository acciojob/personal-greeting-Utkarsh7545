
import React from "react";
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");
  return (
    <div>
        <label for="name" >Enter your name:</label><br/>
        <input id="name" type="text" onChange={(event)=> {setName(event.target.value)}} /> {/* onChange is a pre-defined function in JS, for instant change a content*/}
        <p>{name && `Hello ${name}!`}</p>
    </div>
  )
}

export default App


import './App.css';
import { useState } from "react";
import { Text } from "./Text";
import { Axios } from 'axios';



function App() {
  fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((data)=>{
    console.log(data);
    });
    Axios.get("https://swapi.dev/api/people/").then((res)=>{
      console.log(res.data);

    })
  const [showText, setShowText] = useState(false);


  return (
    <div className="App">
      <button
        onClick = {() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

     {showText && <Text/>}
    </div>
  );
}

export default App;

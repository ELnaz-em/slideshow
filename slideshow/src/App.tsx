import React from "react";
import "./App.css";
import Pre from "./Components/Pre"
import Next from "./Components/Next"

function App() {
  return (
  <div>
  <img className="cph-img" src={require('./assets/4.jpg')} width="400" height="341" alt="CPH Harbor"></img>
  <br></br>
  <Pre />
  <Next/>
  </div>
  )
  
}

export default App;

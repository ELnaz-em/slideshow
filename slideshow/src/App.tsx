import React,{useState} from "react";
import "./App.css";
import Pre from "./Components/Pre";
import Next from "./Components/Next";
import images from "./assets"
function App() {
  const [index,setIndex]=useState(0);

//"./assets/4.jpg"
const onImgChangetoPre=()=>{
  console.log(index)
  if(index!==0)
  setIndex(index-1)
  else
  setIndex(images.length-1)
}
const onImgChangetoNext=()=>{
  console.log(index)

  if(index!==images.length-1)
  setIndex(index+1)
  else
  setIndex(0)
}
  return (

    <div>
      <img
        className="cph-img"
        src={images[index]}
        width="400"
        height="341"
        alt="CPH Harbor"
      />
      <br></br>
      <Pre onPre={onImgChangetoPre}/>
      <Next  onNext={onImgChangetoNext}/>
    </div>
  );
}

export default App;

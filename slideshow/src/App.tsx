import { useState } from "react";
import "./App.css";
import images from "./assets";
import Next from "./Components/Next";
import Pre from "./Components/Pre";
function App() {
  const [index, setIndex] = useState(0);

  const onImgChangetoPre = () => {
    if (index !== 0) setIndex(index - 1);
    else setIndex(images.length - 1);
  };
  const onImgChangetoNext = () => {
    if (index !== images.length - 1) setIndex(index + 1);
    else setIndex(0);
  };
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
      <Pre onPre={onImgChangetoPre} />
      <Next onNext={onImgChangetoNext} />
    </div>
  );
}

export default App;

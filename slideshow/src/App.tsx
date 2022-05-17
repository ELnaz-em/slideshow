import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";

const App = () => {
    const [images,setImages]=useState<string[]>([])

    async function getImages() {
    const url = "https://picsum.photos/v2/list";
    try {

      const response = await fetch(url);
      const jsonData = await response.json();
      const imagesUrl: string[]=[];

      jsonData.map((jsonElement: { download_url: string; }) => {
        imagesUrl.push(jsonElement.download_url);
      })
      setImages(imagesUrl);
      console.log("here: "+images[0])
    } catch (err) {
      console.log("MYERROR: " + err);
    }
  };
  useEffect(() => {
    getImages()
  }, []);

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
      <Button onClick={onImgChangetoPre} text="Back" />
      <Button onClick={onImgChangetoNext} text="Next" />
    </div>
  );
};

export default App;

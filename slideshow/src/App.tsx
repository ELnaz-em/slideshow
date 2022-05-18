import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";

const App = () => {
  const [images, setImages] = useState<string[]>([]);
  const [altImages, setAltImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getImages() {
    const url = "https://picsum.photos/v2/list";
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      const imagesUrl: string[] = [];
      const imageAlt: string[] = [];
      jsonData.map((jsonElement: { download_url: string; author: string }) => {
        imagesUrl.push(jsonElement.download_url);
        imageAlt.push(jsonElement.author);
      });
      setImages(imagesUrl);
    } catch (err) {
      console.log("Fetching images err: " + err);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getImages();
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
      <br />
      {isLoading ? (
        <div>isLoading...</div>
      ) : (
        <div>
          <img
            className="cph-img"
            src={images[index]}
            width="400"
            height="341"
            alt="CPH Harbor"
          />
          <br />

          <Button onClick={onImgChangetoPre} text="Back" />
          <Button onClick={onImgChangetoNext} text="Next" />
        </div>
      )}
    </div>
  );
};

export default App;

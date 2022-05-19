import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";

const App = () => {
  const [images, setImages] = useState<string[]>([]);
  const [altImages, setAltImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = require("axios").default;
  // Make a request for a user with a given ID
  function getImages() {
    const url = "https://picsum.photos/v2/list";
    setIsLoading(true);
    axios
      .get(url)
      .then(function (response:any) {
        // handle success
        const jsonData = response.data;
        const imagesUrl: string[] = [];
        const imageAlt: string[] = [];
        console.log("*********: "+jsonData);

        jsonData.map((jsonElement: { download_url: string; author: string }) => {
                imagesUrl.push(jsonElement.download_url);
                imageAlt.push(jsonElement.author);
               });
              setImages(imagesUrl);
              setAltImages(imageAlt)
      })
      .catch(function (error: any) {
        // handle error
        console.log("getting images err: " + error);
      })
      .then(function () {
        // always executed
        setIsLoading(false);
      });
  }

  /*
  get images using fetches
  */
  // async function getImages() {
  //   const url = "https://picsum.photos/v2/list";
  //   setIsLoading(true);
  //   try {
  //     const jsonData = await fetch(url);
  //     const jsonData = await jsonData.json();
  //     const imagesUrl: string[] = [];
  //     const imageAlt: string[] = [];
  //     jsonData.map((jsonElement: { download_url: string; author: string }) => {
  //       imagesUrl.push(jsonElement.download_url);
  //       imageAlt.push(jsonElement.author);
  //     });
  //     setImages(imagesUrl);
  //     setAltImages(imageAlt)
  //   } catch (err) {
  //     console.log("Fetching images err: " + err);
  //   }
  //   setIsLoading(false);
  // }
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
            alt={altImages[index]}
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

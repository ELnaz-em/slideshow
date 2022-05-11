import React,{useState} from "react";

const Pre = (props: { onPre:any}) => {
  const loadPreImage = () => {
    console.log("herheee")
    props.onPre()
    //props.allImages;
  };
  return <input type="button" value="pre" onClick={loadPreImage}></input>;
};
export default Pre;

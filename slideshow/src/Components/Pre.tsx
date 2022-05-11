const Pre = (props: { onPre: any }) => {
  const loadPreImage = () => {
    console.log("herheee");
    props.onPre();
  };
  return <input type="button" value="pre" onClick={loadPreImage}></input>;
};
export default Pre;

const Next = (props: { onNext: any }) => {
  const loadNextImage = () => {
    props.onNext();
  };
  return <input type="button" value="Next" onClick={loadNextImage}></input>;
};
export default Next;

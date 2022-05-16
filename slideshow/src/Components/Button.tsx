const Button = (props: { onClick: any , text:string}) => {
  return <input type="button" value={props.text} onClick={props.onClick}></input>;
};
export default Button;

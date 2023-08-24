export default function Greeting(props) {
  // console.log(props);
  return (
    <div>
      <div>{props.prefix}</div>
      {props.children}
    </div>
  );
}

export default function Concept(props) {
  return (
    <li className="concept">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      {props.description ? <p>{props.description}</p> : null}
      {/* <p>{props.description}</p> */}
    </li>
  );
}

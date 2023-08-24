export default function Header(props) {
  return (
    <header>
      <img src={props.img} alt="Medal badge with a star" />
      {props.children}
    </header>
  );
}

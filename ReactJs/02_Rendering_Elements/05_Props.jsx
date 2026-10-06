// parent
function App() {
  return <User name="Adarsh" age={21} />;
}


// child
function User(props) {
  return (
    <h1>
      {props.name} - {props.age}
    </h1>
  );
}
// destructuring props
function User({ name, age }) {
  return (
    <h1>
      {name} - {age}
    </h1>
  );
}
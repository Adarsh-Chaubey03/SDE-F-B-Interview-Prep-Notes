function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle
      </button>

      {/* COMPLETE THIS */}
    {showMessage && <p>Hello User!</p>}
    </div>
  );
}
//Display "Hello User" only when showMessage is true.
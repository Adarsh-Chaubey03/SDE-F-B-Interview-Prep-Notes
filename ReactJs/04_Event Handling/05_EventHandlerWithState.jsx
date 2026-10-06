const [count, setCount] = useState(0);

function increase() {
    setCount(count +1);
}

return (
   // event names are case sensitive. Can't write onClick as onclick
    <button onClick={increase}>
      
        {count}
    </button>
)

/*
User clicks
   ↓
onClick
   ↓
increase()
   ↓
setCount()
   ↓
state changes
   ↓
React re-renders
*/
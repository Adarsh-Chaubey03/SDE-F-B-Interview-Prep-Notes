// onChange

// react passes an event object to the handler

function handleChange(){
    console.log(e.target.value);
}

// used with
<input onChange={handleChange}/>

/*
e
 ↓
event
 ↓
e.target
 ↓
input element
 ↓
e.target.value
 ↓
current input value
*/


// for controlled input

const [name,setName] = useState("");


<input
value={name}
onChange={(e)=>(e.target.value)}
/>
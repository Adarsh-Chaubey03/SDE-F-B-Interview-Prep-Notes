// suppose we have 

const [name,setName] = useState("");
const [email] = useState("");

// inputs

<>
<input
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
value={email}
onChange={(e)=>setName(e.target.value)}
/>
</>


/* the pattern is
Input
 ↓
onChange
 ↓
setState
 ↓
State
 ↓
UI
*/
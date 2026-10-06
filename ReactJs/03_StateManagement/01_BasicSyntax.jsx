import { useState } from 'react';

function App(){
    cosnt [name,setName]=useState("");

return(
    <input value={name}
    onChange={(e)=> setName(e.target.value)}
    />
)
}

// name       → current state
// setName    → function that changes state
// useState("") → initial value
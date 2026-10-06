
const [name, setName] = useState("");
const [error, setError] = useState("");


function handleSubmit(e){
    e.preventDefault();
    // validation
    if (name.trim() === "") {
        setError("Name is required");
        return;
}
}

// then
<form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
</form>

// display
{error && <p>{error}</p>}
// common react pattern 
// error exists → display error
// error empty  → display nothing
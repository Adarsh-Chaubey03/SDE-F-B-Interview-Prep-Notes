
const [name, setName] = useState("");


function handleSubmit(e){
    e.preventDefault();
    // validation
    if (name.trim() === "") {
      // invalid
}
}

// then
<form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
</form>
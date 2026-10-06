function handleSubmit(e){
    e.preventDefault();
//   Normally, submitting an HTML form can cause browser navigation/reload. In a React SPA, we generally prevent that default behavior:
// e.preventDefault(); Then React handles the submission itself.

console.log("Form Submitted");
}

return(
    <form onSubmit={handleSubmit}>
    <input />
    <button type="submit">Submit</button>
    </form>
)
// onClick

function handleclick(){
    console.log("Button Clicked");
    
}


<button onClick={handleclick}>
    Click
</button>



// Passing an Argument

function deleteProduct(id) {
    console.log(id);
}

<button onClick={()=>deleteProduct(5)}>Delete</button>
// arrow fucntion to avoid immediate execution



/* Common mistakes point


onClick={handleClick}
        ↑
pass function
  


onClick={handleClick()}
        ↑
execute function immediately
*/
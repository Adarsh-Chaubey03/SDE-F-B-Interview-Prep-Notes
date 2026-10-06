import { useNavigate } from "react-router-dom";
// navigation inside javascript
function login(){
    navigate = useNavigate();

    function handleLogin(){
        // login logic
        navigate("/dashboard");
    }


    return(
        <button onClick={handleLogin}>Login</button>
    )
}
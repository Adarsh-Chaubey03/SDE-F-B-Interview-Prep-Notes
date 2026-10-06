import {BrowserRouter, Routes, Route} from 'react-router-dom';  // common library for routing
// common library for routing => react-router-dom
import Home from './Home';

function About() {
  return <h1>About Page</h1>;
}

function App() {
    return (
        
        <BrowserRouter> 
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/about" element={<About/>} /> 
        </Routes>
        </BrowserRouter>
       
    )
}

export default App;


// Concept Used 

/*
BrowserRouter
      ↓
   Routes
      ↓
    Route
*/

// BrowserRouter =>  It enables routing functionality in the React application.
// If you use without: <BrowserRouter> you can get an error similar to:
// useRoutes() may be used only in the context of a <Router></Router>

//Routes is the container for your route definitions.
// A route connects:
// URL → Component
// Routes = collection of possible routes
// Route  = one individual route



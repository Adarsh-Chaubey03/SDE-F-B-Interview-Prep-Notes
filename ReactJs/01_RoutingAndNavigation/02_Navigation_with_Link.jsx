import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


//  Why Link instead of <a>?
// This is a common assessment question.
// Normal HTML:
// <a href="/about">About</a>

// React Router:
// <Link to="/about">About</Link>

// For internal SPA navigation, Link is generally preferred because React Router can handle the navigation without requiring a full page reload.
// Remember
// <a href="">        → normal browser navigation
// <Link to="">       → React Router navigation
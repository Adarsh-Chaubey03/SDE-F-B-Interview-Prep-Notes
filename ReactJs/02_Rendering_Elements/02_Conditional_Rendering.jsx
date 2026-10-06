 {isLoggedIn ? <Dashboard /> : <Login />}

// meaning
//  isLoggedIn = true  → Dashboard
//  isLoggedIn = false → Login


// Using &&
{isLoggedIn && <LogoutButton />}

// Meaning:
// Render LogoutButton only if isLoggedIn is true.
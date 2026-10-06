return (
  <h1>Hello {name}</h1>
  <p>Welcome</p>
);
A component cannot return two adjacent JSX elements like this.

Use:
return (
  <>
    <h1>Hello {name}</h1>
    <p>Welcome</p>
  </>
);
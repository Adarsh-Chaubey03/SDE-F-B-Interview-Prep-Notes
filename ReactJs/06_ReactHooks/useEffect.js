// useEffect is a React Hook used to synchronize a component with an external system or perform side-effect operations after React has committed a render.
//  Examples include fetching data, setting up subscriptions, adding event listeners, updating the document title, and starting timers

useEffect(() => {
    console.log("Effect");
}, []);
// The effect runs after the component's initial mount in normal usage.

useEffect(() => {
    console.log("User changed");
}, [userId]);

// The effect runs after the initial commit and again when userId changes.

// useEffect is used to synchronize a component with external systems after React commits the render
// useContext allows functional components to consume a value from React Context without passing that value through intermediate components
//  as props. 
//  It is useful for shared concerns such as authentication, themes, and localization. 
//  Context can be combined with state management, but Context itself is primarily a mechanism for providing and consuming values 
//  across a component tree.

const UserContext = createContext();

<UserContext.Provider value="Adarsh">
    <App />
</UserContext.Provider>

// Then somewhere inside:

const user = useContext(UserContext);

console.log(user);

/*

Context vs Props

Props
-----

Parent
  ↓
Child
  ↓
Grandchild

Data is explicitly passed through the component tree.



Context
-------

Provider
   ↓
   ↓
   ↓
Consumer

A component can access the context directly without passing the value through intermediate components.

*/
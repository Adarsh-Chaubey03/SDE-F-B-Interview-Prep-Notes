 const users = ["Adarsh", "Amit", "Ankit", "Anshul", "Anurag"];

 // render them
 {users.map((user) => (
    <p>{user}</p>
 ))}

 //But React expects a key when rendering a list.
  {users.map((user,index) => (
    <p key={index}>{user}</p>
 ))}
 // better when you have a unique id for each user, you can use that as the key instead of the index.

 const user_details = [
  { id: 1, name: "Adarsh" },
  { id: 2, name: "Rahul" }
];

{user_details.map((user) => (
  <p key={user.id}>{user.name}</p>
))}
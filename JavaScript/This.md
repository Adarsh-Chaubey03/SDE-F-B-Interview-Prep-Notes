# `this` in JavaScript

## Simple Definition

`this` refers to the **context in which a function is called**. Its value depends on how the function is invoked.

```javascript
// 1. In a method, `this` refers to the object.
const user = {
  name: "Adarsh",

  greet() {
    console.log(this.name); // Adarsh
  }
};

user.greet();


// 2. In a constructor, `this` refers to the new instance.
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person("Adarsh");

console.log(person.name); // Adarsh
```

### Interview Answer

> `this` refers to the execution context of a function. Its value depends on how the function is called—for example, in a method it refers to the object, while in a constructor it refers to the newly created instance.

# React Native Basics

Simple, interview-ready answers for the React Native questions you may
be asked after mentioning React Native on your resume.

------------------------------------------------------------------------

## 1. What is React Native?

React Native is a framework developed by Meta for building mobile
applications using React and JavaScript.

It allows developers to build applications for Android and iOS using a
shared codebase and React concepts.

**Simple answer:**

> "React Native is a framework for building Android and iOS mobile
> applications using React and JavaScript."

------------------------------------------------------------------------

## 2. What is the difference between React.js and React Native?

**React.js** is mainly used to build web applications.

**React Native** is used to build mobile applications for Android and
iOS.

  React.js               React Native
  ---------------------- --------------------------
  Web applications       Mobile applications
  Uses HTML elements     Uses native components
  Uses the browser DOM   Renders native mobile UI
  `div`                  `View`
  `p`, `span`            `Text`

**Simple answer:**

> "React.js is primarily used for web development, while React Native
> uses React concepts to build native mobile applications."

------------------------------------------------------------------------

## 3. What is a component in React Native?

A component is a reusable building block of a React Native application.

For example, a login screen can be created as a component and reused
where needed.

Example:

``` jsx
function Welcome() {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}
```

**Simple answer:**

> "A component is a reusable piece of UI and logic in a React Native
> application."

------------------------------------------------------------------------

## 4. What is the difference between `View` and `Text` in React Native?

### `View`

`View` is a basic container used to structure and layout the UI.

``` jsx
<View>
  <Text>Hello</Text>
</View>
```

### `Text`

`Text` is used to display text.

``` jsx
<Text>Hello</Text>
```

**Simple answer:**

> "`View` is mainly used as a container, while `Text` is used to display
> text."

------------------------------------------------------------------------

## 5. How is styling done in React Native?

React Native uses JavaScript objects for styling rather than traditional
CSS files in the same way as web React.

Example:

``` jsx
<View style={{ padding: 20 }}>
  <Text>Welcome</Text>
</View>
```

Styles can also be created separately using `StyleSheet`.

``` jsx
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
```

**Simple answer:**

> "React Native uses JavaScript-based style objects, commonly created
> with `StyleSheet`."

------------------------------------------------------------------------

## 6. What is `StyleSheet` in React Native?

`StyleSheet` is a React Native API used to define styles in a structured
and reusable way.

Example:

``` jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
```

Use it like:

``` jsx
<View style={styles.container}>
```

**Simple answer:**

> "`StyleSheet` helps us create and organize reusable styles for React
> Native components."

------------------------------------------------------------------------

## 7. What is `FlatList`, and when would you use it?

`FlatList` is a React Native component used to render lists of data
efficiently.

Example:

``` jsx
<FlatList
  data={users}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

It is useful for large or dynamic lists because it renders items
efficiently instead of rendering everything at once.

**Simple answer:**

> "`FlatList` is used to efficiently render lists of data, especially
> when the list can contain many items."

------------------------------------------------------------------------

## 8. How do you handle navigation in React Native?

Navigation is commonly handled using a library such as **React
Navigation**.

For example, an application may have:

``` text
Login
  ↓
Home
  ↓
Profile
```

The navigation library allows the application to move between screens.

**Simple answer:**

> "I would commonly use React Navigation to manage navigation between
> screens in a React Native application."

------------------------------------------------------------------------

## 9. What is the difference between `ScrollView` and `FlatList`?

### `ScrollView`

Renders its child content inside a scrollable container.

It is suitable for smaller amounts of content.

### `FlatList`

Efficiently renders a list of items and is better for large or dynamic
lists.

**Simple difference:**

> "`ScrollView` is suitable for smaller content where the whole content
> can be rendered, while `FlatList` is optimized for rendering lists of
> many items."

------------------------------------------------------------------------

## 10. How do you handle user input and forms in React Native?

React Native provides components such as `TextInput` for user input.

Example:

``` jsx
<TextInput
  value={email}
  onChangeText={setEmail}
/>
```

State can be used to store the input.

``` jsx
const [email, setEmail] = useState('');
```

**Simple answer:**

> "I would use `TextInput` for user input and React state such as
> `useState` to manage the entered values."

------------------------------------------------------------------------

## 11. How do you make a React Native application work on both Android and iOS?

React Native allows developers to share most of the application code
between Android and iOS.

For platform-specific requirements, platform-specific code can be used.

**Simple answer:**

> "Most of the code can be shared between Android and iOS, while
> platform-specific functionality can be handled separately when
> required."

------------------------------------------------------------------------

## 12. How do you access platform-specific functionality in React Native?

React Native provides the `Platform` API to identify the current
platform.

Example:

``` jsx
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // Android-specific logic
}
```

You can also use platform-specific files when needed.

**Simple answer:**

> "I can use the `Platform` API to identify Android or iOS and apply
> platform-specific logic."

------------------------------------------------------------------------

## 13. What are props and state in React Native?

### Props

Props are values passed from a parent component to a child component.

``` jsx
<User name="Adarsh" />
```

Here, `name` is a prop.

### State

State stores data that can change inside a component.

``` jsx
const [count, setCount] = useState(0);
```

**Simple difference:**

-   Props → passed into a component.
-   State → managed by the component and can change.

------------------------------------------------------------------------

## 14. Can you use React hooks such as `useState` and `useEffect` in React Native?

Yes.

React Native uses React, so React hooks such as `useState`, `useEffect`,
and `useRef` can be used.

Example:

``` jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Component updated');
}, []);
```

**Simple answer:**

> "Yes. React Native uses React, so standard React hooks such as
> `useState` and `useEffect` can be used."

------------------------------------------------------------------------

## 15. How do you make API calls in a React Native application?

API calls can be made using JavaScript APIs such as `fetch` or libraries
such as Axios.

Example using `fetch`:

``` jsx
fetch('https://example.com/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

With `async/await`:

``` jsx
const response = await fetch('https://example.com/api/users');
const data = await response.json();
```

**Simple answer:**

> "I can use `fetch` or Axios to communicate with backend REST APIs and
> then store the response in component state."

------------------------------------------------------------------------

# Quick Revision

  -----------------------------------------------------------------------
  Question                            Key Point
  ----------------------------------- -----------------------------------
  React Native                        Mobile apps using React and
                                      JavaScript

  React.js vs React Native            Web vs mobile

  Component                           Reusable UI building block

  `View`                              Container

  `Text`                              Displays text

  Styling                             JavaScript-based styles

  `StyleSheet`                        Organizes reusable styles

  `FlatList`                          Efficient list rendering

  Navigation                          Commonly handled with React
                                      Navigation

  `ScrollView` vs `FlatList`          General scrollable content vs
                                      efficient lists

  Forms                               `TextInput` + state

  Android/iOS                         Mostly shared code

  Platform-specific                   `Platform` API

  Props vs State                      Passed data vs changing component
                                      data

  Hooks                               React hooks work in React Native

  API calls                           `fetch` or Axios
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Important for Your Interview

Because your hands-on React Native experience is limited, do **not**
claim production-level expertise.

A safe answer if asked about your experience:

> "I have basic hands-on exposure to React Native, mainly through
> hackathons. My stronger frontend experience is React.js, where I have
> worked extensively on component-based interfaces, responsive design,
> API integration, and frontend workflows. I understand the core React
> Native concepts, but I would not claim production-level expertise in
> it."

If the interviewer asks something beyond your experience:

> "I haven't implemented that myself yet, so I don't want to give you an
> inaccurate answer. I understand the basic concept, but I would need
> more hands-on experience with that part."

This is better than guessing.

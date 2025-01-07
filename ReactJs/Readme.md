# React Js Fundamental

=====================

### Table of Contents

1. [Introduction](#introduction)
2. [Setting Up React Js](#setting-up-react-js)
3. [Components](#components)
4. [State and Props](#state-and-props)
5. [Event Handling](#event-handling)
6. [JSX](#jsx)
7. [React Hooks](#react-hooks)
8. [Conclusion](#conclusion)

### Introduction

React Js is a JavaScript library for building user interfaces. It's a popular choice for web development and
mobile app development. In this tutorial, we'll cover the fundamental concepts of React Js.

### Setting Up React Js

To set up React Js, you'll need to install Node Js and npm (the package manager for
Node Js). Then, you can install React Js using npm by running the following command:

#### Bash

```
npm install react react-dom
```

#### Create project - Bash

- `Using create-react-app Env:`

```bash
npx create-react-app my-app
```

- `Using vite Env:`

```bash
npm create vite@latest
npm install
```

### Components

Components are the building blocks of React Js applications. They're reusable pieces of code that represent a
UI element. There are two types of components: functional components and class components.

#### Functional Components

Functional components are the simplest type of component. They're defined as a function that returns JSX.

```jsx
import React from "react";
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

#### Class Components

Class components are more complex than functional components. They're defined as a class that extends the
React.Component class.

```javascript
import React from "react";
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

### State and Props

State and props are two fundamental concepts in React Js. State is an object that stores data that can
change over time. Props, on the other hand, are immutable values that are passed from a parent
component to a child component.

#### State

State is an object that stores data that can change over time. You can update state using the setState() method.

```javascript
import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}
```

#### Props

Props are immutable values that are passed from a parent component to a child component. You can access
props using the this.props object.

```javascript
import React from "react";
class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child name="John" age={30} />
      </div>
    );
  }
}
class Child extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}
```

#### Lifecycle Methods

Lifecycle methods are methods that are called at different points in a component's lifecycle. Some common lifecycle methods
are:

- `componentWillMount()`: Called before the component is rendered.
- `componentDidMount()`: Called after the component is rendered.
- `componentWillReceiveProps()`: Called when the component receives new props.
- `shouldComponentUpdate()`: Called before the component is updated.
- `componentWillUpdate()`: Called before the component is updated.
- `componentDidUpdate()`: Called after the component is updated.
- `componentWillUnmount()`: Called before the component is unmounted.

```javascript
import React from "react";
class MyComponent extends React.Component {
  componentWillMount() {
    console.log("Component will mount");
  }
}
```

### Event Handling

Event handling is the process of responding to user interactions, such as clicks, key presses, and mous
overs. In React, event handling is done using the `onEvent` syntax, where `Event
is the type of event you want to handle.

```javascript
import React from "react";
class MyComponent extends React.Component {
  handleClick() {
    console.log("Button clicked");
  }
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

### JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files
It is a way to write React components in a more declarative way, without having to use th
e `React.createElement` method.

```javascript
import React from "react";
class MyComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}
```
### React Hooks
React Hooks is a new way to use state and other React features in functional components. It was introduced
in React 16.8.

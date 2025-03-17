# JavaScript Classes (ES6)

## Introduction
JavaScript has long been a prototype-based language, but with the introduction of ES6 (ECMAScript 2015), a formal `class` syntax was introduced. This new syntax provides a more structured and intuitive way to work with object-oriented programming in JavaScript.

## History of JavaScript Classes
Before ES6, JavaScript used constructor functions and the prototype chain to simulate object-oriented behavior. While effective, this approach could be confusing for developers coming from traditional class-based languages like Java or C++.

ES6 introduced the `class` keyword, making object-oriented programming in JavaScript more familiar and readable. However, it is important to note that JavaScript classes are essentially syntactic sugar over the existing prototype-based inheritance model.

## What Can JavaScript Classes Do?
JavaScript classes allow developers to:
- Create reusable blueprints for objects.
- Define constructors to initialize object properties.
- Implement instance methods and static methods.
- Extend other classes using inheritance.
- Use getters and setters for controlled property access.

## Why Are JavaScript Classes Useful?
- **Improved Readability**: The `class` syntax makes object-oriented code more structured and easier to understand.
- **Encapsulation**: Class-based syntax supports private fields and methods, making data hiding and encapsulation easier.
- **Inheritance**: The `extends` keyword allows developers to create subclasses, improving code reusability.
- **Consistency**: Provides a more standardized way of defining object-oriented structures in JavaScript.

## Example of a JavaScript Class
Here is a simple example of a JavaScript class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.introduce(); // Output: Hello, my name is John and I am 30 years old.
```

This document will be expanded as we progress through the lesson, covering advanced concepts and best practices related to JavaScript classes and JSON.


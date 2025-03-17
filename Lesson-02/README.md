# Lesson 2: JavaScript Class Inheritance & `super()`

## Overview
This lesson expands on **JavaScript classes** by introducing **inheritance**, **method overriding**, and a deep dive into `super()`.

## Key Concepts
- **Extending Classes** using `class Employee extends Person`
- **Using `super()`** to call the parent class constructor
- **Method Overriding** (`introduce()` in `Employee`)
- **Calling Parent Methods with `super.method()`**

---

## **Why is `super()` Important?**

### **1️⃣ Required in Subclass Constructors**
Without `super()`, JavaScript **throws an error** when using `this` in a subclass.

#### ❌ Incorrect Example (Missing `super()`):
```javascript
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        this.age = age; // ❌ ERROR: Must call super() before using 'this'
    }
}
```
### ✅ Corrected Example:
```javascript
class Child extends Parent {
    constructor(name, age) {
        super(name); // Calls Parent's constructor
        this.age = age;
    }
}
```

Using `super(name)` ensures the `Child` class inherits the `name` property from `Parent` before adding its own properties.

---

### **2️⃣ Calling Parent Methods with `super.method()`**
Using `super.method()` allows subclasses to call **parent methods** before adding new behavior.

#### 🔹 Example: Calling a Parent Method
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
}

class Employee extends Person {
    constructor(name, jobTitle) {
        super(name);
        this.jobTitle = jobTitle;
    }

    introduce() {
        return `${super.introduce()} I work as a ${this.jobTitle}.`;
    }
}

const emp = new Employee("Bob", "Developer");
console.log(emp.introduce());
// Output: "Hi, I'm Bob. I work as a Developer."
```
✅ `super.introduce()` **calls the parent’s `introduce()` method**, keeping the original functionality and adding more information.

---

## **What Students Will Do**
✔ Extend the `Person` class  
✔ Override a method in a subclass  
✔ Use `super()` to call the parent constructor  
✔ Use `super.method()` to extend functionality  

---

## **Lesson Exercises**

1️⃣ **Create a `Student` subclass** of `Person` with a `major` property.  
2️⃣ **Override `introduce()`** to include the student’s major.  
3️⃣ **Experiment with missing `super()`**—what error do you get?  

---

## **Next Steps**
- Would you like to add **a dropdown for selecting job roles**?
- Should we create a **Manager subclass** that extends `Employee`?

Let me know how you'd like to proceed! 🚀


# Lesson 03: Static Methods & Private Fields in JavaScript Classes

## **Overview**
Now that students understand **class inheritance** and `super()`, it’s time to introduce **static methods** and **private fields**. These concepts help write cleaner, more structured object-oriented code.

---

## **🚀 What Will Students Learn in Lesson 03?**

### **1️⃣ Static Methods (`static`)**
- **What are static methods?**
- **How they differ from instance methods**
- **When and why to use them**

### **2️⃣ Private Fields (`#`)**
- **What are private fields?**
- **How to use private fields in JavaScript**
- **Why private fields improve encapsulation**

### **3️⃣ Combining Static Methods & Private Fields**
- **Creating a class with both static methods and private fields**
- **Enforcing better data security and structuring**

---

## **📌 Understanding Static Methods**

### **What is a Static Method?**
A **static method** is a method that belongs to a class itself rather than to instances of the class. This means:
- Static methods **cannot** access instance properties directly.
- Static methods are used for **utility functions** that do not depend on object-specific data.
- You call them using `ClassName.methodName()` instead of `instance.methodName()`.

#### **Example of a Static Method**
```javascript
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(5, 3)); // Output: 8
```
✅ `add()` is a **static method** because it does not depend on an instance of `MathHelper`.

#### **Static vs. Instance Methods**
| Feature         | Static Method                  | Instance Method              |
|---------------|------------------------------|------------------------------|
| Called on     | Class itself (`Class.method()`) | Class instance (`object.method()`) |
| Access `this` | ❌ No (does not access instance properties) | ✅ Yes (works with instance properties) |
| Use case      | Utility functions (e.g., validation, helper methods) | Methods that work with object data |

#### **Example: Static vs. Instance Method**
```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    static welcome() {
        return "Welcome to the system!";
    }

    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
}

console.log(User.welcome()); // ✅ Static method call

const userXX = new User("Alice");
console.log(userXX.introduce()); // ✅ Instance method call
```
✅ `welcome()` is a static method that does **not** require an instance. 
✅ `introduce()` is an instance method that works with `this.name`.

---

## **📌 Understanding the Different Types of Methods in JavaScript Classes**

### **1️⃣ Constructor Method (`constructor`)**
- The `constructor()` method is called when an instance is created.
- It initializes object properties.
- Only **one constructor** is allowed per class.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### **2️⃣ Instance Methods**
- Defined inside a class and used on **individual objects**.
- Can access `this` to modify instance properties.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

const p = new Person("John");
console.log(p.greet()); // ✅ Instance method call
```

### **3️⃣ Static Methods (`static`)**
- Called on the **class itself**, not instances.
- Cannot access `this` because they do not belong to an instance.

```javascript
class Helper {
    static showHelp() {
        return "This is a static helper function.";
    }
}

console.log(Helper.showHelp()); // ✅ Static method call
```

### **4️⃣ Getter & Setter Methods (`get` & `set`)**
- `get` allows you to retrieve a property.
- `set` allows you to modify a property with validation.

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return `$${this._price.toFixed(2)}`;
    }

    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        } else {
            console.log("Price must be positive!");
        }
    }
}

const item = new Product("Laptop", 1000);
console.log(item.price); // ✅ Calls the getter
item.price = 1200; // ✅ Calls the setter
```

---

## **💻 What Will Students Do?**
✔ **Create a `User` class** that includes **private fields** for sensitive data.  
✔ **Use static methods** to validate usernames and passwords.  
✔ **Combine static and instance methods** for better organization.  
✔ **Modify the UI** to interact with the class (e.g., validate input before allowing creation).  

---

## **📌 Example Use Case**
We'll build a **simple User system** where:
- Users enter a **username** and **password**.
- Passwords are **stored privately** using `#password`.
- A **static method** validates usernames.
- A **method checks password strength** before allowing account creation.

---



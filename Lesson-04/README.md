# Lesson 04: JavaScript OOP Challenge - Build Your Own Class

## **Overview**
In this lesson, students will apply their knowledge of JavaScript **classes, methods, static methods, private fields, and inheritance** by completing a **self-research challenge**. Instead of step-by-step guidance, students must research, design, and implement a **class** that meets the given requirements.

---

## **🚀 The Challenge: Create a `BankAccount` Class**
Students must write a **`BankAccount` class** that models a **real-world bank account** using:

✅ **Private fields** (`#balance`) to secure the account balance.  
✅ **Instance methods** (`deposit()`, `withdraw()`) to update balance.  
✅ **Static methods** (`validateAmount()`) to check if an amount is valid.  
✅ **Getter method** (`getBalance()`) to return the balance securely.  
✅ **A subclass** (`SavingsAccount`) that adds a **`minimumBalance`** rule.  

---

## **📌 Functional Requirements**

### **1️⃣ A `BankAccount` class with:**
- A **private field `#balance`** initialized to **0**.
- A **constructor** accepting `accountHolderName`.
- A **`deposit(amount)` method** to add money.
- A **`withdraw(amount)` method** that only allows withdrawals if there’s enough balance.
- A **`getBalance()` method** to return the balance safely.
- A **static method `validateAmount(amount)`** that checks if the amount is **a number > 0**.

### **2️⃣ A `SavingsAccount` subclass that extends `BankAccount`:**
- Requires a **minimum balance of $100**.
- Overrides `withdraw(amount)` to **prevent withdrawals if balance falls below $100**.

### **3️⃣ Students must update `index.html` to:**
- Take user input for **account name, deposit, and withdraw amounts**.
- **Display** transactions and the final balance in the UI.

---

## **🛠️ Provided Template Files**
- **`index.html`**: Contains a basic form for users to enter an account name, deposit, and withdraw amounts.
- **`script.js`**: Provided as a **template** with built-in **hints**. Students must implement the `BankAccount` and `SavingsAccount` classes by filling in the missing methods.

The `script.js` template includes:
- Hints on how to define the `BankAccount` class with private fields.
- Suggestions for implementing **deposit**, **withdraw**, **getBalance**, and **static methods**.
- A placeholder for a `SavingsAccount` subclass that enforces a minimum balance.
- A guide for connecting UI interactions with the JavaScript logic.

Students must complete the `script.js` file based on the hints provided.

---

## **📌 Additional Hints for Extra Guidance**
For students who need additional guidance, consider the following hints:

1️⃣ **Private Fields (`#balance`)**: Remember that private fields **cannot** be accessed directly outside the class. Use methods like `getBalance()` to retrieve the value safely.

2️⃣ **Validating Amounts (`validateAmount()`)**: This static method should ensure deposits and withdrawals are positive numbers. Use `typeof amount === "number" && amount > 0` to validate input.

3️⃣ **Depositing Money (`deposit(amount)`)**:
   - First, use `validateAmount()` to check if the deposit amount is valid.
   - Then, **increase `#balance`** by the deposit amount.

4️⃣ **Withdrawing Money (`withdraw(amount)`)**:
   - Check if the withdrawal amount is valid using `validateAmount()`.
   - Ensure there is **enough balance** before deducting the amount.
   - If this is a `SavingsAccount`, ensure the balance does not fall below **$100**.

5️⃣ **Extending a Class (`extends`)**:
   - The `SavingsAccount` subclass should use `super(accountHolderName)` in its constructor to call the parent class’s constructor.
   - Override `withdraw(amount)` to **check for minimum balance requirements**.

6️⃣ **Displaying Account Information (`getBalance()`)**:
   - Instead of returning `#balance` directly, return a formatted string like `$${this.#balance.toFixed(2)}`.

7️⃣ **Handling UI Updates**:
   - When the user clicks **Deposit** or **Withdraw**, update the UI dynamically using `document.getElementById("accountOutput").innerText = account.getBalance();`

---

## **📌 Challenge Rules & Guidelines**
1️⃣ Students **must research and write the class themselves**—no pre-written examples.  
2️⃣ They **must use private fields (`#balance`)** and **static methods (`validateAmount()`)**.  
3️⃣ Bonus: Create a **checking account subclass** with **transaction fees**.  
4️⃣ UI interactions should update account details dynamically.  

---



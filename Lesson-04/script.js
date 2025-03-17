// Lesson 04 Challenge: Implementing a Bank Account System
// 
// 🔹 HINTS: 
// - Create a `BankAccount` class with a private field `#balance` initialized to 0.
// - The constructor should accept an `accountHolderName`.
// - Implement `deposit(amount)` and `withdraw(amount)` methods.
// - Ensure `withdraw(amount)` does not allow negative balance.
// - Use a static method `validateAmount(amount)` to check if the amount is valid.
// - Extend `BankAccount` with a `SavingsAccount` class that enforces a minimum balance of $100.
// - Override `withdraw(amount)` in `SavingsAccount` to prevent balance from falling below $100.
// - Display updates dynamically in `index.html`.

// TODO: Define the BankAccount class here

// Lesson 04: Fully Functional Bank Account System

// Lesson 04: Fully Functional Bank Account System

// Lesson 04: Fully Functional Bank Account System

class BankAccount {
    #balance;
    
    constructor(accountHolderName) {
        this.accountHolderName = accountHolderName;
        this.#balance = 0; // Private balance field
    }

    deposit(amount) {
        if (BankAccount.validateAmount(amount)) {
            this.#balance += amount;
            return `Deposited $${amount.toFixed(2)}. New balance: ${this.getBalance()}`;
        }
        return "Invalid deposit amount!";
    }

    withdraw(amount) {
        if (BankAccount.validateAmount(amount) && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew $${amount.toFixed(2)}. New balance: ${this.getBalance()}`;
        }
        return "Insufficient funds or invalid amount!";
    }

    getBalance() {
        return `$${this.#balance.toFixed(2)}`;
    }

    getBalanceRaw() {
        return this.#balance;
    }

    static validateAmount(amount) {
        return typeof amount === "number" && amount > 0;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountHolderName) {
        super(accountHolderName);
        this.minimumBalance = 100; // Enforce minimum balance
    }

    withdraw(amount) {
        if (BankAccount.validateAmount(amount) && (this.getBalanceRaw() - amount) >= this.minimumBalance) {
            return super.withdraw(amount);
        }
        return "Withdrawal denied! Minimum balance of $100 required.";
    }
}

let account = null;

function createAccount() {
    const name = document.getElementById("accountName").value.trim();
    if (!name) {
        alert("Please enter an account holder name.");
        return;
    }
    account = new SavingsAccount(name);
    updateUI(`Account created for ${name}. Balance: ${account.getBalance()}`);
}

function depositMoney() {
    if (!account) {
        createAccount(); // Automatically create an account if one doesn't exist
    }
    const amount = parseFloat(document.getElementById("depositAmount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid deposit amount.");
        return;
    }
    updateUI(account.deposit(amount));
}

function withdrawMoney() {
    if (!account) {
        alert("Create an account first!");
        return;
    }
    const amount = parseFloat(document.getElementById("withdrawAmount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid withdrawal amount.");
        return;
    }
    updateUI(account.withdraw(amount));
}

function updateUI(message) {
    document.getElementById("accountOutput").innerText = message;
}
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

class BankAccount {
    #balance; // Private balance field
    
    constructor(accountHolderName) {
        this.accountHolderName = accountHolderName;
        this.#balance = 0;
    }

    // TODO: Implement deposit() method
    deposit(amount) {
        
    }

    // TODO: Implement withdraw() method
    withdraw(amount) {
        
    }

    // TODO: Implement getBalance() method
    getBalance() {
        
    }

    // TODO: Implement static validateAmount() method
    static validateAmount(amount) {
        
    }
}

// TODO: Define the SavingsAccount class that extends BankAccount

class SavingsAccount extends BankAccount {
    constructor(accountHolderName) {
        super(accountHolderName);
        // TODO: Implement additional SavingsAccount logic
    }

    // TODO: Override withdraw() method to enforce minimum balance
    withdraw(amount) {
        
    }
}

// TODO: Implement functions to handle UI interactions

function depositMoney() {
    // TODO: Get deposit amount from input field and call deposit() method
}

function withdrawMoney() {
    // TODO: Get withdrawal amount from input field and call withdraw() method
}

// TODO: Display updates dynamically in the UI

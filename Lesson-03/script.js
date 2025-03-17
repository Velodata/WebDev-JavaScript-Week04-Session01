

// IJV - 2025.03.17 - your challenge in this lesson is to write in the User class

// (1) a constructor statement which defines username,  and password

// (2) a static method named  validateUsername(username) which verifies the username .= 5 characters

// (3) a setPassword(newPassword) function which sets this.#password if the password passes verification

// (4) a static function named isStrongPassword(password) which verifies a password is a strong password


class User {
    #password; // Private field

    // insrt your methods here...
    
    getUserInfo() {
        return `Username: ${this.username} (Password is private)`;
    }
}

function createUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!User.validateUsername(username)) {
        alert("Username must be at least 5 characters long.");
        return;
    }

    if (!User.isStrongPassword(password)) {
        alert("Password must be at least 8 characters long and contain a number.");
        return;
    }

    const user = new User(username, password);
    document.getElementById("userOutput").innerText = user.getUserInfo();
}

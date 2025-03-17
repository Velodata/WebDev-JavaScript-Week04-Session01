class Person {
    constructor(name, age, gender, skills) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
    }

    introduce() {
        return `Hi, my name is ${this.name}. I am ${this.age} years old and identify as ${this.gender}. 
        I have skills in: ${this.skills.length > 0 ? this.skills.join(", ") : "None"}.`;
    }
}

class Employee extends Person {

    
// This class definition needs to be filled in using
// the Advanced Code Screenshot



}

function createEmployee() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const jobTitle = document.getElementById("job").value;
    
    const gender = document.querySelector('input[name="gender"]:checked');
    const selectedGender = gender ? gender.value : "Not specified";

    const skillElements = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSkills = Array.from(skillElements).map(skill => skill.value);

    if (!name || !age || !jobTitle) {
        alert("Please enter your name, age, and job title.");
        return;
    }

    const employee = new Employee(name, age, selectedGender, selectedSkills, jobTitle);
    
    document.getElementById("personOutput").innerText = employee.introduce();
}

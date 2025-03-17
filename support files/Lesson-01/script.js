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

function createPerson() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    
    const gender = document.querySelector('input[name="gender"]:checked');
    const selectedGender = gender ? gender.value : "Not specified";

    const skillElements = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSkills = Array.from(skillElements).map(skill => skill.value);

    if (!name || !age) {
        alert("Please enter your name and age.");
        return;
    }

    const person = new Person(name, age, selectedGender, selectedSkills);
    
    document.getElementById("personOutput").innerText = person.introduce();
}

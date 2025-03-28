class Person {

    
// This class definition needs to be filled in using
// the Advanced Code Screenshot



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

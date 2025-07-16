// DOM elements
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

/*
{
    name:'';
    age: number,
    roll: number
}
*/

const students = JSON.parse(localStorage.getItem('students')) || [];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    })

    localStorage.setItem('students', JSON.stringify(students))
    return {name, age, roll}
}

const createSudentElement = ({name, age, roll}) => {
    // Create Elements
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    // Fill the content
    studentName.innerText = `Student Name: ${name}`
    studentAge.innerText = `Student Age: ${age}`
    studentRoll.innerText = `Student Roll: ${roll}`

    // Add to the DOM
    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);


};

    studentsContainer.style.display = students.length === 0 ? 'none' : 'flex';

students.forEach(createSudentElement);

studentForm.onsubmit = e => {
    e.preventDefault()

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    )

    createSudentElement(newStudent)

        nameInput.value = ''
        ageInput.value = ''
        rollInput.value = ''
}
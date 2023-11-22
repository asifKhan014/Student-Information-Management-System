let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    if (name && age && contact && address) {
        const student = {
            name: name,
            age: age,
            contact: contact,
            address: address
        };

        students.push(student);
        displayStudents();
        clearForm();
    } else {
        alert("Please fill in all the fields.");
    }
}

function displayStudents() {
    const studentsList = document.getElementById('students');
    studentsList.innerHTML = "";

    students.forEach((student, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <strong>Name:</strong> ${student.name}, 
                <strong>Age:</strong> ${student.age}, 
                <strong>Contact:</strong> ${student.contact}, 
                <strong>Address:</strong> ${student.address}
            </div>
            <div class="actions">
                <button onclick="removeStudent(${index})">Remove</button>
                <button onclick="editStudent(${index})">Edit</button>
            </div>
        `;
        studentsList.appendChild(listItem);
    });
}

function removeStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('contact').value = student.contact;
    document.getElementById('address').value = student.address;

    // Remove the edited student from the list
    removeStudent(index);
}

function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('contact').value = "";
    document.getElementById('address').value = "";
}

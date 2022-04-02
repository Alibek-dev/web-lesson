
function addStudent() {
    const form = document.forms.studentForm;
    const student = {
        firstName: form.elements.firstName.value,
        sex: form.elements.sex.value,
        birthday: form.elements.birthday.value ? dateFilter(form.elements.birthday.value) : "",
    }

    addNewStudentToTable(student);

    calculateAverageAge();
}

function calculateAverageAge() {
    const birthdayCells = document.getElementsByClassName("birthday");
    let sumAges = 0;
    for (const cell of birthdayCells) {
        let age = new Date().getFullYear() - new Date(cell.innerHTML).getFullYear();
        if (isNaN(age)) {
            age = 0;
        }
        sumAges += age;
    }
    document.getElementById("average-age").innerText = "Средний возраст студентов: " + sumAges / birthdayCells.length;
}

function dateFilter(value) {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }

    return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value))
}

function addNewStudentToTable(student) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${student.firstName}</td><td>${student.sex}</td><td class="birthday">${student.birthday}</td>`;
    const studentsTable = document.getElementById("table-students");
    studentsTable.append(tr)
}
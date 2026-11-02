document.getElementById("courseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let studentName = document.getElementById("studentName").value.trim();
    let department = document.getElementById("department").value;
    let languageSelect = document.getElementById("languages");
    let nameError = document.getElementById("nameError");
    let departmentError = document.getElementById("departmentError");
    let languageError = document.getElementById("languageError");
    let output = document.getElementById("output");
    nameError.innerHTML = "";
    departmentError.innerHTML = "";
    languageError.innerHTML = "";
    output.innerHTML = "";
    let valid = true;
    let namePattern = /^[A-Za-z ]+$/;
    if (studentName === "") {
        nameError.innerHTML = "Student name is required.";
        valid = false;
    } else if (!namePattern.test(studentName)) {
        nameError.innerHTML =
            "Student name should contain only alphabets and spaces.";
        valid = false;
    }
    if (department === "") {
        departmentError.innerHTML = "Please select a department.";
        valid = false;
    }
    let selectedLanguages = [];
    for (let option of languageSelect.options) {
        if (option.selected) {
            selectedLanguages.push(option.value);
        }
    }
    if (selectedLanguages.length === 0) {
        languageError.innerHTML =
            "Please select at least one programming language.";
        valid = false;
    }
    if (valid) {
        output.innerHTML = `
            <h2>Registration Successful</h2>
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Programming Languages:</strong>
            ${selectedLanguages.join(", ")}</p>
        `;
    }
});
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let genderError = document.getElementById("genderError");
    let skillError = document.getElementById("skillError");
    let output = document.getElementById("output");
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    genderError.innerHTML = "";
    skillError.innerHTML = "";
    output.innerHTML = "";
    let valid = true;
    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "") {
        nameError.innerHTML = "Student name is required.";
        valid = false;
    } else if (!namePattern.test(name)) {
        nameError.innerHTML =
            "Student name should contain only alphabets and spaces.";
        valid = false;
    }
    if (email === "") {
        emailError.innerHTML = "Email ID is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Enter a valid email ID.";
        valid = false;
    }
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        genderError.innerHTML = "Please select a gender.";
        valid = false;
    }
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length === 0) {
        skillError.innerHTML = "Please select at least one skill.";
        valid = false;
    }
    if (valid) {
        let selectedSkills = [];
        skills.forEach(function(skill) {
            selectedSkills.push(skill.value);
        });
        output.innerHTML = `
            <h2>Registration Successful</h2>
            <p><strong>Student Name:</strong> ${name}</p>
            <p><strong>Email ID:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Skills:</strong> ${selectedSkills.join(", ")}</p>
        `;
    }
});
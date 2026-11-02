document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let dob = document.getElementById("dob").value;
    let department = document.getElementById("department").value;
    let address = document.getElementById("address").value.trim();
    let genderElement = document.querySelector('input[name="gender"]:checked');
    let gender = genderElement ? genderElement.value : "";
    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        age === "" ||
        dob === "" ||
        department === "" ||
        gender === "" ||
        address === ""
    ) {
        document.getElementById("error").innerHTML =
            "Please fill in all the fields.";
        document.getElementById("output").innerHTML = "";
        return;
    }
    document.getElementById("error").innerHTML = "";
    document.getElementById("output").innerHTML = `
        <h2>Employee Registration Details</h2>
        <table>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Employee Name</td>
                <td>${name}</td>
            </tr>
            <tr>
                <td>Email Address</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Phone Number</td>
                <td>${phone}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>${age}</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>${dob}</td>
            </tr>
            <tr>
                <td>Department</td>
                <td>${department}</td>
            </tr>
            <tr>y
                <td>Gender</td>
                <td>${gender}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>${address}</td>
            </tr>
        </table>
    `;
});
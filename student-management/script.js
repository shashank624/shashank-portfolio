function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name == "" || roll == "" || course == "") {
        alert("Please fill all details");
        return;
    }

    let studentList = document.getElementById("studentList");

    studentList.innerHTML += `
        <div class="student">
            <p>Name: ${name}</p>
            <p>Roll No: ${roll}</p>
            <p>Course: ${course}</p>

            <button onclick="deleteStudent(this)">Delete</button>
        </div>
    `;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}


function deleteStudent(button) {

    button.parentElement.remove();

}
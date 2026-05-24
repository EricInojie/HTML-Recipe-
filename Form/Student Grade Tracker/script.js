const students =
JSON.parse(localStorage.getItem("students")) || [];

const studentName =
document.getElementById("studentName");

const studentGrade =
document.getElementById("studentGrade");

const addBtn =
document.getElementById("addBtn");

const studentList =
document.getElementById("studentList");

const averageGrade =
document.getElementById("averageGrade");

const error =
document.getElementById("error");


addBtn.addEventListener(
    "click",
    addStudent
);


renderStudents();
updateAverage();



function addStudent(){

    const name =
    studentName.value.trim();

    const grade =
    Number(studentGrade.value);


    if(name===""){
        showError(
        "Student name cannot be empty"
        );
        return;
    }


    if(
        isNaN(grade) ||
        grade < 0 ||
        grade > 100
    ){
        showError(
        "Grade must be between 0 and 100"
        );
        return;
    }

    error.textContent="";


    const student={

        id:Date.now(),

        name:name,

        grade:grade
    };


    students.push(student);


    saveToLocalStorage();

    renderStudents();

    updateAverage();


    studentName.value="";
    studentGrade.value="";
}



function renderStudents(){

    studentList.innerHTML="";


    const average =
    calculateAverage();


    students.forEach(student=>{

        const row =
        document.createElement("tr");


        if(student.grade > average){

            row.classList.add(
                "above-average"
            );

        }


        row.innerHTML=`

        <td>${student.name}</td>

        <td>${student.grade}</td>

        <td>

        <button
        class="deleteBtn"
        onclick="deleteStudent(${student.id})">

        Delete

        </button>

        </td>

        `;


        studentList.appendChild(row);

    });

}



function deleteStudent(id){

    const index=
    students.findIndex(
    student=>student.id===id
    );


    if(index!==-1){

        students.splice(
        index,
        1
        );


        saveToLocalStorage();

        renderStudents();

        updateAverage();

    }

}



function calculateAverage(){

    if(students.length===0){

        return 0;

    }


    const total=
    students.reduce(
    (sum,student)=>

    sum+student.grade,

    0
    );


    return total/students.length;

}



function updateAverage(){

    averageGrade.textContent=
    calculateAverage()
    .toFixed(2);

}



function saveToLocalStorage(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}



function showError(message){

    error.textContent=
    message;

}
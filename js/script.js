const $ = (element) => {
    return document.querySelector(element);
}

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $("#addForm");
let table = $("#employees");
let output = $("#empCount");


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let numEmployees = 0;
output.innerText = `(${numEmployees})`;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id, name, extension, email, department;

    id = $("#id").value;
    name = $("#name").value;
    extension = $("#extension").value;
    email = $("#email").value;
    department = $("#department").value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellX = row.insertCell();


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS    
    cellId.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));


    // CREATE THE DELETE BUTTON
    let delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('X'));
    delBtn.className = "btn btn-danger btn-sm float-right";
    cellX.appendChild(delBtn);


    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("#id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    numEmployees++;
    output.innerText = `(${numEmployees})`;
});

// DELETE EMPLOYEE

table.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
        // console.log('button clicked');
        let conf = prompt("Are you sure you want to delete this user? Enter 'y' or 'n':").toLowerCase();
        if (conf === 'y') {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            numEmployees--
            output.innerText = `(${numEmployees})`;
        }
    }
});






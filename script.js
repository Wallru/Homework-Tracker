function addHomework() {
    // Get values from the form
    var homeworkName = document.getElementById('homeworkName').value;
    var dueDate = document.getElementById('dueDate').value;

    // Create a new row in the table
    var table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert cells with the values
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = homeworkName;
    cell2.innerHTML = dueDate;

    // Clear the form
    document.getElementById('homeworkForm').reset();
}

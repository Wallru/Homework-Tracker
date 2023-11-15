function addHomework() {
    var homeworkName = document.getElementById('homeworkName').value;
    var dueDate = document.getElementById('dueDate').value;

    var table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = homeworkName;
    cell2.innerHTML = dueDate;

    saveHomeworkToStorage();
    document.getElementById('homeworkForm').reset();
}

function saveHomeworkToStorage() {
    try {
        var existingHomework = JSON.parse(localStorage.getItem('homework')) || [];

        var homeworkName = document.getElementById('homeworkName').value;
        var dueDate = document.getElementById('dueDate').value;

        existingHomework.push({
            homeworkName: homeworkName,
            dueDate: dueDate
        });

        localStorage.setItem('homework', JSON.stringify(existingHomework));

        // Log success to the console
        console.log('Homework saved to localStorage:', existingHomework);
    } catch (error) {
        // Log any errors to the console
        console.error('Error saving to localStorage:', error);
    }
}

function loadHomeworkFromStorage() {
    try {
        var existingHomework = JSON.parse(localStorage.getItem('homework')) || [];
        var tableBody = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];

        existingHomework.forEach(function (homework) {
            var newRow = tableBody.insertRow(tableBody.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            cell1.innerHTML = homework.homeworkName;
            cell2.innerHTML = homework.dueDate;
        });

        // Log success to the console
        console.log('Homework loaded from localStorage:', existingHomework);
    } catch (error) {
        // Log any errors to the console
        console.error('Error loading from localStorage:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadHomeworkFromStorage();
});

function addHomework() {
    var homeworkName = document.getElementById('homeworkName').value;
    var dueDate = document.getElementById('dueDate').value;

    var table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var deleteButtonCell = newRow.insertCell(2);

    cell1.innerHTML = homeworkName;
    cell2.innerHTML = dueDate;

    // Add a delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        removeHomework(newRow.rowIndex);
    });
    deleteButtonCell.appendChild(deleteButton);

    saveHomeworkToStorage();
    document.getElementById('homeworkForm').reset();
}

function removeHomework(rowIndex) {
    var table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
    table.deleteRow(rowIndex - 1); // Subtract 1 to account for header row

    // Remove the corresponding homework from localStorage
    var existingHomework = JSON.parse(localStorage.getItem('homework')) || [];
    existingHomework.splice(rowIndex - 2, 1); // Subtract 2 to account for header row and 0-based indexing
    localStorage.setItem('homework', JSON.stringify(existingHomework));
}

function saveHomeworkToStorage() {
    try {
        var existingHomework = JSON.parse(localStorage.getItem('homework')) || [];

        var homeworkName = document.getElementById('homeworkName').value;
        var dueDate = document.getElementById('dueDate').value;

        existingHomework.push({
            homeworkName: homeworkName,
            dueDate: dueDate
        });

        localStorage.setItem('homework', JSON.stringify(existingHomework));

        // Log success to the console
        console.log('Homework saved to localStorage:', existingHomework);
    } catch (error) {
        // Log any errors to the console
        console.error('Error saving to localStorage:', error);
    }
}

function loadHomeworkFromStorage() {
    try {
        var existingHomework = JSON.parse(localStorage.getItem('homework')) || [];
        var tableBody = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];

        existingHomework.forEach(function (homework) {
            var newRow = tableBody.insertRow(tableBody.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var deleteButtonCell = newRow.insertCell(2);

            cell1.innerHTML = homework.homeworkName;
            cell2.innerHTML = homework.dueDate;

            // Add a delete button
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                removeHomework(newRow.rowIndex);
            });
            deleteButtonCell.appendChild(deleteButton);
        });

        // Log success to the console
        console.log('Homework loaded from localStorage:', existingHomework);
    } catch (error) {
        // Log any errors to the console
        console.error('Error loading from localStorage:', error);
    }
}

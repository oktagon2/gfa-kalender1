
var body = document.getElementById('calendar');
var dateInput = document.getElementById('date-input');
var goButton = document.getElementById('go-button');

function incrementDate( date) {
    date.setDate(date.getDate()+ 1);
}

goButton.onclick = function () {

    // Table Element dem Body hinzufügen
    const tableElement = document.createElement('table');
    body.appendChild(tableElement);

    // Titelzelle (z.B. "Oktober 2023") erstellen
    var tableRowElement = document.createElement('tr');
    const tableHeadElement = document.createElement('th');
    tableHeadElement.setAttribute('colspan', '7');

    const date = new Date(dateInput.value);
    const monthAndYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    var textElement = document.createTextNode(monthAndYear);

    tableHeadElement.appendChild(textElement);
    tableRowElement.appendChild(tableHeadElement);
    tableElement.appendChild(tableRowElement);


    // Zeile mit "Montag" ... "Sonntag" erstellen
    let myDate = new Date(dateInput.value);

    // Nächsten "Montag" suchen
    do {
        // myDate.setDate(myDate.getDate() + 1);
        incrementDate( myDate);
    }
    while (myDate.getDay() != 1);

    tableRowElement = document.createElement('tr');
    tableElement.appendChild(tableRowElement);
    do {

        var tableCellElement = document.createElement('td');
        tableCellElement.id = 'id-weekday';
        textElement = document.createTextNode(myDate.toLocaleString('de', { weekday: 'long' }));
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild(tableCellElement);
        myDate.setDate(myDate.getDate() + 1);
    }
    while (myDate.getDay() != 1);

    // Kalendertage auffüllen
    myDate = new Date(dateInput.value);

    var firstDate = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
    while (firstDate.getDay() != 1) {
        firstDate.setDate(firstDate.getDate() - 1);
    } 

    var lastDate = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0);
    while (lastDate.getDay() != 0) {
        lastDate.setDate(lastDate.getDate() + 1);
    } 

    myDate = firstDate;
    var tableCellElement= null;
    while (myDate<= lastDate) {
        if( myDate.getDay() == 1) {
            tableRowElement = document.createElement('tr');
            tableElement.appendChild(tableRowElement);
        }
        tableCellElement = document.createElement('td');
        textElement = document.createTextNode(myDate.toLocaleString('de', { day: 'numeric' }));
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild(tableCellElement);   
        myDate.setDate(myDate.getDate() + 1);     
    }

}

window.onload = function () {
}


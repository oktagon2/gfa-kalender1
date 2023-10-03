
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


    myDate = new Date(dateInput.value);

    var firstDay = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
    var lastDay = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0);

    tableRowElement = document.createElement('tr');

    var startOfMonth = 0;
    var firstWeekday = firstDay.getDay();
    var lastDayOldMonth = new Date(myDate.getFullYear(), myDate.getMonth(), 0);

    while (lastDayOldMonth.getDay() != 1) {
        lastDayOldMonth.setDate(lastDayOldMonth.getDate() - 1);
    }

    /* 
    Man hat den Eindruck, dass ab hier reagiert und nicht agiert wurde.
    Natürlich kann man codieren und testen bis es funktioniert.
    Trotzdem sollte man die Übersicht behalten. Es braucht eine Strategie (oder einen Opearationsplan), 
    die beschreibt wie man das Ziel erreichen möchte und die sollte auch verständlich
    dokumentiert sein.
    */
    
    do {

        if (firstDay.getDay() == 0) {

            do {
                var tableCellElement = document.createElement('td');
                textElement = document.createTextNode(lastDayOldMonth.toLocaleString('de', { day: 'numeric' }));
                tableCellElement.appendChild(textElement);
                tableRowElement.appendChild(tableCellElement);
                startOfMonth = startOfMonth + 1;
                lastDayOldMonth.setDate(lastDayOldMonth.getDate() + 1);

                tableElement.appendChild(tableRowElement);
                tableCellElement.id = 'id-beginning';
            }
            while (startOfMonth != 6);

        }
        else if (firstDay.getDay() == 1) {

            do {

                textElement = document.createTextNode(firstWeekday.toLocaleString('de', { weekday: 'long' }));
                var tableCellElement = document.createElement('td');
                textElement = document.createTextNode(lastDayOldMonth.toLocaleString('de', { day: 'numeric' }));
                tableCellElement.appendChild(textElement);
                tableRowElement.appendChild(tableCellElement);
                startOfMonth = startOfMonth + 1;
                lastDayOldMonth.setDate(lastDayOldMonth.getDate() + 1);
                do {

                    textElement = document.createTextNode(firstWeekday.toLocaleString('de', { weekday: 'long' }));
                    var tableCellElement = document.createElement('td');
                    textElement = document.createTextNode(lastDayOldMonth.toLocaleString('de', { day: 'numeric' }));
                    tableCellElement.appendChild(textElement);
                    tableRowElement.appendChild(tableCellElement);
                    startOfMonth = startOfMonth + 1;
                    lastDayOldMonth.setDate(lastDayOldMonth.getDate() + 1);

                    tableElement.appendChild(tableRowElement);

                    tableCellElement.id = 'id-beginning';

                }
                while (startOfMonth != 6);
            }
            while (startOfMonth != 7);

        }
        else {

            textElement = document.createTextNode(firstWeekday.toLocaleString('de', { weekday: 'long' }));
            var tableCellElement = document.createElement('td');
            textElement = document.createTextNode(lastDayOldMonth.toLocaleString('de', { day: 'numeric' }));
            tableCellElement.appendChild(textElement);
            tableRowElement.appendChild(tableCellElement);
            //if (startOfMonth != firstWeekday){
            startOfMonth = startOfMonth + 1;
            lastDayOldMonth.setDate(lastDayOldMonth.getDate() + 1);
            // }
            tableElement.appendChild(tableRowElement);

            tableCellElement.id = 'id-beginning';

        }
    }
    while (startOfMonth <= firstWeekday - 2);

    do {

        if (firstDay.getDay() == 1) {
            var tableRowElement = document.createElement('tr');
        }


        var tableCellElement = document.createElement('td');
        textElement = document.createTextNode(firstDay.toLocaleString('de', { day: 'numeric' }));
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild(tableCellElement);
        firstDay.setDate(firstDay.getDate() + 1);
        tableElement.appendChild(tableRowElement);

    }

    while (firstDay <= lastDay);

    //var endOfMonth = ;
    var lastWeekday = lastDay.getDay();

    var firstDayNewMonth = new Date(myDate.getFullYear(), myDate.getMonth());

    if (lastDay.getDay() != 0) {

        do {

            textElement = document.createTextNode(lastWeekday.toLocaleString('de', { weekday: 'long' }));
            var tableCellElement = document.createElement('td');
            textElement = document.createTextNode(firstDayNewMonth.toLocaleString('de', { day: 'numeric' }));
            tableCellElement.appendChild(textElement);
            tableRowElement.appendChild(tableCellElement);
            if (lastWeekday != 6) {
                lastWeekday = lastWeekday + 1;
                firstDayNewMonth.setDate(firstDayNewMonth.getDate() + 1);
            }
            else {
                lastWeekday = lastWeekday - 6;
            }
            tableElement.appendChild(tableRowElement);
            tableCellElement.id = 'id-end';

        }

        while (lastWeekday != 0);



    }


    /*if(firstDay != 1){
    
        do {
        var tableCellElement = document.createElement('td');
        textElement = document.createTextNode(firstDayNewMonth.toLocaleString('de', { day: 'numeric'}));
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild( tableCellElement);
        firstDayNewMonth.setDate(firstDayNewMonth.getDate() - 1);
        tableElement.appendChild(tableRowElement);
        }
        while(startOfMonth != 0);
    
    }*/






    /*var tableCellElementDi = document.createElement( 'td');
    textElementDi = document.createTextNode("Dienstag");
    tableCellElementDi.appendChild( textElementDi);
    tableRowElement.appendChild( tableCellElementDi);
    
    var tableCellElementMi = document.createElement( 'td');
    textElementMi = document.createTextNode("Mittwoch");
    tableCellElementMi.appendChild( textElementMi);
    tableRowElement.appendChild( tableCellElementMi);
    
    var tableCellElementDo = document.createElement( 'td');
    textElementDo = document.createTextNode("Donnerstag");
    tableCellElementDo.appendChild( textElementDo);
    tableRowElement.appendChild( tableCellElementDo);
    
    var tableCellElementFr = document.createElement( 'td')
    textElementFr = document.createTextNode("Freitag");
    tableCellElementFr.appendChild( textElementFr);
    tableRowElement.appendChild( tableCellElementFr);
    
    var tableCellElementSa = document.createElement( 'td');
    textElementSa = document.createTextNode("Samstag");
    tableCellElementSa.appendChild( textElementSa);
    tableRowElement.appendChild( tableCellElementSa);
    
    var tableCellElementSo = document.createElement( 'td');
    textElementSo = document.createTextNode("Sonntag");
    tableCellElementSo.appendChild( textElementSo);
    tableRowElement.appendChild( tableCellElementSo);*/

}

window.onload = function () {
}


//Array of objects 
const shows = [{
    date: 'Wed Dec 15 2021',
    venue: 'Press Club',
    location: 'San Francisco, CA'
},  
{
    date: 'Fri Nov 26 2021',
    venue: 'Moscow Center',
    location: 'San Francisco, CA'
},
{
    date: 'Sat Nov 06 2021',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA'
},    
{
    date: 'Fri Oct 15 2021',
    venue: 'View Lounge',
    location: 'San Francisco, CA'
},
{
    date: 'Tue Sept 21 2021',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA'
},
{
    date: 'Mon Sept 06 2021',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA'
}]


//Creating an element and appending it
const showsSection = document.querySelector('.shows');
const showsHeading = document.createElement('h2');
showsHeading.innerHTML = "Shows";
showsHeading.className = "shows__heading";

showsSection.appendChild(showsHeading);
console.log("hello");


//creating a table and table head elements
const table = document.createElement('table');
const thead = document.createElement('thead');
const tableMainRow = document.createElement('tr');
const tableMainHeader1 = document.createElement('th');
const tableMainHeader2 = document.createElement('th');
const tableMainHeader3 = document.createElement('th');
//adding class names to the elements
table.className = "table";
thead.className = "table__head";
tableMainRow.className = "table__main-row";
tableMainHeader1.className = "table__main-header";
tableMainHeader2.className = "table__main-header";
tableMainHeader3.className = "table__main-header";
//adding innner html
tableMainHeader1.innerHTML = "DATE";
tableMainHeader2.innerHTML = "VENUE";
tableMainHeader3.innerHTML = "LOCATION";
//appending them to table head element and then to the body
tableMainRow.appendChild(tableMainHeader1);
tableMainRow.appendChild(tableMainHeader2);
tableMainRow.appendChild(tableMainHeader3);

thead.appendChild(tableMainRow);
table.append(thead);


//creating table 
const tbody = document.createElement('tbody');
tbody.className = "table__body";

//using a for of loop to iterate through array to set inner html using template literals
for (show of shows) {
    const tableRow = document.createElement('tr');
    tableRow.className = "table__row";
    tableRow.innerHTML = `    
    <tr class="table__row">
    <th class="table__header">DATE</th>
    <td class="table__data table__data--demi">${show.date}</td>
    <th class="table__header">VENUE</th>
    <td class="table__data">${show.venue}</td>
    <th class="table__header">LOCATION</th>
    <td class="table__data">${show.location}</td>
    <th class="table__header"></th>
    <td class="table__data"><button class="table__button">BUY TICKETS</button></td>`;
    tbody.appendChild(tableRow);
}

table.appendChild(tbody);
showsSection.appendChild(table);
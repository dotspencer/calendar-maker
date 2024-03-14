const body = document.body;
const h1 = document.querySelector('h1');

const table = document.createElement('table');
const thead = table.createTHead();
const tbody = table.createTBody();
const rowHead = thead.insertRow();

const year = new Date().getFullYear();
h1.innerText = year;

// Months as headings
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
months.forEach(month => {
    const th = document.createElement('th');
    th.textContent = month;
    rowHead.appendChild(th);
});

// Function to get the number of days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Find the max number of days in the months to determine the number of rows
const maxDays = Math.max(...months.map((_, i) => getDaysInMonth(year, i + 1)));

// Add rows for the days
for (let i = 1; i <= maxDays; i++) {
    const row = tbody.insertRow();
    for (let j = 0; j < 12; j++) {
        const cell = row.insertCell();
        const daysInMonth = getDaysInMonth(year, j + 1);
        cell.textContent = i <= daysInMonth ? i : ''; // Only add day if it exists in the month
    }
}

// Append the table to the root element
body.appendChild(table);
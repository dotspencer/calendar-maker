const body = document.body;
const h1 = document.querySelector('h1');

const table = document.createElement('table');
const thead = table.createTHead();
const tbody = table.createTBody();

const year = new Date().getFullYear();
h1.innerText = year.toString();

// Function to get the number of days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Months abbreviation
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Layout mode variable
const layoutMode = "monthsLeft"; // Change to "monthsLeft" for the other layout

if (layoutMode === "monthsTop") {
  table.classList.add('months-top');

  // Months as headings (original layout)
  const rowHead = thead.insertRow();
  months.forEach(month => {
      const th = document.createElement('th');
      th.textContent = month;
      rowHead.appendChild(th);
  });

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
} else if (layoutMode === "monthsLeft") {
  // Find the max number of days in any month for the given year
  const maxDays = 31;
  table.classList.add('months-left');

  // Iterating through each month
  months.forEach((month, i) => {
      const row = tbody.insertRow();
      const headerCell = document.createElement('th');
      headerCell.textContent = month;
      row.appendChild(headerCell); // Month name as the row header
      
      const daysInMonth = getDaysInMonth(year, i + 1);
      // Add cells for each day in the month
      for (let j = 1; j <= daysInMonth; j++) {
          const cell = row.insertCell();
          cell.textContent = j.toString(); // Day of the month
      }
      // Add empty cells for the rest of the days to align with the month having max days
      for (let k = daysInMonth + 1; k <= maxDays; k++) {
          const cell = row.insertCell();
          cell.textContent = ""; // Empty cell for days not in the month
      }
  });
}

// Append the table to the root element
body.appendChild(table);
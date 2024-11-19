// Get the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Get the body element
const body = document.body;

// Function to toggle between dark and light themes
themeToggleButton.addEventListener("click", () => {
  // Toggle the theme class on the body element
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  // Change the text of the button based on the current theme
  if (body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Light Theme";
  } else {
    themeToggleButton.textContent = "Dark Theme";
  }
});

// Get the date picker and the selected date display element
const datePicker = document.getElementById("date-picker");
const selectedDateDisplay = document.getElementById("selected-date");
const previousDataBody = document.getElementById("previous-data-body");

// Example data for cities
const cityData = {
  "2024-11-19": {
    "Amritsar": { "12:00 PM": "01", "3:00 PM": "02", "6:00 PM": "03", "9:00 PM": "04" },
    "Ludhiana": { "12:00 PM": "05", "3:00 PM": "06", "6:00 PM": "07", "9:00 PM": "08" },
    "Jalandhar": { "12:00 PM": "09", "3:00 PM": "10", "6:00 PM": "11", "9:00 PM": "12" },
    "Chandigarh": { "12:00 PM": "13", "3:00 PM": "14", "6:00 PM": "15", "9:00 PM": "16" },
    "Gurdaspur": { "12:00 PM": "17", "3:00 PM": "18", "6:00 PM": "19", "9:00 PM": "20" },
    "Pathankot": { "12:00 PM": "21", "3:00 PM": "22", "6:00 PM": "23", "9:00 PM": "24" },
    "Patiala": { "12:00 PM": "25", "3:00 PM": "26", "6:00 PM": "27", "9:00 PM": "28" },
    "Jammu & Kashmir": { "12:00 PM": "29", "3:00 PM": "30", "6:00 PM": "31", "9:00 PM": "32" }
  },
  "2024-11-20": {
    "Amritsar": { "12:00 PM": "11", "3:00 PM": "03", "6:00 PM": "06", "9:00 PM": "02" },
    "Ludhiana": { "12:00 PM": "02", "3:00 PM": "01", "6:00 PM": "08", "9:00 PM": "04" },
    "Jalandhar": { "12:00 PM": "05", "3:00 PM": "40", "6:00 PM": "61", "9:00 PM": "16" },
    "Chandigarh": { "12:00 PM": "23", "3:00 PM": "54", "6:00 PM": "85", "9:00 PM": "18" },
    "Gurdaspur": { "12:00 PM": "47", "3:00 PM": "68", "6:00 PM": "13", "9:00 PM": "30" },
    "Pathankot": { "12:00 PM": "41", "3:00 PM": "32", "6:00 PM": "83", "9:00 PM": "74" },
    "Patiala": { "12:00 PM": "65", "3:00 PM": "26", "6:00 PM": "97", "9:00 PM": "88" },
    "Jammu & Kashmir": { "12:00 PM": "29", "3:00 PM": "30", "6:00 PM": "41", "9:00 PM": "39" }
  }
};



// Function to populate the table with data based on selected date
function populateTable(date) {
  // Clear previous data in the table
  previousDataBody.innerHTML = "";

  // Check if data exists for the selected date
  if (cityData[date]) {
    // Loop through each city and insert rows into the table
    Object.keys(cityData[date]).forEach(city => {
      const row = document.createElement("tr");

      // Create table cells for city and times
      const cityCell = document.createElement("td");
      cityCell.textContent = city;
      row.appendChild(cityCell);

      const times = cityData[date][city];
      Object.keys(times).forEach(time => {
        const timeCell = document.createElement("td");
        timeCell.textContent = times[time];
        row.appendChild(timeCell);
      });

      // Insert the row into the table body
      previousDataBody.appendChild(row);
    });
  } else {
    // If no data is available for the selected date
    const noDataRow = document.createElement("tr");
    const noDataCell = document.createElement("td");
    noDataCell.colSpan = 5;
    noDataCell.textContent = "No data available for the selected date.";
    noDataRow.appendChild(noDataCell);
    previousDataBody.appendChild(noDataRow);
  }
}

// Event listener to detect changes in the date picker
datePicker.addEventListener("change", (event) => {
  const selectedDate = event.target.value;
  selectedDateDisplay.textContent = `Selected Date: ${selectedDate}`;
  populateTable(selectedDate);
});

// Initial population of the table with today's date data
const today = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
datePicker.value = today; // Set the default date in the picker to today's date
selectedDateDisplay.textContent = `Selected Date: ${today}`;
populateTable(today);

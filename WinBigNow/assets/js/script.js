// Function to navigate to the Live Update Lottery Numbers page
function goToLivePage() {
  window.location.href = 'live-numbers.html'; // Redirect to the live numbers page
}

// Function to navigate to the Previous Data page
function goToPreviousDataPage() {
  window.location.href = 'previous-data.html'; // Redirect to the previous data page
}

// Function to toggle between dark and light themes
function toggleTheme() {
  const body = document.body;

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    document.getElementById('theme-toggle-btn').innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for Light Theme
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    document.getElementById('theme-toggle-btn').innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for Dark Theme
  }
}


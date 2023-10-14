function showTab(tabName) {
    // Hide all tables
    const tables = document.querySelectorAll('.capitaltable table');
    tables.forEach(table => table.style.display = 'none');

    // Highlight the selected tab
    const tabElements = document.querySelectorAll('.capitaltabletitle');
    tabElements.forEach(tabElement => tabElement.classList.remove('active'));
    document.getElementById(tabName + 'Tab').classList.add('active');

    // Show the selected table
    document.getElementById(tabName + 'Table').style.display = 'table';
}

// Show the default tab (e.g., Gainers)
showTab('gainers');

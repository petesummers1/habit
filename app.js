// Get the current date
var currentDate = new Date();

// Define an array of month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Define an array of day names
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Create a function to generate the calendar
function generateCalendar(year, month) {

  // Create a new date object with the specified year and month
  var date = new Date(year, month, 1);

  // Get the number of days in the specified month
  var numDays = new Date(year, month + 1, 0).getDate();

  // Create an empty table to hold the calendar
  var calendar = '<table>';

  // Add the month and year to the calendar
  calendar += '<thead><tr><th colspan="7">' + monthNames[month] + ' ' + year + '</th></tr>';

  // Add the day names to the calendar
  calendar += '<tr>';
  for (var i = 0; i < dayNames.length; i++) {
    calendar += '<th>' + dayNames[i] + '</th>';
  }
  calendar += '</tr></thead>';

  // Add the dates to the calendar
  calendar += '<tbody><tr>';
  for (var i = 0; i < date.getDay(); i++) {
    calendar += '<td></td>';
  }
  for (var i = 1; i <= numDays; i++) {
    if (date.getDay() == 0) {
      calendar += '</tr><tr>';
    }
    calendar += '<td>' + i + '</td>';
    date.setDate(date.getDate() + 1);
  }
  for (var i = date.getDay(); i < 7; i++) {
    calendar += '<td></td>';
  }
  calendar += '</tr></tbody></table>';

  // Return the generated calendar
  return calendar;
}

// Add the calendar to the page
document.getElementById('calendar').innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Make the month scrollable
var calendar = document.getElementById('calendar');
calendar.style.overflowX = 'scroll';
calendar.style.whiteSpace = 'nowrap';
calendar.style.display = 'flex';

// Make the dates appear as the top row
var thead = calendar.getElementsByTagName('thead')[0];
thead.style.position = 'sticky';
thead.style.top = '0';

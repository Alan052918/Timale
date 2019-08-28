// Two-digit-display enforcement
let checkDisplayDigits = display => {
  if (display < 10) {
    display = '0' + display;
  }
  return display;
}

// Live display of current time in movement of seconds.
window.onload = renderTime = () => {
  let currentTime = new Date();

  let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let currentMonth = monthArray[currentTime.getMonth()];
  let currentDate = currentTime.getDate();
  let currentYear = currentTime.getFullYear();
  let currentHour = checkDisplayDigits(currentTime.getHours());
  let currentMinute = checkDisplayDigits(currentTime.getMinutes());
  let currentSecond = checkDisplayDigits(currentTime.getSeconds());

  // Display
  document.querySelector('#upperText').textContent = currentMonth + ' ' + currentDate + ', ' + currentYear;

  document.querySelector('#clockDisplay').textContent = currentHour + ':' + currentMinute + ':' + currentSecond;

  // document.querySelector('#lowerText').textContent = 'Irvine, CA';

  setTimeout(renderTime, 1000);
};

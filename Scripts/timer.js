'use strict';

const displayStart = document.querySelector('#clockDisplay');
const minuteInput = document.querySelector('.inputminute');
const secondInput = document.querySelector('.inputsecond');
const set = document.querySelector('#na-mark-set');
const stop = document.querySelector('#na-stop');

let state = false;
let timePeriod = 0;
let timeId;

// initialize buttons and input fields
function initialize() {
  displayStart.addEventListener('click', startTiming);
  set.addEventListener('click', setTimePeriod);
  stop.addEventListener('click', stopTiming);
}

// Two-digit-display enforcement
function checkDisplayDigits(display) {
  if (display < 10) {
    display = '0' + display;
  }
  return display;
}

// display remaining time
function renderTime(time) {
  console.log('render:', time);

  let cHour = checkDisplayDigits(Math.floor(time / 3600000));
  time -= cHour * 3600000;
  let cMinute = checkDisplayDigits(Math.floor(time / 60000));
  time -= cMinute * 60000;
  let cSecond = checkDisplayDigits(Math.floor(time / 1000));

  // display
  displayStart.textContent = cHour + ':' + cMinute + ':' + cSecond;
}

// set time period
// listen to click on set button
function setTimePeriod() {
  if (state == false) {
    timePeriod = (minuteInput.value) * 60000 + (secondInput.value) * 1000; // timePeriod defined
    console.log('after set', timePeriod);

    let cHour = checkDisplayDigits(Math.floor(timePeriod / 3600000));
    timePeriod -= cHour * 3600000;
    let cMinute = checkDisplayDigits(Math.floor(timePeriod / 60000));
    timePeriod -= cMinute * 60000;
    let cSecond = checkDisplayDigits(Math.floor(timePeriod / 1000));

    // display
    displayStart.textContent = cHour + ':' + cMinute + ':' + cSecond;
  } else {
    console.log('Invalid set time, state:', state);
    alert('Not applicable\nTimer is on going');
  }
}

function stateKeeper(time) {
  if (state == true) {
    console.log('state keeper:', time);
    if (time > 0) {
      renderTime(time);
      time -= 1000;
      console.log('after decrement', time);
      setTimeout(stateKeeper, 1000, time);
    } else {
      displayStart.textContent = '00:00:00';
      state = false;
      console.log('finished');
      setTimeout(() => {
        alert('Time\'s up');
      }, 1);
      window.clearTimeout(timeId);
    }
  } else {
    console.log('state is false, timer ended');
    console.log(time);
  }
}

// start timing
function startTiming() {
  if (state == false) {
    console.log('started');
    state = true;
    let time = (minuteInput.value) * 60000 + (secondInput.value) * 1000;
    console.log('starting at', time);
    if (time <= 0) {
      console.log('Invalid time period');
      state = false;
      alert('Not applicable\nInvalid time period');
    } else {
      stateKeeper(time);
    }
  } else {
    console.log('timer already started');
    alert('Timer is already started');
  }
}

function stopTiming() {
  console.log('stopped');
  state = false;
  window.clearTimeout(timeId);
  displayStart.textContent = '00:00:00';
  timePeriod = 0;
}

initialize();

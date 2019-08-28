'use strict';

const displayStartPauseResume = document.querySelector('#clockDisplay');
const laps = document.querySelector('#na-laps');
const mark = document.querySelector('#na-mark-set');
const stop = document.querySelector('#na-stop');

// stopwatch state
// 0 - not started/fully stopped
// 1 - on going
// 2 - paused
let state = 0;
let startTime;
let pauseTime;
let resumeTime;
let timePaused = 0;
let recordArray = ['Lap Records'];

// initialize buttons
function initialize() {
  displayStartPauseResume.addEventListener('click', changeState);
  laps.addEventListener('click', displayLaps);
  mark.addEventListener('click', markLap);
  stop.addEventListener('click', stopTiming);
}

// Two-digit-display enforcement
function checkDisplayDigits(display) {
  if (display < 10) {
    display = '0' + display;
  }
  return display;
}

// live display of current time in movement of seconds.
// time recorded = renderTine moment - startTime - timePaused
function renderTime() {
  let timePeriod = Math.abs(new Date() - startTime - timePaused);
  console.log(timePeriod);

  let pHour = checkDisplayDigits(Math.floor(timePeriod / 3600000));
  timePeriod -= pHour * 3600000;
  let pMinute = checkDisplayDigits(Math.floor(timePeriod / 60000));
  timePeriod -= pMinute * 60000;
  let pSecond = checkDisplayDigits(Math.floor(timePeriod / 1000));
  let pMillisecond = timePeriod - pSecond * 1000;

  // display
  displayStartPauseResume.textContent = pHour + ':' + pMinute + ':' + pSecond + '.' + pMillisecond;
}

// start/pause/resume the stopwatch
// listening to the clock face click.
function changeState() {
  console.log('state changed');
  if (state == 0) { // not started/fully stopped
    console.log('started');
    state = 1;
    startTime = new Date();
    console.log(startTime);
  } else if (state == 1) { // started/on going
    console.log('paused');
    state = 2;
    pauseTime = new Date();
    console.log(pauseTime);
  } else if (state == 2) { // paused
    console.log('resumed');
    state = 1;
    resumeTime = new Date();
    timePaused += Math.abs(resumeTime - pauseTime);
    console.log(timePaused);
  }
  stateKeeper();
}

// render time if the stopwatch is on going
// refreshing time display per millisecond
function stateKeeper() {
  if (state == 1) {
    renderTime();
  }
  setTimeout(stateKeeper, 1);
}

// full stop
function stopTiming() {
  console.log('STOP invoked');
  state = 0;
  startTime;
  pauseTime;
  resumeTime;
  timePaused = 0;
  recordArray = ['Lap Records'];
  document.querySelector('#clockDisplay').textContent = '00:00:00.000';
}

// mark laps when the time is on going
// timePeriod = markLap moment - startTime - timePaused
function markLap() {
  if (state == 1) {
    let timePeriod = Math.abs(new Date() - startTime - timePaused);
    console.log(timePeriod);

    let pHour = checkDisplayDigits(Math.floor(timePeriod / 3600000));
    timePeriod -= pHour * 3600000;
    let pMinute = checkDisplayDigits(Math.floor(timePeriod / 60000));
    timePeriod -= pMinute * 60000;
    let pSecond = checkDisplayDigits(Math.floor(timePeriod / 1000));
    let pMillisecond = timePeriod - pSecond * 1000;

    if (pMillisecond % 100 == 0) {
      pMillisecond = pMillisecond.toString() + '00';
    } else if (pMillisecond % 10 == 0) {
      pMillisecond = pMillisecond.toString() + '0';
    }

    // record time
    console.log(pHour + ':' + pMinute + ':' + pSecond + '.' + pMillisecond);
    recordArray.push('\n' + pHour + ':' + pMinute + ':' + pSecond + '.' + pMillisecond);
    console.log(recordArray);
  } else {
    console.log('not applicable');
    alert('Not Applicable\nStopwatch is not on going');
  }
}

function displayLaps() {
  for (let i = 0; i < recordArray.length; i++) {
    console.log(recordArray[i].toString());
  }
  alert(recordArray.toString());
}

// initialize stopwatch
initialize();

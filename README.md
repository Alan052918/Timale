# Timale
This is a web tool collection about time, currently including a digital clock, a timer, and a stopwatch.

## Four pages

General stylesheet: style.css

Background image: steve-johnson-TnjzgonRFPU-unsplash.jpg retrieved from https://unsplash.com

- Homepage: index.html/homepage.css/homepage.js
    - Display local date, and time in seconds of the current position.
    - Click on "Timale" to return to homepage at all times.
- Timer: timer.html/timer.css/timer.js
    - Set time period for timing by entering minutes and seconds in the corresponding input fields.
    - Click "SET TIME" to refresh the digital clock to display the correct time period. This is to
      confirm the time period, if not needed, directly click on the digital clock to start the timer
      immediately.
        - Alert invoked if the timer is on going, when the alert pop up, the timer will be suspended.
    - Click on the digital clock to start timing after setting valid time period.
        - Alert invoked if the time period is not positive.
        - Alert invoked if clicking on the digital clock after the timer started.
    - Click "STOP" to stop timing and reset digital clock display to "00:00:00".
- Stopwatch: stopwatch.html/stopwatch.css/stopwatch.js
    - Initially click on the digital clock to start recording. Click on the digital clock after
      recording started to pause recording. Click on the digital clock after recording paused
      to resume recording, the resumed recording will start on the last paused time, the time
      between pause and resume will not be included.
    - Click on "MARK" to create a new lap record.
        - Alert invoked if clicking on "MARK" when the recording is not on going.
    - Click on "STOP" to stop and reset recording and digital clock display.
    - Click on "LAPS" to view all marked lap records from the last recording period (before
      clicking on "STOP") in a poped window. Notice that the digital clock display is suspended
      when the window pop up, but the recording is continued in the background.
- About: about.html/about.css

All source codes are originally written by Junda Ai.

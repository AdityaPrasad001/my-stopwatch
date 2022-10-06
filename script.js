"use strict";

// Global Variables
const timerElement = document.querySelector(".timer");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

//Event Listener
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// FUNCTION
//  A) UPDATE TIMER
function timer() {
  seconds++;

  // Updating time formats
  let hrs = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hrs * 3600) / 60);
  let sec = seconds % 60;

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  timerElement.textContent = `${hrs} : ${min} : ${sec}`;
}

// B) START
function start() {
  if (interval) {
    // if the interval is already running, then resturn.
    return;
  }
  // else
  interval = setInterval(timer, 1000);
}

// C) STOP
function stop() {
  // clear the interval
  clearInterval(interval);
  // setting the interval value to default null
  interval = null;
}

// D) RESET
function reset() {
  // call stop()
  stop();
  // set default status
  seconds = 0;
  timerElement.textContent = "00 : 00 : 00";
}

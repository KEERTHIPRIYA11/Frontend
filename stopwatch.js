let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
  }
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = false;
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("display").textContent = formattedTime;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);

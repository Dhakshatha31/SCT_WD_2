let startTime = 0, elapsedTime = 0, timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(ms){
  const totalSeconds = Math.floor(ms/1000);
  const hours = String(Math.floor(totalSeconds/3600)).padStart(2,'0');
  const minutes = String(Math.floor((totalSeconds%3600)/60)).padStart(2,'0');
  const seconds = String(totalSeconds%60).padStart(2,'0');
  return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").onclick = () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(()=> {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 1000);
  document.getElementById("start").disabled = true;
};

document.getElementById("pause").onclick = () => {
  clearInterval(timerInterval);
  document.getElementById("start").disabled = false;
};

document.getElementById("reset").onclick = () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
  document.getElementById("start").disabled = false;
};

document.getElementById("lap").onclick = () => {
  const li = document.createElement("li");
  li.textContent = `Lap: ${formatTime(elapsedTime)}`;
  laps.appendChild(li);
};

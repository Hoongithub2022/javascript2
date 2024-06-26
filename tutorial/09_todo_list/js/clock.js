const clock = document.querySelector(".clock");

function getWatch() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hours = hour < 10 ? `0${hour}` : `${hour}`;
  const minutes = min < 10 ? `0${min}` : `${min}`;
  const seconds = sec < 10 ? `0${sec}` : `${sec}`;

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function init() {
  getWatch();
  setInterval(getWatch, 500);
}
init();

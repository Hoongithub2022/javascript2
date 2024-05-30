const btns = document.querySelector(".btn");
const ball = document.querySelectorAll(".numbers li");
const list = document.querySelector(".list");

function paintNumber() {
  let lotto = [];

  while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    lotto.push(num);
  }
  console.log(lotto);
}

btns.addEventListener("click", () => {
  paintNumber();
});

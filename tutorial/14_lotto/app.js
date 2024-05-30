const btns = document.querySelector(".btn");
const ball = document.querySelectorAll(".numbers li");
const list = document.querySelector(".list");

let count = 0;

function addList(lotto) {
  const ul = document.createElement("ul");
  ul.className = "items";
  for (let i = 0; i < lotto.length; i++) {
    const li = document.createElement("li");
    li.innerText = lotto[i];
    ul.appendChild(li);
  }
  list.prepend(ul);
}

function paintNumber() {
  let lotto = [];

  while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!lotto.includes(num)) {
      lotto.push(num);
    }
  }

  ball.forEach((item, i) => {
    item.innerText = lotto[i];
  });

  addList(lotto);
}

btns.addEventListener("click", () => {
  if (count >= 10) {
    snackbar.createSnackbar("10번만 가능해요!", {
      actions: [
        {
          text: "확인",
          style: {
            color: "pink",
          },
          callback(button, snackbar) {
            snackbar.destroy();
          },
        },
      ],
    });
    btns.classList.add("none");
  } else {
    paintNumber();
    count++;
  }
});

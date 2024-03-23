let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const ResetBtn = () => {
  turn0 = true;
  enabledBtn();
  msgContainer.classList.add("hide");
};
// every box of boxes got diasbled
const disabledBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};
const Draw = () => {
  msg.innerText = `OOPS DRAW!!`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};
const checkWinner = () => {
  for (pattern of winningPattern) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;
    console.log(pos0, pos1, pos2);
    if (
      pos0 != "" &&
      pos1 != "" &&
      pos2 != "" &&
      pos0 === pos2 &&
      pos0 === pos1
    ) {
      console.log(`Hurrah!! ${pos0}`);
      showWinner(pos0);
    }
  }
};

const DrawCondition = () => {
  let ok = true;
  for (box of boxes) {
    ok &= box.innerText != "";
  }
  if (ok) {
    Draw();
  }
};

// const funt = () => {
//   console.log("Clicked");
// };
// boxes.forEach((box) => {
//   box.addEventListener("click", funt);
// });

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Clicked");
    // box.innerText = "ABCD";
    if (turn0 === true) {
      box.innerText = "O";
      box.classList.add("box0");
      box.classList.remove("box1");
    } else {
      box.innerText = "X";
      box.classList.remove("box0");
      box.classList.add("box1");
    }
    turn0 = !turn0;
    box.disabled = true;
    checkWinner();
    DrawCondition();
  });
});

resetBtn.addEventListener("click", ResetBtn);
newGameBtn.addEventListener("click", ResetBtn);

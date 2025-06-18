let boxes = document.querySelectorAll(".box");
let ResetBut = document.querySelector("#Reset-But");
let newGameBtn = document.querySelector("#New-But");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let RestBtn = document.querySelector("#Reset-But");


let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const showWinner = (Winner) => {
  msg.innerText = `Congratualtions, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let Val1 = boxes[pattern[0]].innerText;
    let Val2 = boxes[pattern[1]].innerText;
    let Val3 = boxes[pattern[2]].innerText;

    if (Val1 != "" && Val2 != "" && Val3 != "") {
      if (Val1 === Val2 && Val2 === Val3) {
        console.log("Winner", Val1);

        showWinner(Val1);
      }
    }
  }
};

const restGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", restGame);
ResetBut.addEventListener("click", restGame);

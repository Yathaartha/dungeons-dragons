const choices = [
  {
    a: "A",
    b: "B",
    c: "C",
  },
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
];

const content = document.querySelector(".cards");

const playerChoices = document.querySelectorAll(".card");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

let level = 0;

playerChoices.forEach((playerChoice) => {
  playerChoice.addEventListener("click", () => {
    const choiceTag = playerChoice.querySelector(".header");
    switch (choiceTag.textContent) {
      case "A":
        console.log("A");
        level++;
        renderNextChoices(0, level);
        break;
      case "B":
        console.log("B");
        level++;
        renderNextChoices(1, level);
        break;
      case "C":
        console.log("C");
        level++;
        renderNextChoices(2, level);
        break;
      default:
        break;
    }
  });
});

init = () => {
  choiceA.textContent = choices[0].a;
  choiceB.textContent = choices[0].b;
  choiceC.textContent = choices[0].c;
};

renderNextChoices = (choice, level) => {
  if (choices.length > level) {
    choiceA.textContent = choices[level][choice].a;
    choiceB.textContent = choices[level][choice].b;
    choiceC.textContent = choices[level][choice].c;
  } else {
    content.innerHTML = `<div class="card">
    <div class="content">

      <div class="description" id="A">
        The End
      </div>
    </div>
  </div>`;
  }
};

init();

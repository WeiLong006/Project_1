const cards = [
  "Drink 1",
  "Drink 2",
  "Drink 3",
  "Take 1 shot",
  "Take 2 shots",
  "Take 3 shots",
  "Swap seats",
  "Pick someone to pour you a drink",
  "Never Have i ever",
  "Guys drink 1",
  "Guys drink 2",
  "Guys drink 3",
  "Girls drink 1",
  "Girls drink 2",
  "Girls drink 3",
];

function draw() {
  const random = Math.floor(Math.random() * cards.length);
  const drawCard = cards[random];
  const display = document.querySelector("#card");
  console.log(drawCard);
  display.innerHTML = `${drawCard}`;
}

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", draw);

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

function setCards() {
  const pax = document.querySelector("#paxNum").value;
  console.log(pax);
}

// Get the modal
const modal = document.querySelector("#myModal");

// Start Button
const start = document.querySelector("#start");

// Submit button
const submit = document.querySelector("#submit");

// Call modal on start
start.addEventListener("click", function () {
  modal.style.display = "block";
});

// Submit to close the modal
submit.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

setCards();

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", draw);

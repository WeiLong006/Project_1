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

// function draw() {
//   // const random = Math.floor(Math.random() * cards.length);
//   // const drawCard = cards[random];
//   // const display = document.querySelector("#card");
//   // // console.log(drawCard);
//   // display.innerHTML = `${drawCard}`;
//   // clickCount += 1;
// }

function setCards(numPax) {
  let clickCount = 0;
  const pax = numPax * 10;
  let countPax = pax;
  console.log(pax);
  const nextButton = document.querySelector("#next");
  nextButton.addEventListener("click", function () {
    const random = Math.floor(Math.random() * cards.length);
    const drawCard = cards[random];
    const display = document.querySelector("#card");
    const countDown = document.querySelector("#countDown");
    // console.log(drawCard);
    display.innerHTML = `${drawCard}`;
    clickCount += 1;
    countPax -= 1;
    console.log(clickCount);
    countDown.innerHTML = `${countPax}`;

    if (clickCount >= pax) {
      // window.alert("Congratulations! Last player finishes their own glass!");
      display.innerHTML = `WINNER!! YOUR PRIZE IS TO FINSH YOUR DRINK!!!`;

      if (clickCount > pax) {
        nextButton.addEventListener("click", window.location.reload());
        clickCount = 0;
      }
    }
  });
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
  const paxNum = document.querySelector("#paxNum").value;
  if (paxNum > 0) {
    if (paxNum !== null) {
      modal.style.display = "none";
      document.querySelector(".game").style.display = "block";
      start.style.display = "none";
      setCards(paxNum);
    }
  } else {
    window.alert("Please enter a valid number");
  }
});

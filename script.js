//Selection deck
const selected = [];

//Basic Deck
const cards = [
  "Give 1",
  "Give 2",
  "Take 1",
  "Take 2",
  "Swap",
  "Pick one",
  "Never have i ever",
  "Guys drink 1",
  "Guys drink 2",
  "Girls drink 1",
  "Girls drink 2",
];

//Rules deck
const rules = [
  "Pay compliments",
  "No swearing",
  "Swear every time",
  "That's what she said",
  "Sing a song",
  "T-rex arms",
  "See what see",
  "Choo Choo",
  "Drinking buddy",
  "Remove a rule",
  "Create a rule",
];

//Naughty deck
const naughty = [
  "Hold the hand of the person on your left till your next turn",
  "Hold the hand of the person on your right till your next turn",
  "Sit on the lap of the person on your right till your next turn",
  "Sit on the lap of the person on your left till your next turn",
  "Give a massage for the person opposite you till your next turn",
  "Kiss the person on your left",
  "Kiss the person on your right",
  "Tell the person on your left how much you left him/her",
  "Tell the person on your right how much you left him/her",
  "Whisper a dirty joke to the person on your left, if they don't laugh, you drink",
  "Whisper a dirty joke to the person on your right, if they don't laugh, you drink",
];

function setCards(numPax, basicSelect, rulesSelect, naughtySelect) {
  // declarations
  let clickCount = 0;
  const pax = numPax * 10;
  let countPax = pax;
  // console.log(basicSelect, rulesSelect, naughtySelect);

  //creating function for next button, calling the next card after next button is clicked
  const nextButton = document.querySelector("#next");
  nextButton.addEventListener("click", function () {
    //declarations
    const random = Math.floor(Math.random() * selected.length);
    const totalCards = Math.floor(Math.random() * 11);
    const drawCard = selected[random][totalCards];
    const display = document.querySelector("#card");
    const countDown = document.querySelector("#countDown");
    const mainImg = document.querySelector("#mainImg");
    if (clickCount < pax) {
      if (basicSelect) {
        if (random === 0) {
          //Display card
          mainImg.src = `/Images/0/${drawCard}.png`;
          display.appendChild(mainImg);
        }
        if (random === 1) {
          //Display card
          mainImg.src = `/Images/1/${drawCard}.png`;
          display.appendChild(mainImg);
        }
        // if (random === 2) {
        //   //Display card
        //   mainImg.src = `/Images/2/${drawCard}.png`;
        //   display.appendChild(mainImg);
        // }
      } else if (rulesSelect) {
        if (random === 0) {
          //Display card
          mainImg.src = `/Images/1/${drawCard}.png`;
          display.appendChild(mainImg);
        }
        // if (random === 1){
        // //Display card
        // mainImg.src = `/Images/2/${drawCard}.png`;
        // display.appendChild(mainImg);
        // }
      }
    }

    //count down for both cards left and click count. Display cound down
    clickCount += 1;
    countPax -= 1;
    countDown.innerHTML = `${countPax}`;

    // if click count hits max number of cards
    if (clickCount >= pax) {
      // const img = document.createElement("img");
      const win = "Winner";
      mainImg.src = `/Images/${win}.png`;
      // img.src = "/Images/Winner.png";
      display.appendChild(mainImg);

      // reload page and click count when player clicks next after the max cards have been played
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

  //check if the input box value is valid
  let basicSelect = false;
  let rulesSelect = false;
  let naughtySelect = false;
  if (paxNum > 0) {
    if (paxNum !== null) {
      if (document.querySelector("#basic").checked) {
        selected.push(cards);
        basicSelect = true;
      }
      if (document.querySelector("#rules").checked) {
        selected.push(rules);
        rulesSelect = true;
      }
      if (document.querySelector("#naughty").checked) {
        selected.push(naughty);
        naughtySelect = true;
      }
      modal.style.display = "none";
      document.querySelector(".game").style.display = "block";
      start.style.display = "none";
      setCards(paxNum, basicSelect, rulesSelect, naughtySelect);
      console.log(selected);
    }
  } else {
    window.alert("Please enter a valid number");
  }
});

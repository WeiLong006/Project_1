//Selection deck
const selected = [];

//Basic Deck
const cards = [
  "Give 1 shots",
  "Give 2 shots",
  "Give 3 shots",
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

//Rules deck
const rules = [
  "Pay a compliment to someone before you drink till the end of the game",
  "No Swearing",
  "Swear every time you speak",
  "End every sentence you speak with that's what she said",
  "Sing a song. Last person to join in, drinks",
  "Start with a word, next player repeats your word and adds another. Player who can't repeat the chain, drinks",
  "You have T-Rex arms for the rest of the game",
  "Anyone who looks into your eyes for the rest of the game, drinks",
  "You are now a train, you must sound your horn and say Choo-Choo! everytime you speak for the rest of the game",
  "You are a Cave man and can only speak in 3 word sentences for the rest of the game",
  "You can only speak in slow-motion until your next turn",
  "Pick a drinking buddy, Each time you drink, your buddy drinks with you",
  "Take a drink, Show your drink how much you love it!",
  "Shout 'SORRY I FARTED' out loud each time before you drink for the rest of the game",
  "Remove a rule",
  "Make a rule",
];

//Naughty deck
const naughty = [
  "Hold the hand of the person beside you till your next turn",
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

function setCards(numPax) {
  // declarations
  let clickCount = 0;
  const pax = numPax * 10;
  let countPax = pax;

  //creating function for next button, calling the next card after next button is clicked
  const nextButton = document.querySelector("#next");
  nextButton.addEventListener("click", function () {
    //declarations
    const random = Math.floor(Math.random() * selected.length);
    const drawCard = selected[random];
    const display = document.querySelector("#card");
    const countDown = document.querySelector("#countDown");

    //Display card
    display.innerHTML = `${drawCard}`;

    //count down for both cards left and click count. Display cound down
    clickCount += 1;
    countPax -= 1;
    countDown.innerHTML = `${countPax}`;

    // if click count hits max number of cards
    if (clickCount >= pax) {
      display.innerHTML = `WINNER!! YOUR PRIZE IS TO FINSH YOUR DRINK!!!`;

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
  if (paxNum > 0) {
    if (paxNum !== null) {
      if (document.querySelector("#basic").checked) {
        selected.push(cards);
      }
      if (document.querySelector("#rules").checked) {
        selected.push(rules);
      }
      if (document.querySelector("#naughty").checked) {
        selected.push(naughty);
      }
      modal.style.display = "none";
      document.querySelector(".game").style.display = "block";
      start.style.display = "none";
      setCards(paxNum);
      console.log(selected);
    }
  } else {
    window.alert("Please enter a valid number");
  }
});

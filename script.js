//Selection deck
const selected = [];

//Basic Deck
const cards = [
  "Images/Basic/Give 1.png",
  "Images/Basic/Give 2.png",
  "Images/Basic/Take 1.png",
  "Images/Basic/Take 2.png",
  "Images/Basic/Swap.png",
  "Images/Basic/Pick one.png",
  "Images/Basic/Never have i ever.png",
  "Images/Basic/Guys drink 1.png",
  "Images/Basic/Guys drink 2.png",
  "Images/Basic/Girls drink 1.png",
  "Images/Basic/Girls drink 2.png",
];

//Rules deck
const rules = [
  "/Images/Rules/Pay compliments.png",
  "/Images/Rules/No swearing.png",
  "/Images/Rules/Swear every time.png",
  "/Images/Rules/That's what she said.png",
  "/Images/Rules/Sing a song.png",
  "/Images/Rules/T-rex arms.png",
  "/Images/Rules/See what see.png",
  "/Images/Rules/Choo Choo.png",
  "/Images/Rules/Drinking buddy.png",
  "/Images/Rules/Remove a rule.png",
  "/Images/Rules/Create a rule.png",
];

//Naughty deck
const naughty = [
  "/Images/Naughty/Hold hands left.png",
  "/Images/Naughty/Hold hands right.png",
  "/Images/Naughty/Sit left.png",
  "/Images/Naughty/Sit right.png",
  "/Images/Naughty/Massage.png",
  "/Images/Naughty/Kiss left.png",
  "/Images/Naughty/Kiss right.png",
  "/Images/Naughty/Secret Admirer.png",
  "/Images/Naughty/Shoot Shag Marry.png",
  "/Images/Naughty/Whisper left.png",
  "/Images/Naughty/Whisper right.png",
];

//Singapore deck
const Sg = [];

function setCards(numPax, basicSelect, rulesSelect, naughtySelect) {
  // declarations
  let clickCount = 0;
  const pax = numPax * 10;
  let countPax = pax;
  // console.log(basicSelect, rulesSelect, naughtySelect);

  //creating function for next button, calling the next card after next button is clicked
  const nextButton = document.querySelector("#next");
  nextButton.addEventListener("click", function () {
    //randoming the selection
    const random = Math.floor(Math.random() * selected.length);
    const totalCards = Math.floor(Math.random() * 11);
    const drawCard = selected[random][totalCards];

    //declarations for the components
    const display = document.querySelector("#card");
    const countDown = document.querySelector("#countDown");
    const mainImg = document.querySelector("#mainImg");

    //display cards
    document.querySelector("#header2").style.display = "none";
    document.querySelector("#countDownLabel").style.display = "block";
    countDown.style.display = "block";
    mainImg.src = drawCard;
    display.appendChild(mainImg);

    //count down for both cards left and click count. Display count down
    clickCount += 1;
    countPax -= 1;
    countDown.innerHTML = `${countPax}`;

    //Change background color dependent on deck
    if (drawCard.includes("Basic")) {
      document.body.style.backgroundColor = "green";
    }

    if (drawCard.includes("Rules")) {
      document.body.style.backgroundColor = "black";
    }

    if (drawCard.includes("Naughty")) {
      document.body.style.backgroundColor = "maroon";
    }

    // if click count hits max number of cards to display winner image
    if (clickCount >= pax) {
      const win = "Winner";
      mainImg.src = `/Images/${win}.png`;
      display.appendChild(mainImg);
      document.body.style.backgroundClip = "black";
      nextButton.innerText = "END!        ";

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

// Start Button and header to disappear
const start = document.querySelector("#start");
const head = document.querySelector("#header");
const startPic = document.querySelector("#startPic");

// Submit button
const submit = document.querySelector("#submit");

// Call modal on start
start.addEventListener("click", function () {
  modal.style.display = "block";
});

// Submit to close the modal
submit.addEventListener("click", function () {
  const paxNum = document.querySelector("#paxNum").value;

  //check if the input box value is valid and push the selected categories
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
      head.style.display = "none";
      startPic.style.display = "none";
      setCards(paxNum, basicSelect, rulesSelect, naughtySelect);
      console.log(selected);
    }
  } else {
    window.alert("Please enter a valid number");
  }
});

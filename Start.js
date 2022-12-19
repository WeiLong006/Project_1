function changePage() {
  const paxNum = document.querySelector("#paxNum").value;
  if (paxNum > 0) {
    if (paxNum !== null) {
      window.location.href = "http://127.0.0.1:5500/Index.html";
    }
  } else {
    window.alert("Please enter a valid number");
  }
  console.log(paxNum);
}

document.querySelector("#start").addEventListener("click", changePage);

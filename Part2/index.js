const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

const setCard = () => {
  const card = document.getElementById(idInput.value.toLowerCase());
  const errorMsg = document.getElementById("errorMsg");
  if (
    card !== "hearts" ||
    card !== "clubs" ||
    card !== "diamonds" ||
    card !== "spades"
  ) {
    alert(
      "Please enter either diamonds, clubs, hearts, or spades for card suit."
    );
  }
  card.style.color = colorInput.value;
};

const resetCards = () => {
  const cards = document.getElementsByTagName("section");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.color = "grey";
  }
  idInput.value = "";
  colorInput.value = "";
};

const changeBtn = document.getElementById("btn");
changeBtn.addEventListener("click", setCard, false);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCards, false);

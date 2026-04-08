const sections = {
  1: { start: 1, end: 10 },
  2: { start: 11, end: 19 },
  3: { start: 20, end: 28 },
  4: { start: 29, end: 31 }
};

const cardDescriptions = {
  1: "Explain how the three peg images connect to number 1.",
  2: "Explain how the three peg images connect to number 2.",
  3: "Explain how the three peg images connect to number 3.",
  4: "Explain how the three peg images connect to number 4.",
  5: "Explain how the three peg images connect to number 5.",
  6: "Explain how the three peg images connect to number 6.",
  7: "Explain how the three peg images connect to number 7.",
  8: "Explain how the three peg images connect to number 8.",
  9: "Explain how the three peg images connect to number 9.",
  10: "Explain how the three peg images connect to number 10.",
  11: "Explain how the three peg images connect to number 11.",
  12: "Explain how the three peg images connect to number 12.",
  13: "Explain how the three peg images connect to number 13.",
  14: "Explain how the three peg images connect to number 14.",
  15: "Explain how the three peg images connect to number 15.",
  16: "Explain how the three peg images connect to number 16.",
  17: "Explain how the three peg images connect to number 17.",
  18: "Explain how the three peg images connect to number 18.",
  19: "Explain how the three peg images connect to number 19.",
  20: "Explain how the three peg images connect to number 20.",
  21: "Explain how the three peg images connect to number 21.",
  22: "Explain how the three peg images connect to number 22.",
  23: "Explain how the three peg images connect to number 23.",
  24: "Explain how the three peg images connect to number 24.",
  25: "Explain how the three peg images connect to number 25.",
  26: "Explain how the three peg images connect to number 26.",
  27: "Explain how the three peg images connect to number 27.",
  28: "Explain how the three peg images connect to number 28.",
  29: "Explain how the three peg images connect to number 29.",
  30: "Explain how the three peg images connect to number 30.",
  31: "Explain how the three peg images connect to number 31."
};

const modal = document.getElementById("cardModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModalBtn = document.getElementById("closeModal");
const prevCardBtn = document.getElementById("prevCardBtn");
const nextCardBtn = document.getElementById("nextCardBtn");

let currentCardNumber = null;

function scrollToSection(section) {
  document.getElementById(`section-${section}`).scrollIntoView({
    behavior: "smooth"
  });
}

function clearSelectedCards() {
  document.querySelectorAll(".peg-card.selected").forEach(card => {
    card.classList.remove("selected");
  });
}

function highlightCard(cardNumber) {
  clearSelectedCards();
  const cardEl = document.querySelector(`.peg-card[data-card-number="${cardNumber}"]`);
  if (cardEl) {
    cardEl.classList.add("selected");
  }
}

function openModal(cardNumber) {
  currentCardNumber = cardNumber;
  modalImage.src = `assets/cards/${cardNumber}.png`;
  modalImage.alt = `Card ${cardNumber}`;
  modalTitle.textContent = `Card ${cardNumber}`;
  modalDescription.textContent = cardDescriptions[cardNumber] || "No explanation added yet.";
  modal.classList.remove("hidden");
  highlightCard(cardNumber);
}

function closeModal() {
  modal.classList.add("hidden");
}

function goToPreviousCard() {
  if (currentCardNumber > 1) {
    openModal(currentCardNumber - 1);
  }
}

function goToNextCard() {
  if (currentCardNumber < 31) {
    openModal(currentCardNumber + 1);
  }
}

function jumpToCard() {
  const input = document.getElementById("cardSearch");
  const cardNumber = parseInt(input.value, 10);

  if (isNaN(cardNumber) || cardNumber < 1 || cardNumber > 31) {
    alert("Enter a card number from 1 to 31.");
    return;
  }

  const cardEl = document.querySelector(`.peg-card[data-card-number="${cardNumber}"]`);
  if (cardEl) {
    cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
    highlightCard(cardNumber);

    setTimeout(() => {
      openModal(cardNumber);
    }, 350);
  }
}

function renderCards() {
  Object.keys(sections).forEach(sectionNum => {
    const { start, end } = sections[sectionNum];
    const container = document.getElementById(`section-${sectionNum}`);

    for (let i = start; i <= end; i++) {
      const cardEl = document.createElement("div");
      cardEl.className = "peg-card";
      cardEl.setAttribute("data-card-number", i);

      cardEl.innerHTML = `
        <img src="assets/cards/${i}.png" alt="Card ${i}">
        <div class="info">
          <h3>Card ${i}</h3>
          <p>${cardDescriptions[i]}</p>
        </div>
      `;

      cardEl.addEventListener("click", () => openModal(i));
      container.appendChild(cardEl);
    }
  });
}

closeModalBtn.addEventListener("click", closeModal);
prevCardBtn.addEventListener("click", goToPreviousCard);
nextCardBtn.addEventListener("click", goToNextCard);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.getElementById("cardSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    jumpToCard();
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.classList.contains("hidden")) return;

  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowLeft") {
    goToPreviousCard();
  } else if (event.key === "ArrowRight") {
    goToNextCard();
  }
});

renderCards();

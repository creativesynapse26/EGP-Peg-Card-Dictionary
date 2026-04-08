const sections = {
  1: { start: 1, end: 10 },
  2: { start: 11, end: 19 },
  3: { start: 20, end: 28 },
  4: { start: 29, end: 31 }
};

// Put your real explanations here later
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

function openModal(cardNumber) {
  modalImage.src = `assets/cards/${cardNumber}.png`;
  modalImage.alt = `Card ${cardNumber}`;
  modalTitle.textContent = `Card ${cardNumber}`;
  modalDescription.textContent = cardDescriptions[cardNumber] || "No explanation added yet.";
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function renderCards() {
  Object.keys(sections).forEach(sectionNum => {
    const { start, end } = sections[sectionNum];
    const container = document.getElementById(`section-${sectionNum}`);

    for (let i = start; i <= end; i++) {
      const cardEl = document.createElement("div");
      cardEl.className = "peg-card";

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

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderCards();

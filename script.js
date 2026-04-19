const cards = [
  {
    number: 1,
    section: 1,
    image: "assets/cards/1.png",
    title: "Peg 0",
    modalText: `Write the full explanation for Peg 0 here.

Example format:
• Image 1: Donut — explain why it connects
• Image 2: Egg — explain why it connects
• Image 3: Empty Glass — explain why it connects`
  },
  {
    number: 2,
    section: 1,
    image: "assets/cards/2.png",
    title: "Peg 1",
    modalText: `Write the full explanation for Peg 1 here.`
  },
  {
    number: 3,
    section: 1,
    image: "assets/cards/3.png",
    title: "Peg 2",
    modalText: `Write the full explanation for Peg 2 here.`
  },
  {
    number: 4,
    section: 1,
    image: "assets/cards/4.png",
    title: "Peg 3",
    modalText: `Write the full explanation for Peg 3 here.`
  },
  {
    number: 5,
    section: 1,
    image: "assets/cards/5.png",
    title: "Peg 4",
    modalText: `Write the full explanation for Peg 4 here.`
  },
  {
    number: 6,
    section: 1,
    image: "assets/cards/6.png",
    title: "Peg 5",
    modalText: `Write the full explanation for Peg 5 here.`
  },
  {
    number: 7,
    section: 1,
    image: "assets/cards/7.png",
    title: "Peg 6",
    modalText: `Write the full explanation for Peg 6 here.`
  },
  {
    number: 8,
    section: 1,
    image: "assets/cards/8.png",
    title: "Peg 7",
    modalText: `Write the full explanation for Peg 7 here.`
  },
  {
    number: 9,
    section: 1,
    image: "assets/cards/9.png",
    title: "Peg 8",
    modalText: `Write the full explanation for Peg 8 here.`
  },
  {
    number: 10,
    section: 1,
    image: "assets/cards/10.png",
    title: "Peg 9",
    modalText: `Write the full explanation for Peg 9 here.`
  },

  {
    number: 11,
    section: 2,
    image: "assets/cards/11.png",
    title: "Peg 10",
    modalText: `Write the full explanation for Peg 10 here.`
  },
  {
    number: 12,
    section: 2,
    image: "assets/cards/12.png",
    title: "Peg 11",
    modalText: `Write the full explanation for Peg 11 here.`
  },
  {
    number: 13,
    section: 2,
    image: "assets/cards/13.png",
    title: "Peg 20",
    modalText: `Write the full explanation for Peg 20 here.`
  },
  {
    number: 14,
    section: 2,
    image: "assets/cards/14.png",
    title: "Peg 22",
    modalText: `Write the full explanation for Peg 22 here.`
  },
  {
    number: 15,
    section: 2,
    image: "assets/cards/15.png",
    title: "Peg 30",
    modalText: `Write the full explanation for Peg 30 here.`
  },
  {
    number: 16,
    section: 2,
    image: "assets/cards/16.png",
    title: "Peg 60",
    modalText: `Write the full explanation for Peg 60 here.`
  },
  {
    number: 17,
    section: 2,
    image: "assets/cards/17.png",
    title: "Peg 70",
    modalText: `Write the full explanation for Peg 70 here.`
  },
  {
    number: 18,
    section: 2,
    image: "assets/cards/18.png",
    title: "Peg 80",
    modalText: `Write the full explanation for Peg 80 here.`
  },
  {
    number: 19,
    section: 2,
    image: "assets/cards/19.png",
    title: "Peg 90",
    modalText: `Write the full explanation for Peg 90 here.`
  },

  {
    number: 20,
    section: 3,
    image: "assets/cards/20.png",
    title: "Peg 100",
    modalText: `Write the full explanation for Peg 100 here.`
  },
  {
    number: 21,
    section: 3,
    image: "assets/cards/21.png",
    title: "Peg 200",
    modalText: `Write the full explanation for Peg 200 here.`
  },
  {
    number: 22,
    section: 3,
    image: "assets/cards/22.png",
    title: "Peg 300",
    modalText: `Write the full explanation for Peg 300 here.`
  },
  {
    number: 23,
    section: 3,
    image: "assets/cards/23.png",
    title: "Peg 400",
    modalText: `Write the full explanation for Peg 400 here.`
  },
  {
    number: 24,
    section: 3,
    image: "assets/cards/24.png",
    title: "Peg 500",
    modalText: `Write the full explanation for Peg 500 here.`
  },
  {
    number: 25,
    section: 3,
    image: "assets/cards/25.png",
    title: "Peg 600",
    modalText: `Write the full explanation for Peg 600 here.`
  },
  {
    number: 26,
    section: 3,
    image: "assets/cards/26.png",
    title: "Peg 700",
    modalText: `Write the full explanation for Peg 700 here.`
  },
  {
    number: 27,
    section: 3,
    image: "assets/cards/27.png",
    title: "Peg 800",
    modalText: `Write the full explanation for Peg 800 here.`
  },
  {
    number: 28,
    section: 3,
    image: "assets/cards/28.png",
    title: "Peg 900",
    modalText: `Write the full explanation for Peg 900 here.`
  },

  {
    number: 29,
    section: 4,
    image: "assets/cards/29.png",
    title: "Special Peg 1",
    modalText: `Write the full explanation for this special peg here.`
  },
  {
    number: 30,
    section: 4,
    image: "assets/cards/30.png",
    title: "Special Peg 2",
    modalText: `Write the full explanation for this special peg here.`
  },
  {
    number: 31,
    section: 4,
    image: "assets/cards/31.png",
    title: "Special Peg 3",
    modalText: `Write the full explanation for this special peg here.`
  }
];

const cardMap = new Map(cards.map(card => [card.number, card]));

const modal = document.getElementById("cardModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModalBtn = document.getElementById("closeModal");
const prevCardBtn = document.getElementById("prevCardBtn");
const nextCardBtn = document.getElementById("nextCardBtn");
const cardSearchInput = document.getElementById("cardSearch");

let currentCardNumber = null;

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
  const card = cardMap.get(cardNumber);
  if (!card) return;

  currentCardNumber = cardNumber;
  modalImage.src = card.image;
  modalImage.alt = card.title;
  modalTitle.textContent = card.title;
  modalDescription.textContent = card.modalText || "No explanation added yet.";
  modal.classList.remove("hidden");
  highlightCard(cardNumber);
}

function closeModal() {
  modal.classList.add("hidden");
  clearSelectedCards();
}

function goToPreviousCard() {
  if (currentCardNumber > 1) {
    openModal(currentCardNumber - 1);
  }
}

function goToNextCard() {
  if (currentCardNumber < cards.length) {
    openModal(currentCardNumber + 1);
  }
}

function jumpToCard() {
  const cardNumber = parseInt(cardSearchInput.value, 10);

  if (isNaN(cardNumber) || cardNumber < 1 || cardNumber > cards.length) {
    alert(`Enter a card number from 1 to ${cards.length}.`);
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
  cards.forEach(card => {
    const container = document.getElementById(`section-${card.section}`);
    if (!container) return;

    const cardEl = document.createElement("div");
    cardEl.className = "peg-card";
    cardEl.setAttribute("data-card-number", card.number);

    cardEl.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <div class="info">
        <h3>${card.title}</h3>
      </div>
    `;

    cardEl.addEventListener("click", () => openModal(card.number));
    container.appendChild(cardEl);
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

cardSearchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    jumpToCard();
  }
});

document.addEventListener("keydown", event => {
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

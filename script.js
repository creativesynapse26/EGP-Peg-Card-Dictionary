const cards = [
  {
    number: 1,
    image: "assets/cards/1.png",
    title: "Peg 0",
    modalText: `Write the full explanation for Peg 0 here.`,
  },
  {
    number: 2,
    image: "assets/cards/2.png",
    title: "Peg 1",
    modalText: `Write the full explanation for Peg 1 here.`,
  },
  {
    number: 3,
    image: "assets/cards/3.png",
    title: "Peg 2",
    modalText: `Write the full explanation for Peg 2 here.`,
  },
  {
    number: 4,
    image: "assets/cards/4.png",
    title: "Peg 3",
    modalText: `Write the full explanation for Peg 3 here.`,
  },
  {
    number: 5,
    image: "assets/cards/5.png",
    title: "Peg 4",
    modalText: `Write the full explanation for Peg 4 here.`,
  },
  {
    number: 6,
    image: "assets/cards/6.png",
    title: "Peg 5",
    modalText: `Write the full explanation for Peg 5 here.`,
  },
  {
    number: 7,
    image: "assets/cards/7.png",
    title: "Peg 6",
    modalText: `Write the full explanation for Peg 6 here.`,
  },
  {
    number: 8,
    image: "assets/cards/8.png",
    title: "Peg 7",
    modalText: `Write the full explanation for Peg 7 here.`,
  },
  {
    number: 9,
    image: "assets/cards/9.png",
    title: "Peg 8",
    modalText: `Write the full explanation for Peg 8 here.`,
  },
  {
    number: 10,
    image: "assets/cards/10.png",
    title: "Peg 9",
    modalText: `Write the full explanation for Peg 9 here.`,
  },

  {
    number: 11,
    image: "assets/cards/11.png",
    title: "Peg 10",
    modalText: `Write the full explanation for Peg 10 here.`,
  },
  {
    number: 12,
    image: "assets/cards/12.png",
    title: "Peg 11",
    modalText: `Write the full explanation for Peg 11 here.`,
  },
  {
    number: 13,
    image: "assets/cards/13.png",
    title: "Peg 20",
    modalText: `Write the full explanation for Peg 20 here.`,
  },
  {
    number: 14,
    image: "assets/cards/14.png",
    title: "Peg 22",
    modalText: `Write the full explanation for Peg 22 here.`,
  },
  {
    number: 15,
    image: "assets/cards/15.png",
    title: "Peg 30",
    modalText: `Write the full explanation for Peg 30 here.`,
  },
  {
    number: 16,
    image: "assets/cards/16.png",
    title: "Peg 33",
    modalText: `Write the full explanation for Peg 33 here.`,
  },
  {
    number: 17,
    image: "assets/cards/17.png",
    title: "Peg 40",
    modalText: `Write the full explanation for Peg 40 here.`,
  },
  {
    number: 18,
    image: "assets/cards/18.png",
    title: "Peg 44",
    modalText: `Write the full explanation for Peg 44 here.`,
  },
  {
    number: 19,
    image: "assets/cards/19.png",
    title: "Peg 50",
    modalText: `Write the full explanation for Peg 50 here.`,
  },
  {
    number: 20,
    image: "assets/cards/20.png",
    title: "Peg 55",
    modalText: `Write the full explanation for Peg 55 here.`,
  },
  {
    number: 21,
    image: "assets/cards/21.png",
    title: "Peg 60",
    modalText: `Write the full explanation for Peg 60 here.`,
  },
  {
    number: 22,
    image: "assets/cards/22.png",
    title: "Peg 66",
    modalText: `Write the full explanation for Peg 66 here.`,
  },
  {
    number: 23,
    image: "assets/cards/23.png",
    title: "Peg 70",
    modalText: `Write the full explanation for Peg 70 here.`,
  },
  {
    number: 24,
    image: "assets/cards/24.png",
    title: "Peg 77",
    modalText: `Write the full explanation for Peg 77 here.`,
  },
  {
    number: 25,
    image: "assets/cards/25.png",
    title: "Peg 80",
    modalText: `Write the full explanation for Peg 80 here.`,
  },
  {
    number: 26,
    image: "assets/cards/26.png",
    title: "Peg 88",
    modalText: `Write the full explanation for Peg 88 here.`,
  },
  {
    number: 27,
    image: "assets/cards/27.png",
    title: "Peg 90",
    modalText: `Write the full explanation for Peg 90 here.`,
  },
  {
    number: 28,
    image: "assets/cards/28.png",
    title: "Peg 99",
    modalText: `Write the full explanation for Peg 99 here.`,
  },

  {
    number: 29,
    image: "assets/cards/29.png",
    title: "Special Peg 1",
    modalText: `Write the full explanation for this special peg here.`,
  },
  {
    number: 30,
    image: "assets/cards/30.png",
    title: "Special Peg 2",
    modalText: `Write the full explanation for this special peg here.`,
  },
  {
    number: 31,
    image: "assets/cards/31.png",
    title: "Special Peg 3",
    modalText: `Write the full explanation for this special peg here.`,
  },
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
const searchBtn = document.getElementById("searchBtn");

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

function getSection(card) {
  const titleNumber = parseInt(card.title.replace(/\D/g, ""), 10);

  if (!Number.isNaN(titleNumber) && titleNumber >= 0 && titleNumber <= 9) {
    return 1;
  }

  if ([10, 20, 30, 40, 50, 60, 70, 80, 90].includes(titleNumber)) {
    return 2;
  }

  if ([11, 22, 33, 44, 55, 66, 77, 88, 99].includes(titleNumber)) {
    return 3;
  }

  return 4;
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
    }, 300);
  }
}

function renderCards() {
  cards.forEach(card => {
    const section = getSection(card);
    const container = document.getElementById(`section-${section}`);
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
searchBtn.addEventListener("click", jumpToCard);

modal.addEventListener("click", event => {
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

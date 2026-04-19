const cards = [
  {
    number: 1,
    image: "assets/cards/1.png",
    title: "Peg 0",
    modalText: `Zero is a donut with a hole so neat,
an egg that's round, and a glass with no treat.`,
  },
  {
    number: 2,
    image: "assets/cards/2.png",
    title: "Peg 1",
    modalText: `One is a candle standing tall and bright,
a flag on a pole, and a glass upright.`,
  },
  {
    number: 3,
    image: "assets/cards/3.png",
    title: "Peg 2",
    modalText: `Two is drumsticks, chopsticks too,
and a victory sign that clearly shows two.`,
  },
  {
    number: 4,
    image: "assets/cards/4.png",
    title: "Peg 3",
    modalText: `Three is a traffic light with colors three,
a trident with prongs, and a trike you can see.`,
  },
  {
    number: 5,
    image: "assets/cards/5.png",
    title: "Peg 4",
    modalText: `Four are the suits in the cards we explore,
four seasons, four directions — all point to four.`,
  },
  {
    number: 6,
    image: "assets/cards/6.png",
    title: "Peg 5",
    modalText: `Five are the senses that help us stay alive,
a stop sign, and fingers for a high-five.`,
  },
  {
    number: 7,
    image: "assets/cards/7.png",
    title: "Peg 6",
    modalText: `Six is a beehive with sides that click,
a snowflake, and spots on a die showing six.`,
  },
  {
    number: 8,
    image: "assets/cards/8.png",
    title: "Peg 7",
    modalText: `Seven's a rainbow up in the sky,
days in a week, and continents nearby.`,
  },
  {
    number: 9,
    image: "assets/cards/9.png",
    title: "Peg 8",
    modalText: `Eight is a spider with legs spread wide,
a compass, and an hourglass turned on its side.`,
  },
  {
    number: 10,
    image: "assets/cards/10.png",
    title: "Peg 9",
    modalText: `Nine are the planets we learn in space,
a cat's nine lives, and a cube with nine on its face.`,
  },

  {
    number: 11,
    image: "assets/cards/11.png",
    title: "Peg 10",
    modalText: `Ten are the pins at the end of the lane,
a target can score ten, and ten fingers help work again.`,
  },
  {
    number: 12,
    image: "assets/cards/12.png",
    title: "Peg 11",
    modalText: `Eleven is railroad tracks side by side,
pillars in pairs, and pause bars in line.`,
  },
  {
    number: 13,
    image: "assets/cards/13.png",
    title: "Peg 20",
    modalText: `Twenty is vision that's twenty-twenty clear,
binoculars help you see, and twenty dollars are here.`,
  },
  {
    number: 14,
    image: "assets/cards/14.png",
    title: "Peg 22",
    modalText: `Twenty-two is two swans shaped like twos,
a heart with two curves, and a double-double too.`,
  },
  {
    number: 15,
    image: "assets/cards/15.png",
    title: "Peg 30",
    modalText: `Thirty is a month with days around that mark,
the moon goes through its cycle, and half an hour on the clock.`,
  },
  {
    number: 16,
    image: "assets/cards/16.png",
    title: "Peg 33",
    modalText: `Thirty-three is ears that curl like threes,
a spine with thirty-three bones, and a radio's humming breeze.`,
  },
  {
    number: 17,
    image: "assets/cards/17.png",
    title: "Peg 40",
    modalText: `Forty is a life ring floating through the flood,
Noah's ark sailed forty days through water, rain, and mud.`,
  },
  {
    number: 18,
    image: "assets/cards/18.png",
    title: "Peg 44",
    modalText: `Forty-four is sailboats, a bridge with beams in view,
and a four-by-four jeep with power through and through.`,
  },
  {
    number: 19,
    image: "assets/cards/19.png",
    title: "Peg 50",
    modalText: `Fifty is a jubilee medal shining bright,
a battery at fifty, and a discount cut just right.`,
  },
  {
    number: 20,
    image: "assets/cards/20.png",
    title: "Peg 55",
    modalText: `Fifty-five is the speed limit on the sign,
the police may check it, and double nickels rhyme.`,
  },

  // Keep these as placeholders for now until you send the next cards
  {
    number: 21,
    image: "assets/cards/21.png",
    title: "Peg 60",
    modalText: `Write the rhyme for Peg 60 here.`,
  },
  {
    number: 22,
    image: "assets/cards/22.png",
    title: "Peg 66",
    modalText: `Write the rhyme for Peg 66 here.`,
  },
  {
    number: 23,
    image: "assets/cards/23.png",
    title: "Peg 70",
    modalText: `Write the rhyme for Peg 70 here.`,
  },
  {
    number: 24,
    image: "assets/cards/24.png",
    title: "Peg 77",
    modalText: `Write the rhyme for Peg 77 here.`,
  },
  {
    number: 25,
    image: "assets/cards/25.png",
    title: "Peg 80",
    modalText: `Write the rhyme for Peg 80 here.`,
  },
  {
    number: 26,
    image: "assets/cards/26.png",
    title: "Peg 88",
    modalText: `Write the rhyme for Peg 88 here.`,
  },
  {
    number: 27,
    image: "assets/cards/27.png",
    title: "Peg 90",
    modalText: `Write the rhyme for Peg 90 here.`,
  },
  {
    number: 28,
    image: "assets/cards/28.png",
    title: "Peg 99",
    modalText: `Write the rhyme for Peg 99 here.`,
  },

  {
    number: 29,
    sectionOverride: 4,
    image: "assets/cards/29.png",
    title: "Special Peg 1",
    modalText: `Write the rhyme for Special Peg 1 here.`,
  },
  {
    number: 30,
    sectionOverride: 4,
    image: "assets/cards/30.png",
    title: "Special Peg 2",
    modalText: `Write the rhyme for Special Peg 2 here.`,
  },
  {
    number: 31,
    sectionOverride: 4,
    image: "assets/cards/31.png",
    title: "Special Peg 3",
    modalText: `Write the rhyme for Special Peg 3 here.`,
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
  if (card.sectionOverride) {
    return card.sectionOverride;
  }

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

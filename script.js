const cards = [
  { number: 1, image: "assets/cards/card-01.png", section: 1, title: "Card 1", description: "Explain the 3 peg-image links here." },
  { number: 2, image: "assets/cards/card-02.png", section: 1, title: "Card 2", description: "Explain the 3 peg-image links here." },
  { number: 3, image: "assets/cards/card-03.png", section: 1, title: "Card 3", description: "Explain the 3 peg-image links here." },
  { number: 4, image: "assets/cards/card-04.png", section: 1, title: "Card 4", description: "Explain the 3 peg-image links here." },
  { number: 5, image: "assets/cards/card-05.png", section: 1, title: "Card 5", description: "Explain the 3 peg-image links here." },
  { number: 6, image: "assets/cards/card-06.png", section: 1, title: "Card 6", description: "Explain the 3 peg-image links here." },
  { number: 7, image: "assets/cards/card-07.png", section: 1, title: "Card 7", description: "Explain the 3 peg-image links here." },
  { number: 8, image: "assets/cards/card-08.png", section: 1, title: "Card 8", description: "Explain the 3 peg-image links here." },
  { number: 9, image: "assets/cards/card-09.png", section: 1, title: "Card 9", description: "Explain the 3 peg-image links here." },
  { number: 10, image: "assets/cards/card-10.png", section: 1, title: "Card 10", description: "Explain the 3 peg-image links here." },

  { number: 11, image: "assets/cards/card-11.png", section: 2, title: "Card 11", description: "Explain the 3 peg-image links here." },
  { number: 12, image: "assets/cards/card-12.png", section: 2, title: "Card 12", description: "Explain the 3 peg-image links here." },
  { number: 13, image: "assets/cards/card-13.png", section: 2, title: "Card 13", description: "Explain the 3 peg-image links here." },
  { number: 14, image: "assets/cards/card-14.png", section: 2, title: "Card 14", description: "Explain the 3 peg-image links here." },
  { number: 15, image: "assets/cards/card-15.png", section: 2, title: "Card 15", description: "Explain the 3 peg-image links here." },
  { number: 16, image: "assets/cards/card-16.png", section: 2, title: "Card 16", description: "Explain the 3 peg-image links here." },
  { number: 17, image: "assets/cards/card-17.png", section: 2, title: "Card 17", description: "Explain the 3 peg-image links here." },
  { number: 18, image: "assets/cards/card-18.png", section: 2, title: "Card 18", description: "Explain the 3 peg-image links here." },
  { number: 19, image: "assets/cards/card-19.png", section: 2, title: "Card 19", description: "Explain the 3 peg-image links here." },

  { number: 20, image: "assets/cards/card-20.png", section: 3, title: "Card 20", description: "Explain the 3 peg-image links here." },
  { number: 21, image: "assets/cards/card-21.png", section: 3, title: "Card 21", description: "Explain the 3 peg-image links here." },
  { number: 22, image: "assets/cards/card-22.png", section: 3, title: "Card 22", description: "Explain the 3 peg-image links here." },
  { number: 23, image: "assets/cards/card-23.png", section: 3, title: "Card 23", description: "Explain the 3 peg-image links here." },
  { number: 24, image: "assets/cards/card-24.png", section: 3, title: "Card 24", description: "Explain the 3 peg-image links here." },
  { number: 25, image: "assets/cards/card-25.png", section: 3, title: "Card 25", description: "Explain the 3 peg-image links here." },
  { number: 26, image: "assets/cards/card-26.png", section: 3, title: "Card 26", description: "Explain the 3 peg-image links here." },
  { number: 27, image: "assets/cards/card-27.png", section: 3, title: "Card 27", description: "Explain the 3 peg-image links here." },
  { number: 28, image: "assets/cards/card-28.png", section: 3, title: "Card 28", description: "Explain the 3 peg-image links here." },

  { number: 29, image: "assets/cards/card-29.png", section: 4, title: "Card 29", description: "Explain the 3 peg-image links here." },
  { number: 30, image: "assets/cards/card-30.png", section: 4, title: "Card 30", description: "Explain the 3 peg-image links here." },
  { number: 31, image: "assets/cards/card-31.png", section: 4, title: "Card 31", description: "Explain the 3 peg-image links here." }
];

function renderCards() {
  cards.forEach(card => {
    const container = document.getElementById(`section-${card.section}`);

    const cardEl = document.createElement("div");
    cardEl.className = "peg-card";

    cardEl.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <div class="info">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    `;

    container.appendChild(cardEl);
  });
}

renderCards();

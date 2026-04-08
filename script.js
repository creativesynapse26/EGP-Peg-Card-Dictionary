const sections = {
  1: { start: 1, end: 10 },
  2: { start: 11, end: 19 },
  3: { start: 20, end: 28 },
  4: { start: 29, end: 31 }
};

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
          <p>Explain the 3 peg-image links for ${i} here.</p>
        </div>
      `;

      container.appendChild(cardEl);
    }
  });
}

renderCards();

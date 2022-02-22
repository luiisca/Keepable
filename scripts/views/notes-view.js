const NotesView = (function () {
  let rows = 0;
  const generateTemplate = () => `
    ${NoteForm}
    <div class="notes-container">
      <span class="label font-label font-label--small mb-2">ALL NOTES</span>
      ${Cards}
    </div>
  `;

  const layoutNotes = () => {
    const notesContainer = document.querySelector(".notes-container");
    const notesContainerWidth = notesContainer.clientWidth;

    const cards = document.querySelectorAll(".note-card");
    const cardsLength = cards.length;
    
    const columns = Math.floor(notesContainerWidth / cards[0].clientWidth);
    const columnsIterable = new Array(columns).fill(0);

    for (let i = 0; i < cardsLength; i++) {
      const CARD_WIDTH = 256;
      const LABEL_CARD_DISTANCE = 8;

      let x = i * CARD_WIDTH;
      let y = LABEL_CARD_DISTANCE;
      cards[i].style.transform = `translate(0px, 0px)`;

      if (x + CARD_WIDTH < notesContainerWidth) {
        cards[i].style.transform = `translate(${x}px, ${y}px)`;
      } else {
        rows++;
        x = 
        cards[i].style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  const listenWindow = () => {
    window.addEventListener("load", layoutNotes);
  };

  const listenWindowResize = () => {
    window.addEventListener("resize", layoutNotes);
  };

  return {
    toString() {
      return generateTemplate();
    },
    addListeners() {
      NoteForm.addListeners();
      // listenWindowResize();
      // listenWindow();
    },
  };
})();

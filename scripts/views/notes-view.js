import Cards from "../components/cards.js";
import NoteForm from "../components/note-form.js";

const NotesView = (function () {
  const generateTemplate = () => `
    ${NoteForm}
    <div class="notes-container">
      <span class="label font-label font-label--small mb-2">ALL NOTES</span>
      ${Cards}
    </div>
  `;

  const animateNote = (note, x, y) => {
    note.animate([
      { transform: `translate(${x}px, ${y}px)` }
    ], {
      duration: 369,
      iterations: 1,
    })
  }

  const layoutNotes = () => {
    let rows = 1;

    const CARD_WIDTH = 256;
    const Y_GAP = 16;
    const LABEL_CARD_DISTANCE = 8;

    const notesContainer = document.querySelector(".notes-container");
    const notesContainerWidth = notesContainer.clientWidth;

    const cards = Array.from(document.querySelectorAll(".note-card"));
    const cardsLength = cards.length;
    
    const columns = Math.floor(notesContainerWidth / CARD_WIDTH);

    
    cards.forEach((note, i) => {
      const noteId = +note.dataset.id;

      let crrUpperEl = noteId;
      let upperEls = [];
      while (crrUpperEl >= 0) {
        crrUpperEl -= columns;
        if (crrUpperEl <= 0) break;

        upperEls.push(cards.find(el => +el.dataset.id == crrUpperEl)?.clientHeight);
      }

      let crrColumn = noteId - ((rows - 1) * columns);

      const calcX = (crrColumn) => (crrColumn - 1) * CARD_WIDTH;

      let xAxis = calcX(crrColumn);
      let yAxis = LABEL_CARD_DISTANCE + upperEls.reduce((acc, curr) => acc + curr, 0) + upperEls.length * Y_GAP;
      note.style.transform = `translate(0px, 0px)`;

      if (xAxis + CARD_WIDTH <= notesContainerWidth) {
        const x = calcX(crrColumn);

        animateNote(note, x, yAxis);
        note.style.transform = `translate(${x}px, ${yAxis}px)`;
      } else {
        rows++;
        const x = calcX(crrColumn - columns);
        
        animateNote(note, x, yAxis);
        note.style.transform = `translate(${x}px, ${yAxis}px)`;
      }
    });
  }

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
      layoutNotes();
      NoteForm.addListeners();
      listenWindowResize();
      listenWindow();
    },
  };
})();

export default NotesView;
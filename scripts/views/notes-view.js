const NotesView = (function () {
  let rows = 1;
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

    const cards = Array.from(document.querySelectorAll(".note-card"));
    const cardsLength = cards.length;
    
    const columns = Math.floor(notesContainerWidth / cards[0].clientWidth);

    
    cards.forEach((note, i) => {
      const CARD_WIDTH = 256;
      const LABEL_CARD_DISTANCE = 8;
      
      const noteId = +note.dataset.id;
      
      const topperEls = cards.filter((el, i) => 
        +el.dataset.id === noteId - i * columns
      )

      // console.log(topperEls.map(el => el.dataset.id), 'current element:', noteId);

      let crrColumn = noteId - ((rows - 1) * columns);
      // console.log(+note.dataset["id"]);

      const calcX = (crrColumn) => (crrColumn - 1) * CARD_WIDTH;

      let xAxis = calcX(crrColumn);
      let yAxis = LABEL_CARD_DISTANCE;
      cards[i].style.transform = `translate(0px, 0px)`;

      if (xAxis + CARD_WIDTH < notesContainerWidth) {
        console.log('crrColumn', crrColumn, 'x:', xAxis, 'noteid', noteId, 'columns', columns);

        const x = calcX(crrColumn);
        cards[i].style.transform = `translate(${x}px, ${yAxis}px)`;
      } else {
        rows++;
        const x = calcX(crrColumn - columns);
        console.log('crrColumn', crrColumn, 'x:', x, 'noteid', noteId, 'columns', columns);
        cards[i].style.transform = `translate(${x}px, ${yAxis}px)`;
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
      NoteForm.addListeners();
      listenWindowResize();
      listenWindow();
    },
  };
})();

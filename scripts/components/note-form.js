const NoteForm = (function () {
  const template = `
  <form class="note-form">
    <input type="text" placeholder="Title">
    <input type="text" placeholder="Take a note...">
    <div>
      <button class="material-icons-outlined">
        palette
      </button>
      <button class="material-icons-outlined">
        image
      </button>
      <button>Close</button>
    </div>
  </form>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

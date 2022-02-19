const NotesView = (function () {
  const template = `
    ${NoteForm}
    <span>ALL NOTES</span>
    ${Card}
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

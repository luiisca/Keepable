const TrashView = (function () {
  const template = `
    ${NoteForm}
    <span>DELETED NOTES</span>
    ${Card}
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

const TrashView = (function () {
  const template = `
    ${NoteForm}
    <span class="font-label font-label--small">DELETED NOTES</span>
    ${Cards}
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

const NoteForm = (function () {
  const template = `
  <form class="note-form">
    <input class="note-form__title font-title font-title--medium" type="text" placeholder="Title">

    <input class="note-form__content font-body font-body--medium" type="text" placeholder="Take a note...">

    <button class="button button--floating-top">
      <span class="material-icons-outlined">push_pin</span>
    </button>

    <div class="note-form__buttons mb-1">
      <div class="left-buttons-cont">
        <button class="button button--small">
          <span class="material-icons-outlined">palette</span>
        </button>

        <button class="button button--small">
          <span class="material-icons-outlined">image</span>
        </button>
      </div>

      <button class="button--type--close font-label font-label--large">Close</button>
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

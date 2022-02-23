import Store from "../store.js";
import NotesView from "../views/notes-view.js";

import { Main } from "../../index.js";

const NoteForm = (function () {
  const template = `
  <form class="note-form form mb-2">
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

  const listenSubmit = () => {
    const noteForm = document.querySelector(".note-form");
    noteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = noteForm.querySelector(".note-form__title").value;
      const content = noteForm.querySelector(".note-form__content").value;

      Store.addNote(title, content);
      Main.render(NotesView);
    })
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenSubmit();
    },
  };
})();

export default NoteForm;
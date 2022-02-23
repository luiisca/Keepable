import Store from "../store.js";

const Cards = (function () {
  const generateTemplate = () => Store.getNotes().map((note) => {
    return `
    <div class="note-card" data-id=${note.id}>
      <div class="note-card__img-cont">
        <img src="images/tmp-back.jpg" alt="">
      </div>
  
      <div class="note-card__content">
        <h2 class="note-card__title font-title font-title--medium mb-1">${note.title}</h2>
  
        <button class="button button--floating-top">
          <span class="material-icons-outlined">push_pin</span>
        </button>
  
        <p class="note-card__text font-body font-body--medium">${note.content}</p>
      </div>
  
      <div class="note-card__buttons">
        <button class="button button--small">
          <span class="material-icons-outlined">palette</span>
        </button>
  
        <button class="button button--small">
          <span class="material-icons-outlined">image</span>
        </button>
  
        <button class="button button--small">
          <span class="material-icons-outlined">delete</span>
        </button>
      </div>
    </div>
    `;
  }).join('');

  return {
    toString() {
      return generateTemplate();
    },
    addListeners() {},
  };
})();

export default Cards;
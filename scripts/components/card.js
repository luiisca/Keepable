const Card = (function () {
  const template = `
  <div class="note-card">
    <img src="" alt="">

    <div class="note-card__content">
      <h2 class="note-card__title">Title</h2>
      <p class="note-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate distinctio dolorum molestiae consectetur, at delectus aliquam adipisci sequi quaerat, itaque dolore quae tempore sint aliquid, harum illum praesentium officiis.</p>
    </div>

    <div class="note-card__footer">
      <button class="material-icons-outlined">
        palette
      </button>

      <button class="material-icons-outlined">
        image
      </button>

      <button class="material-icons-outlined">
        delete
      </button>
    </div>
  </div>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

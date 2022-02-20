const Card = (function () {
  const template = `
  <div class="note-card">
    <div class="note-card__img-cont">
      <img src="images/tmp-back.jpg" alt="">
    </div>

    <div class="note-card__content">
      <h2 class="note-card__title font-title font-title--medium mb-1">Title</h2>

      <button class="button button--floating-top">
        <span class="material-icons-outlined">push_pin</span>
      </button>

      <p class="note-card__text font-body font-body--medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate distinctio dolorum molestiae consectetur, at delectus aliquam adipisci sequi quaerat, itaque dolore quae tempore sint aliquid, harum illum praesentium officiis.</p>
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

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

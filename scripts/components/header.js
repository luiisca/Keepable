const Header = (function () {
  const template = `
  <section class="section">
    <header>
    <span class="material-icons-outlined"> menu </span>
    <h1 class="heading">Keepable</h1>
    <div class="search-bar">
    <span class="material-icons-outlined"> search </span>
    <input type="text" placeholder="Search" />
    </div>
    </header>
  </section>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

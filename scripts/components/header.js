const Header = (function () {
  const template = `
  <header class="header flex mb-2">
    <button class="header__menu-button button">
      <span class="header__menu-icon material-icons-outlined"> menu </span>
    </button>

    <div class="logo-container flex">
      <img src="images/logo.png" alt="logo" class="logo">
      <h1 class="font-display font-display--small">Keepable</h1>
    </div>

    <form class="header__search-bar flex">
      <button class="header__search-button button">
        <span class="header__search-icon material-icons-outlined"> search </span>
      </button>
      <input class="header__input font-title font-title--medium" type="text" placeholder="Search" />
    </form>
  </header>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

export default Header;
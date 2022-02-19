const Layout = (function () {
  const template = `
    ${Header}
    ${NavRail}
    <main class='js-main'></main>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {
      NavRail.addListeners();
    },
  };
})();

import Header from "../components/header.js";
import NavRail from "../components/nav-rail.js";

const Layout = (function () {
  const template = `
    ${Header}
    <div class="content">
      ${NavRail}
      <main class='js-main'></main>
    </div>
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

export default Layout;
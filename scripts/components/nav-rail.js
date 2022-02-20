const NavRail = (function () {
  const template = `
  <aside class="nav-rail">
    <a href="#" class="nav-rail__lnk nav-rail__lnk--active nav-rail__notes" data-current=true>
      <button class="nav-rail__button button">
        <span class="nav-rail__icon material-icons-outlined">
          book
        </span>
      </button>
      <p class="nav-rail__label font-title font-title--small">Notes</p>
    </a>
    <a href="#" class="nav-rail__lnk nav-rail__trash" data-current=false>
      <button class="nav-rail__button button">
        <span class="nav-rail__icon material-icons-outlined">
          delete
        </span>
      </button>         
      <p class="font-title font-title--small">Trash</p>
    </a>
  </aside>
  `;

  const listenRailLink = function () {
    const navRail = document.querySelector(".nav-rail");

    navRail.addEventListener("click", function (e) {
      // if nav-rails__notes link is clicked and if we're not in the notes view then it renders it
      if (evalTarget(e.target, "nav-rail__notes")) {
        Main.render(NotesView);
        changeLinksState("notesLink");
      };
      // otherwise it evaluates for the other link to be clicked and not to be in the trash view
      if (evalTarget(e.target, "nav-rail__trash")) {
        Main.render(TrashView);
        changeLinksState("trashLink");
      }
    });
  };

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenRailLink();
    },
  };
})();

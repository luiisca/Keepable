const NavRail = (function () {
  const template = `
  <section class="section">
    <aside class="nav-rail">
      <a href="#" class="nav-rail__lnk nav-rail__notes" data-current=true>
        <span class="material-icons-outlined">
          book
        </span>
        <p>Notes</p>
      </a>
      <a href="#" class="nav-rail__lnk nav-rail__trash" data-current=false>
        <span class="material-icons-outlined">
          delete
          </span>          
        <p>Trash</p>
      </a>
    </aside>
  </section>
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

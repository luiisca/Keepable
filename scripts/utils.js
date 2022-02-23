const evalTarget = (target, link) => {
  const targetParent = target.parentElement;

  return (targetParent.classList.contains(link) || 
          target.classList.contains(link)) &&
          (targetParent.dataset.current === "false" ||
            target.dataset.current === "false")
}

const changeLinksState = (clickedLink) => {
  const notesLink = document.querySelector(".nav-rail__notes");
  const trashLink = document.querySelector(".nav-rail__trash");

  notesLink.dataset.current = clickedLink === 'notesLink' ? true : false;
  trashLink.dataset.current = clickedLink === 'trashLink' ? true : false;
}

export { evalTarget, changeLinksState };
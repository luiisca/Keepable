function domHandler(parentSelector) {
  const parent = document.querySelector(parentSelector);

  if (!parent) console.error(`${parentSelector} not found`);

  return {
    render(component) {
      parent.innerHTML = component;
      component.addListeners();
    }
  }
}
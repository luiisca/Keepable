const domHandler = function() {
  console.log('first');
  const parent = document.querySelector('#root');
  console.log(parent);

  if (!parent) console.error('#root not found');

  return function load(component) {
    parent.innerHTML = component.template;
    component.addListeners();
  }
}

function component() {
  const element = document.createElement('div');

  element.innerHTML = '<h1> hello</h1>';

  return element;
}
document.body.appendChild(component());

console.log('dfsd');
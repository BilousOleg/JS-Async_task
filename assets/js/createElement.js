// Спрощений варіант функції-утиліти для створення DOM-елементів
function createElement(tag, options = {}, ...children) {
  const elem = document.createElement(tag);
  // Optional Chaining Syntax
  if (options?.classNames) {
    elem.classList.add(...options.classNames);
  }
  if (options?.attributes) {
    // Деструктуризація Object.entries для зручності
    Object.entries(options.attributes).forEach(([name, value]) => {
      elem.setAttribute(name, value);
    });
  }
  elem.append(...children);
  return elem;
}

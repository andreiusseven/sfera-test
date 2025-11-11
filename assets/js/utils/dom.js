export const el = (tag, options = {}) => {
  const node = document.createElement(tag);
  if (options.className) node.className = options.className;
  if (options.text) node.textContent = options.text;
  if (options.html) node.innerHTML = options.html;
  if (options.attrs) Object.entries(options.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
};

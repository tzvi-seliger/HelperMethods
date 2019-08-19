function returnHTML(element, attrs, child) {
  var el = document.createElement(element);
  var previousClass = "";
  for (let attr in attrs) {
    if (attrs[attr] === "class") {
      previousClass += attr + " ";
      el.setAttribute(attrs[attr], previousClass);
    } else {
      el.setAttribute(attrs[attr], attr);
    }
  }
  if (child) el.innerHTML = child;
  return el;
}

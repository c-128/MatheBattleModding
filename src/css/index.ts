import css_base from "./base.txt";

export default function initCss() {
  addCssString(css_base);
}

function addCssString(css: string) {
  const element = document.createElement("style");
  element.innerHTML = css;
  document.head.appendChild(element);
}
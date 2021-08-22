import { getCssParam, discoverParentBackgroundColor } from './utils';
/**
 * 背景色の変更
 * @param {Element} element
 */
function applyBackground(element) {
  const bgc = discoverParentBackgroundColor(element.parentElement);
  if (bgc) {
    element.style.backgroundColor = bgc;
  }
}

/**
 * neumorphism のためのボックスシャドウ
 * @param {Element} element
 */
function applyBoxShadow(element) {

}

/**
 * maring, padding の適応
 * @param {Element} element 
 */
function applySpaceing(element) {
  // font-size
  // 元のpadding
  // 元のmargin
}

/**
 * font-size の適応
 * @param {Element} element
 */
function applyFontSize(element) {

}

/**
 * neumorphism スタイルの適応
 * @param {Element} element
 */
export function applyNeumorphism(element) {
  element.classList.add('neumorphism');
  console.log(getCssParam(element, 'font-size'));
  // element.style.fontSize = `calc(${getCssParam(element, 'font-size')} * 0.8)`;
  applyBackground(element);
}

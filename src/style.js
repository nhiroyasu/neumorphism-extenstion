import { getCssParam, setCssParam, discoverParentBackgroundColor, buildColorFromString } from './utils';

/**
 * 背景色の変更
 * @param {Element} element
 */
function applyBackground(element) {
  const bgc = discoverParentBackgroundColor(element.parentElement);
  element.style.backgroundColor = bgc;
}

/**
 * neumorphism のためのボックスシャドウ
 * @param {Element} element
 */
function applyBoxShadow(element) {
  let bgc = getCssParam(element, 'background-color');
  const color = buildColorFromString(bgc);
  const size = 6;
  const blur = 8;
  const shadowValue1 = `${size}px ${size}px ${blur}px hsl(${color.H}, ${color.S}%, ${Math.max(0, color.L - 10)}%)`
  const shadowValue2 = `-${size}px -${size}px ${blur}px hsl(${color.H}, ${color.S}%, ${Math.min(100, color.L + 15)}%)`
  
  const boxShadowValue = [shadowValue1, shadowValue2].join(', ')
  element.style.boxShadow = boxShadowValue;
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
  applyBackground(element);
  applyBoxShadow(element); // 背景がすでに反映されていること
  // // applySpaceing(element);
  // // applyFontSize(element);
}

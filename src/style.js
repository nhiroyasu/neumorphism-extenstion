import { getCssParam, setCssParam, discoverParentBackgroundColor, buildColorFromString } from './utils';

/**
 * 背景色の変更
 * @param {Element} element
 * @returns {String} 設定した背景色
 */
function applyBackground(element) {
  const bgc = discoverParentBackgroundColor(element.parentElement);
  element.style.backgroundColor = bgc;
  return bgc;
}

/**
 * neumorphism のためのボックスシャドウ
 * @param {Element} element
 * @returns {String} 設定したBoxShadow値
 */
function applyBoxShadow(element, bgc) {
  // element.style で設定した値には遅延があるっぽい。直接背景を取得したほうがいいかも
  // const bgc = getCssParam(element, 'background-color');
  const color = buildColorFromString(bgc);
  const size = 6;
  const blur = 8;
  const shadowValue1 = `${size}px ${size}px ${blur}px hsl(${color.H}, ${color.S}%, ${Math.max(0, color.L - 6)}%)`
  const shadowValue2 = `-${size}px -${size}px ${blur}px hsl(${color.H}, ${color.S}%, ${Math.min(100, color.L + 6)}%)`
  
  const boxShadowValue = [shadowValue1, shadowValue2].join(', ')
  element.style.boxShadow = boxShadowValue;
  return boxShadowValue;
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
 * box-size の適応
 * @param {Element} element 
 */
function applyDisplay(element) {
  if (getCssParam(element, 'display') === 'inline') {
    element.style.display = 'inline-block';
  }
}

/**
 * neumorphism スタイルの適応
 * @param {Element} element
 */
export function applyNeumorphism(element) {
  element.classList.add('neumorphism');
  const background = applyBackground(element);
  const boxShadow = applyBoxShadow(element, background); // 背景がすでに反映されていること
  applyDisplay(element);
  // // applySpaceing(element);
  // // applyFontSize(element);
}

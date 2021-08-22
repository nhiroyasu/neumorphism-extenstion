import Color from './domain/color';

export function getCssParam(element, param) {
  const style = window.getComputedStyle(element);
  return style.getPropertyValue(param);
}

/**
 * @param {Element} element 
 * @param {string} param 
 * @param {string} value 
 */
export function setCssParam(element, param, value) {
  const style = window.getComputedStyle(element);
  style.setProperty(param, value);
}

/**
 * @param {Element} parentElement
 * @returns {String?} 背景色
 */
export function discoverParentBackgroundColor(parentElement) {
  const backgroundColor = getCssParam(parentElement, 'background-color');
  if (parentElement.tagName === 'body') {
    return null;
  } else if (backgroundColor !== 'rgba(0, 0, 0, 0)') {
    return backgroundColor;
  } else {
    return discoverParentBackgroundColor(parentElement.parentElement);
  }
}

/**
 * cssの色取得からColorクラスに変換するやつ
 * @param {String} rgbString rgb(0,0,0)みたいなやつ。 rgbaにも対応しているかalphaは考慮されない。
 * @returns {Color}
 */
export function buildColorFromString(rgbString) {
  const formatted = rgbString.replace(/^(rgba|rgb)/g, '').replace(/(\(|\)|\s)/g, '');
  const colorList = formatted.split(',').map(value => parseInt(value));
  return new Color(colorList[0], colorList[1], colorList[2]);
}

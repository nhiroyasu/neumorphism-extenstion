export function getCssParam(element, param) {
  const style = window.getComputedStyle(element);
  return style.getPropertyValue(param);
}

/**
 * @param {Element} parentElement
 * @returns {String?} 背景色
 */
export function discoverParentBackgroundColor(parentElement) {
  const backgroundColor = getCssParam(parentElement, 'background-color');
  if (parentElement.tagName === 'body') {
    return null;
  } else if (backgroundColor) {
    return backgroundColor;
  } else {
    return discoverParentBackgroundColor(parentElement.parentElement);
  }
}


import { getCssParam } from './utils';
/**
 * @param {Element} element
 * @returns {Boolean}
 */
function isNeumorphismRule(element) {
    return getCssParam(element, 'cursor') === 'pointer';
}

const cursorIsPointerElementList = [];
/**
 * cursor: pointer のDOMを探す再帰関数
 * @param {Element} parentElement 親DOM
 */
function discoverNeumorphismElement(parentElement) {
    const children = parentElement.children;
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        if (isNeumorphismRule(element)) {
            cursorIsPointerElementList.push(element);
        } else if (element.hasChildNodes) {
            discoverNeumorphismElement(element);
        }
    }
}

export function discoverNeumorphismElements() {
    cursorIsPointerElementList.length = 0;
    discoverNeumorphismElement(document.body);
    return cursorIsPointerElementList;
}

export function resetNeumorphismElements() {
    cursorIsPointerElementList.forEach(element => {
        element.style = '';
    });
    cursorIsPointerElementList.length = 0;
}

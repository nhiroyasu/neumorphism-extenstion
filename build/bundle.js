/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analyze.js":
/*!************************!*\
  !*** ./src/analyze.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"discoverNeumorphismElements\": () => (/* binding */ discoverNeumorphismElements)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\n * @param {Element} element\n * @returns {Boolean}\n */\n\nfunction isNeumorphismRule(element) {\n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCssParam)(element, 'cursor') === 'pointer';\n}\n\nvar cursorIsPointerElementList = [];\n/**\n * cursor: pointer のDOMを探す再帰関数\n * @param {Element} parentElement 親DOM\n */\n\nfunction discoverNeumorphismElement(parentElement) {\n  var children = parentElement.children;\n\n  for (var i = 0; i < children.length; i++) {\n    var element = children[i];\n\n    if (element.hasChildNodes === false) {\n      return;\n    } else if (isNeumorphismRule(element)) {\n      cursorIsPointerElementList.push(element);\n    } else {\n      discoverNeumorphismElement(element);\n    }\n  }\n}\n\nfunction discoverNeumorphismElements() {\n  discoverNeumorphismElement(document.body);\n  return cursorIsPointerElementList;\n}\n\n//# sourceURL=webpack://neumorphism_extension/./src/analyze.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _analyze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyze */ \"./src/analyze.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\n\nfunction main() {\n  var targetElements = (0,_analyze__WEBPACK_IMPORTED_MODULE_0__.discoverNeumorphismElements)();\n  targetElements.forEach(function (element) {\n    (0,_style__WEBPACK_IMPORTED_MODULE_1__.applyNeumorphism)(element);\n  });\n}\n\nmain();\n\n//# sourceURL=webpack://neumorphism_extension/./src/content.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyNeumorphism\": () => (/* binding */ applyNeumorphism)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\n * 背景色の変更\n * @param {Element} element\n */\n\nfunction applyBackground(element) {\n  var bgc = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.discoverParentBackgroundColor)(element.parentElement);\n\n  if (bgc) {\n    element.style.backgroundColor = bgc;\n  }\n}\n/**\n * neumorphism のためのボックスシャドウ\n * @param {Element} element\n */\n\n\nfunction applyBoxShadow(element) {}\n/**\n * maring, padding の適応\n * @param {Element} element \n */\n\n\nfunction applySpaceing(element) {// font-size\n  // 元のpadding\n  // 元のmargin\n}\n/**\n * font-size の適応\n * @param {Element} element\n */\n\n\nfunction applyFontSize(element) {}\n/**\n * neumorphism スタイルの適応\n * @param {Element} element\n */\n\n\nfunction applyNeumorphism(element) {\n  element.classList.add('neumorphism');\n  console.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCssParam)(element, 'font-size')); // element.style.fontSize = `calc(${getCssParam(element, 'font-size')} * 0.8)`;\n\n  applyBackground(element);\n}\n\n//# sourceURL=webpack://neumorphism_extension/./src/style.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCssParam\": () => (/* binding */ getCssParam),\n/* harmony export */   \"discoverParentBackgroundColor\": () => (/* binding */ discoverParentBackgroundColor)\n/* harmony export */ });\nfunction getCssParam(element, param) {\n  var style = window.getComputedStyle(element);\n  return style.getPropertyValue(param);\n}\n/**\n * @param {Element} parentElement\n * @returns {String?} 背景色\n */\n\nfunction discoverParentBackgroundColor(parentElement) {\n  var backgroundColor = getCssParam(parentElement, 'background-color');\n\n  if (parentElement.tagName === 'body') {\n    return null;\n  } else if (backgroundColor) {\n    return backgroundColor;\n  } else {\n    return discoverParentBackgroundColor(parentElement.parentElement);\n  }\n}\n\n//# sourceURL=webpack://neumorphism_extension/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content.js");
/******/ 	
/******/ })()
;
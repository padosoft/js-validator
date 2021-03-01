/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["padosoftValidator"] = factory();
	else
		root["padosoftValidator"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isNumber\": () => (/* binding */ isNumber),\n/* harmony export */   \"isFunction\": () => (/* binding */ isFunction),\n/* harmony export */   \"isInteger\": () => (/* binding */ isInteger),\n/* harmony export */   \"isBoolean\": () => (/* binding */ isBoolean),\n/* harmony export */   \"isObject\": () => (/* binding */ isObject),\n/* harmony export */   \"isDate\": () => (/* binding */ isDate),\n/* harmony export */   \"isDefined\": () => (/* binding */ isDefined),\n/* harmony export */   \"isString\": () => (/* binding */ isString),\n/* harmony export */   \"isArray\": () => (/* binding */ isArray),\n/* harmony export */   \"isEmail\": () => (/* binding */ isEmail)\n/* harmony export */ });\nfunction isNumber(value) {\n  return typeof value === \"number\" && !isNaN(value);\n}\n\n// Returns false if the object is not a function\nfunction isFunction(value) {\n  return typeof value === \"function\";\n}\n\n// A simple check to verify that the value is an integer. Uses `isNumber`\n// and a simple modulo check.\nfunction isInteger(value) {\n  return v.isNumber(value) && value % 1 === 0;\n}\n\n// Checks if the value is a boolean\nfunction isBoolean(value) {\n  return typeof value === \"boolean\";\n}\n\n// Uses the `Object` function to check if the given argument is an object.\nfunction isObject(obj) {\n  return obj === Object(obj);\n}\n\n// Simply checks if the object is an instance of a date\nfunction isDate(obj) {\n  return obj instanceof Date;\n}\n\n// Returns false if the object is `null` of `undefined`\nfunction isDefined(obj) {\n  return obj !== null && obj !== undefined;\n}\n\nfunction isString(value) {\n  return typeof value === \"string\";\n}\n\nfunction isArray(value) {\n  return {}.toString.call(value) === \"[object Array]\";\n}\n\nfunction isEmail(value) {\n  if (!isDefined(value)) {\n    return false;\n  }\n\n  if (!isString(value)) {\n    return false;\n  }\n\n  const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$/i;\n\n  if (!emailPattern.exec(value)) {\n    return false;\n  }\n\n  return true;\n}\n\n\n//# sourceURL=webpack://padosoftValidator/./functions.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isArray\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isArray),\n/* harmony export */   \"isBoolean\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isBoolean),\n/* harmony export */   \"isDate\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isDate),\n/* harmony export */   \"isDefined\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isDefined),\n/* harmony export */   \"isEmail\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isEmail),\n/* harmony export */   \"isFunction\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isFunction),\n/* harmony export */   \"isInteger\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isInteger),\n/* harmony export */   \"isNumber\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isNumber),\n/* harmony export */   \"isObject\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isObject),\n/* harmony export */   \"isString\": () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isString),\n/* harmony export */   \"Validator\": () => (/* binding */ Validator)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\n\nclass Validator {\n  constructor(validator) {\n    this.isValid = true;\n    this.errors = [];\n    this.rules = validator.rules;\n    this.messages = validator.messages;\n  }\n\n  validate(data) {\n    this.isValid = true;\n    this.errors = [];\n    Object.entries(this.rules).forEach(([idEl, validatorObj]) => {\n      if (validatorObj.required) {\n        if (!data.hasOwnProperty(idEl)) {\n          this.errors.push({ ref: idEl, message: `${idEl} è richiesto.` });\n          return;\n        }\n      }\n      if (data.hasOwnProperty(idEl)) {\n        if (!validatorObj.rule(data[idEl])) {\n          this.errors.push({ ref: idEl, message: this.messages[idEl] });\n        }\n      }\n    });\n    if (this.errors.length > 0) {\n      this.isValid = false;\n    }\n  }\n\n  hasValidData() {\n    return this.isValid;\n  }\n\n  getErrorsMessages() {\n    return this.errors;\n  }\n}\n\n\n//# sourceURL=webpack://padosoftValidator/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
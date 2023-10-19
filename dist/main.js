/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_stocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/stocks */ \"./src/scripts/stocks.js\");\n// should be minimal. Creates instances of your project.\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Your JavaScript code here\n  document.getElementById(\"roiForm\").addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n\n    // Get input values from the form\n    const initialDeposit = parseFloat(document.getElementById(\"initialDeposit\").value);\n    const yearlyDeposit = parseFloat(document.getElementById(\"yearlyDeposit\").value);\n    const desiredReturns = parseFloat(document.getElementById(\"desiredReturns\").value);\n    const yearsInvested = parseFloat(document.getElementById(\"yearsInvested\").value);\n\n    // Calculate ROI\n    const {\n      roi,\n      yearsInvested: calculatedYears\n    } = (0,_scripts_stocks__WEBPACK_IMPORTED_MODULE_1__.calculateROI)(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested);\n\n    // Display the result\n    const resultElement = document.getElementById(\"resultForStocks\");\n    resultElement.innerHTML = `<p>Your Return On Investment (ROI) is ${roi} over ${calculatedYears} years.</p>`;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRXdDO0FBRXhDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsSUFBSUosd0RBQU8sQ0FBQ0csSUFBSSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUc2QztBQUkvQ0YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3REO0VBQ0FELFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDRixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUksQ0FBQyxFQUFFO0lBQ3ZFQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDOztJQUVsQjtJQUNBLE1BQU1DLGNBQWMsR0FBR0MsVUFBVSxDQUFDUixRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDTSxLQUFLLENBQUM7SUFDbEYsTUFBTUMsYUFBYSxHQUFHRixVQUFVLENBQUNSLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDTSxLQUFLLENBQUM7SUFDaEYsTUFBTUUsY0FBYyxHQUFHSCxVQUFVLENBQUNSLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUNNLEtBQUssQ0FBQztJQUNsRixNQUFNRyxhQUFhLEdBQUdKLFVBQVUsQ0FBQ1IsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNNLEtBQUssQ0FBQzs7SUFFaEY7SUFDQSxNQUFNO01BQUVJLEdBQUc7TUFBRUQsYUFBYSxFQUFFRTtJQUFnQixDQUFDLEdBQUdWLDZEQUFZLENBQUNHLGNBQWMsRUFBRUcsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGFBQWEsQ0FBQzs7SUFFMUg7SUFDQSxNQUFNRyxhQUFhLEdBQUdmLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGlCQUFpQixDQUFDO0lBQ2hFWSxhQUFhLENBQUNDLFNBQVMsR0FBSSx5Q0FBd0NILEdBQUksU0FBUUMsZUFBZ0IsYUFBWTtFQUMvRyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2ktY2FsY3VsYXRvci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNob3VsZCBiZSBtaW5pbWFsLiBDcmVhdGVzIGluc3RhbmNlcyBvZiB5b3VyIHByb2plY3QuXG5cbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBuZXcgRXhhbXBsZShtYWluKTtcbn0pXG5cblxuaW1wb3J0IHsgY2FsY3VsYXRlUk9JIH0gZnJvbSBcIi4vc2NyaXB0cy9zdG9ja3NcIlxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFlvdXIgSmF2YVNjcmlwdCBjb2RlIGhlcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvaUZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgIC8vIEdldCBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuICAgICAgICBjb25zdCBpbml0aWFsRGVwb3NpdCA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsRGVwb3NpdFwiKS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHllYXJseURlcG9zaXQgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcmx5RGVwb3NpdFwiKS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGRlc2lyZWRSZXR1cm5zID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2lyZWRSZXR1cm5zXCIpLnZhbHVlKTtcbiAgICAgICAgY29uc3QgeWVhcnNJbnZlc3RlZCA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc0ludmVzdGVkXCIpLnZhbHVlKTtcbiAgICBcbiAgICAgICAgLy8gQ2FsY3VsYXRlIFJPSVxuICAgICAgICBjb25zdCB7IHJvaSwgeWVhcnNJbnZlc3RlZDogY2FsY3VsYXRlZFllYXJzIH0gPSBjYWxjdWxhdGVST0koaW5pdGlhbERlcG9zaXQsIHllYXJseURlcG9zaXQsIGRlc2lyZWRSZXR1cm5zLCB5ZWFyc0ludmVzdGVkKTtcbiAgICBcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgcmVzdWx0XG4gICAgICAgIGNvbnN0IHJlc3VsdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdEZvclN0b2Nrc1wiKTtcbiAgICAgICAgcmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSBgPHA+WW91ciBSZXR1cm4gT24gSW52ZXN0bWVudCAoUk9JKSBpcyAke3JvaX0gb3ZlciAke2NhbGN1bGF0ZWRZZWFyc30geWVhcnMuPC9wPmA7XG4gICAgfSk7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY2FsY3VsYXRlUk9JIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5pdGlhbERlcG9zaXQiLCJwYXJzZUZsb2F0IiwidmFsdWUiLCJ5ZWFybHlEZXBvc2l0IiwiZGVzaXJlZFJldHVybnMiLCJ5ZWFyc0ludmVzdGVkIiwicm9pIiwiY2FsY3VsYXRlZFllYXJzIiwicmVzdWx0RWxlbWVudCIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHVCQUF1QjtJQUU1QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7RUFFQUQsV0FBV0EsQ0FBQSxFQUFFO0lBQ1QsSUFBSSxDQUFDSCxHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE1BQU07RUFDM0M7QUFDSjtBQUVBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9pLWNhbGN1bGF0b3IvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3MgQUxJVkUhITwvaDE+XCI7XG5cbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/stocks.js":
/*!*******************************!*\
  !*** ./src/scripts/stocks.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateROI: function() { return /* binding */ calculateROI; }\n/* harmony export */ });\nfunction calculateROI(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {\n  const roi = initialDeposit * Math.pow(1 + desiredReturns / 100, yearsInvested) + yearlyDeposit * (Math.pow(1 + desiredReturns / 100, yearsInvested) - 1) / (desiredReturns / 100);\n  return {\n    roi: roi.toFixed(2),\n    yearsInvested: yearsInvested\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdG9ja3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLFlBQVlBLENBQUNDLGNBQWMsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRTtFQUN2RixNQUFNQyxHQUFHLEdBQUlKLGNBQWMsR0FBR0ssSUFBSSxDQUFDQyxHQUFHLENBQUUsQ0FBQyxHQUFHSixjQUFjLEdBQUMsR0FBRyxFQUFHQyxhQUFhLENBQUMsR0FDbEVGLGFBQWEsSUFBSUksSUFBSSxDQUFDQyxHQUFHLENBQUUsQ0FBQyxHQUFHSixjQUFjLEdBQUMsR0FBRyxFQUFHQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSUQsY0FBYyxHQUFDLEdBQUcsQ0FBRTtFQUU1RyxPQUFPO0lBQ0hFLEdBQUcsRUFBRUEsR0FBRyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25CSixhQUFhLEVBQUVBO0VBQ25CLENBQUM7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3JvaS1jYWxjdWxhdG9yLy4vc3JjL3NjcmlwdHMvc3RvY2tzLmpzP2ZjMzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVJPSShpbml0aWFsRGVwb3NpdCwgeWVhcmx5RGVwb3NpdCwgZGVzaXJlZFJldHVybnMsIHllYXJzSW52ZXN0ZWQpIHtcbiAgICBjb25zdCByb2kgPSAoaW5pdGlhbERlcG9zaXQgKiBNYXRoLnBvdygoMSArIGRlc2lyZWRSZXR1cm5zLzEwMCksIHllYXJzSW52ZXN0ZWQpKSArXG4gICAgICAgICAgICAgICAgKHllYXJseURlcG9zaXQgKiAoTWF0aC5wb3coKDEgKyBkZXNpcmVkUmV0dXJucy8xMDApLCB5ZWFyc0ludmVzdGVkKSAtIDEpIC8gKGRlc2lyZWRSZXR1cm5zLzEwMCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm9pOiByb2kudG9GaXhlZCgyKSxcbiAgICAgICAgeWVhcnNJbnZlc3RlZDogeWVhcnNJbnZlc3RlZCxcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJjYWxjdWxhdGVST0kiLCJpbml0aWFsRGVwb3NpdCIsInllYXJseURlcG9zaXQiLCJkZXNpcmVkUmV0dXJucyIsInllYXJzSW52ZXN0ZWQiLCJyb2kiLCJNYXRoIiwicG93IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/stocks.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2ktY2FsY3VsYXRvci8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
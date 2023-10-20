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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_stocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/stocks */ \"./src/scripts/stocks.js\");\n/* harmony import */ var _scripts_cashAndBonds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/cashAndBonds */ \"./src/scripts/cashAndBonds.js\");\n/* harmony import */ var _scripts_otherAssets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/otherAssets */ \"./src/scripts/otherAssets.js\");\n// should be minimal. Creates instances of your project.\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Your JavaScript code here\n  document.getElementById(\"stocksForm\").addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n\n    // Get input values from the form\n    const initialDeposit = parseFloat(document.getElementById(\"initialDeposit\").value);\n    const yearlyDeposit = parseFloat(document.getElementById(\"yearlyDeposit\").value);\n    const desiredReturns = parseFloat(document.getElementById(\"desiredReturns\").value);\n    const yearsInvested = parseFloat(document.getElementById(\"yearsInvested\").value);\n\n    // Calculate ROI\n    const {\n      roi,\n      yearsInvested: calculatedYears\n    } = (0,_scripts_stocks__WEBPACK_IMPORTED_MODULE_1__.calculateROI)(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested);\n\n    // Display the result\n    const resultElement = document.getElementById(\"resultForStocks\");\n    resultElement.innerHTML = `<p>Your Return On Investment (ROI) is ${roi} over ${calculatedYears} years.</p>`;\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Your JavaScript code here\n  document.getElementById(\"cashAndBondsForm\").addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n\n    // Get input values from the form\n    const initialDeposit2 = parseFloat(document.getElementById(\"initialDeposit2\").value);\n    const yearlyDeposit2 = parseFloat(document.getElementById(\"yearlyDeposit2\").value);\n    const desiredReturns2 = parseFloat(document.getElementById(\"desiredReturns2\").value);\n    const yearsInvested2 = parseFloat(document.getElementById(\"yearsInvested2\").value);\n\n    // Calculate ROI\n    const {\n      roi2,\n      yearsInvested2: calculatedYears2\n    } = (0,_scripts_cashAndBonds__WEBPACK_IMPORTED_MODULE_2__.calculateROICashAndBonds)(initialDeposit2, yearlyDeposit2, desiredReturns2, yearsInvested2);\n\n    // Display the result\n    const resultElement2 = document.getElementById(\"resultForCashAndBonds\");\n    resultElement2.innerHTML = `<p>Your Return On Investment (ROI) is ${roi2} over ${calculatedYears2} years.</p>`;\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.getElementById(\"altAssetsForm\").addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n\n    // Get input values from the form\n    const initialDeposit3 = parseFloat(document.getElementById(\"initialDeposit3\").value);\n    const yearlyDeposit3 = parseFloat(document.getElementById(\"yearlyDeposit3\").value);\n    const desiredReturns3 = parseFloat(document.getElementById(\"desiredReturns3\").value);\n    const yearsInvested3 = parseFloat(document.getElementById(\"yearsInvested3\").value);\n\n    // Calculate ROI\n    const {\n      roi3,\n      yearsInvested3: calculatedYears3\n    } = (0,_scripts_otherAssets__WEBPACK_IMPORTED_MODULE_3__.calculateROIOtherAssets)(initialDeposit3, yearlyDeposit3, desiredReturns3, yearsInvested3);\n\n    // Display the result\n    const resultElement3 = document.getElementById(\"resultForAltAssets\");\n    resultElement3.innerHTML = `<p>Your Return On Investment (ROI) is ${roi3} over ${calculatedYears3} years.</p>`;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFd0M7QUFFeENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJSix3REFBTyxDQUFDRyxJQUFJLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRzZDO0FBQ2tCO0FBQ0Q7QUFJaEVGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RDtFQUNBRCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0YsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVVNLENBQUMsRUFBRTtJQUMxRUEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQzs7SUFFbEI7SUFDQSxNQUFNQyxjQUFjLEdBQUdDLFVBQVUsQ0FBQ1YsUUFBUSxDQUFDRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsS0FBSyxDQUFDO0lBQ2xGLE1BQU1DLGFBQWEsR0FBR0YsVUFBVSxDQUFDVixRQUFRLENBQUNHLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ1EsS0FBSyxDQUFDO0lBQ2hGLE1BQU1FLGNBQWMsR0FBR0gsVUFBVSxDQUFDVixRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxLQUFLLENBQUM7SUFDbEYsTUFBTUcsYUFBYSxHQUFHSixVQUFVLENBQUNWLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDUSxLQUFLLENBQUM7O0lBRWhGO0lBQ0EsTUFBTTtNQUFFSSxHQUFHO01BQUVELGFBQWEsRUFBRUU7SUFBZ0IsQ0FBQyxHQUFHWiw2REFBWSxDQUFDSyxjQUFjLEVBQUVHLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLENBQUM7O0lBRTFIO0lBQ0EsTUFBTUcsYUFBYSxHQUFHakIsUUFBUSxDQUFDRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDaEVjLGFBQWEsQ0FBQ0MsU0FBUyxHQUFJLHlDQUF3Q0gsR0FBSSxTQUFRQyxlQUFnQixhQUFZO0VBQy9HLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUdGaEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3REO0VBQ0FELFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVTSxDQUFDLEVBQUU7SUFDaEZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O0lBRWxCO0lBQ0EsTUFBTVcsZUFBZSxHQUFHVCxVQUFVLENBQUNWLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNRLEtBQUssQ0FBQztJQUNwRixNQUFNUyxjQUFjLEdBQUdWLFVBQVUsQ0FBQ1YsUUFBUSxDQUFDRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsS0FBSyxDQUFDO0lBQ2xGLE1BQU1VLGVBQWUsR0FBR1gsVUFBVSxDQUFDVixRQUFRLENBQUNHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDUSxLQUFLLENBQUM7SUFDcEYsTUFBTVcsY0FBYyxHQUFHWixVQUFVLENBQUNWLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUNRLEtBQUssQ0FBQzs7SUFFbEY7SUFDQSxNQUFNO01BQUVZLElBQUk7TUFBRUQsY0FBYyxFQUFFRTtJQUFpQixDQUFDLEdBQUduQiwrRUFBd0IsQ0FBQ2MsZUFBZSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsY0FBYyxDQUFDOztJQUU3STtJQUNBLE1BQU1HLGNBQWMsR0FBR3pCLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLHVCQUF1QixDQUFDO0lBQ3ZFc0IsY0FBYyxDQUFDUCxTQUFTLEdBQUkseUNBQXdDSyxJQUFLLFNBQVFDLGdCQUFpQixhQUFZO0VBQ2xILENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGeEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3RERCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0YsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVVNLENBQUMsRUFBRTtJQUM3RUEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQzs7SUFFbEI7SUFDQSxNQUFNa0IsZUFBZSxHQUFHaEIsVUFBVSxDQUFDVixRQUFRLENBQUNHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDUSxLQUFLLENBQUM7SUFDcEYsTUFBTWdCLGNBQWMsR0FBR2pCLFVBQVUsQ0FBQ1YsUUFBUSxDQUFDRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsS0FBSyxDQUFDO0lBQ2xGLE1BQU1pQixlQUFlLEdBQUdsQixVQUFVLENBQUNWLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNRLEtBQUssQ0FBQztJQUNwRixNQUFNa0IsY0FBYyxHQUFHbkIsVUFBVSxDQUFDVixRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxLQUFLLENBQUM7O0lBRWxGO0lBQ0EsTUFBTTtNQUFFbUIsSUFBSTtNQUFFRCxjQUFjLEVBQUVFO0lBQWlCLENBQUMsR0FBR3pCLDZFQUF1QixDQUFDb0IsZUFBZSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsY0FBYyxDQUFDOztJQUU1STtJQUNBLE1BQU1HLGNBQWMsR0FBR2hDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLG9CQUFvQixDQUFDO0lBQ3BFNkIsY0FBYyxDQUFDZCxTQUFTLEdBQUkseUNBQXdDWSxJQUFLLFNBQVFDLGdCQUFpQixhQUFZO0VBQ2xILENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvaS1jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hvdWxkIGJlIG1pbmltYWwuIENyZWF0ZXMgaW5zdGFuY2VzIG9mIHlvdXIgcHJvamVjdC5cblxuaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBFeGFtcGxlKG1haW4pO1xufSlcblxuXG5pbXBvcnQgeyBjYWxjdWxhdGVST0kgfSBmcm9tIFwiLi9zY3JpcHRzL3N0b2Nrc1wiXG5pbXBvcnQgeyBjYWxjdWxhdGVST0lDYXNoQW5kQm9uZHMgfSBmcm9tIFwiLi9zY3JpcHRzL2Nhc2hBbmRCb25kc1wiXG5pbXBvcnQgeyBjYWxjdWxhdGVST0lPdGhlckFzc2V0cyB9IGZyb20gXCIuL3NjcmlwdHMvb3RoZXJBc3NldHNcIjtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBZb3VyIEphdmFTY3JpcHQgY29kZSBoZXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja3NGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICAvLyBHZXQgaW5wdXQgdmFsdWVzIGZyb20gdGhlIGZvcm1cbiAgICAgICAgY29uc3QgaW5pdGlhbERlcG9zaXQgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhbERlcG9zaXRcIikudmFsdWUpO1xuICAgICAgICBjb25zdCB5ZWFybHlEZXBvc2l0ID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJseURlcG9zaXRcIikudmFsdWUpO1xuICAgICAgICBjb25zdCBkZXNpcmVkUmV0dXJucyA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNpcmVkUmV0dXJuc1wiKS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHllYXJzSW52ZXN0ZWQgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNJbnZlc3RlZFwiKS52YWx1ZSk7XG4gICAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSBST0lcbiAgICAgICAgY29uc3QgeyByb2ksIHllYXJzSW52ZXN0ZWQ6IGNhbGN1bGF0ZWRZZWFycyB9ID0gY2FsY3VsYXRlUk9JKGluaXRpYWxEZXBvc2l0LCB5ZWFybHlEZXBvc2l0LCBkZXNpcmVkUmV0dXJucywgeWVhcnNJbnZlc3RlZCk7XG4gICAgXG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHJlc3VsdFxuICAgICAgICBjb25zdCByZXN1bHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRGb3JTdG9ja3NcIik7XG4gICAgICAgIHJlc3VsdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxwPllvdXIgUmV0dXJuIE9uIEludmVzdG1lbnQgKFJPSSkgaXMgJHtyb2l9IG92ZXIgJHtjYWxjdWxhdGVkWWVhcnN9IHllYXJzLjwvcD5gO1xuICAgIH0pO1xufSk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFlvdXIgSmF2YVNjcmlwdCBjb2RlIGhlcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhc2hBbmRCb25kc0Zvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgIC8vIEdldCBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuICAgICAgICBjb25zdCBpbml0aWFsRGVwb3NpdDIgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhbERlcG9zaXQyXCIpLnZhbHVlKTtcbiAgICAgICAgY29uc3QgeWVhcmx5RGVwb3NpdDIgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcmx5RGVwb3NpdDJcIikudmFsdWUpO1xuICAgICAgICBjb25zdCBkZXNpcmVkUmV0dXJuczIgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzaXJlZFJldHVybnMyXCIpLnZhbHVlKTtcbiAgICAgICAgY29uc3QgeWVhcnNJbnZlc3RlZDIgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNJbnZlc3RlZDJcIikudmFsdWUpO1xuICAgIFxuICAgICAgICAvLyBDYWxjdWxhdGUgUk9JXG4gICAgICAgIGNvbnN0IHsgcm9pMiwgeWVhcnNJbnZlc3RlZDI6IGNhbGN1bGF0ZWRZZWFyczIgfSA9IGNhbGN1bGF0ZVJPSUNhc2hBbmRCb25kcyhpbml0aWFsRGVwb3NpdDIsIHllYXJseURlcG9zaXQyLCBkZXNpcmVkUmV0dXJuczIsIHllYXJzSW52ZXN0ZWQyKTtcbiAgICBcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgcmVzdWx0XG4gICAgICAgIGNvbnN0IHJlc3VsdEVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRGb3JDYXNoQW5kQm9uZHNcIik7XG4gICAgICAgIHJlc3VsdEVsZW1lbnQyLmlubmVySFRNTCA9IGA8cD5Zb3VyIFJldHVybiBPbiBJbnZlc3RtZW50IChST0kpIGlzICR7cm9pMn0gb3ZlciAke2NhbGN1bGF0ZWRZZWFyczJ9IHllYXJzLjwvcD5gO1xuICAgIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdEFzc2V0c0Zvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gR2V0IGlucHV0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG4gICAgICAgIGNvbnN0IGluaXRpYWxEZXBvc2l0MyA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsRGVwb3NpdDNcIikudmFsdWUpO1xuICAgICAgICBjb25zdCB5ZWFybHlEZXBvc2l0MyA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFybHlEZXBvc2l0M1wiKS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGRlc2lyZWRSZXR1cm5zMyA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNpcmVkUmV0dXJuczNcIikudmFsdWUpO1xuICAgICAgICBjb25zdCB5ZWFyc0ludmVzdGVkMyA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc0ludmVzdGVkM1wiKS52YWx1ZSk7XG4gICAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSBST0lcbiAgICAgICAgY29uc3QgeyByb2kzLCB5ZWFyc0ludmVzdGVkMzogY2FsY3VsYXRlZFllYXJzMyB9ID0gY2FsY3VsYXRlUk9JT3RoZXJBc3NldHMoaW5pdGlhbERlcG9zaXQzLCB5ZWFybHlEZXBvc2l0MywgZGVzaXJlZFJldHVybnMzLCB5ZWFyc0ludmVzdGVkMyk7XG4gICAgXG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHJlc3VsdFxuICAgICAgICBjb25zdCByZXN1bHRFbGVtZW50MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0Rm9yQWx0QXNzZXRzXCIpO1xuICAgICAgICByZXN1bHRFbGVtZW50My5pbm5lckhUTUwgPSBgPHA+WW91ciBSZXR1cm4gT24gSW52ZXN0bWVudCAoUk9JKSBpcyAke3JvaTN9IG92ZXIgJHtjYWxjdWxhdGVkWWVhcnMzfSB5ZWFycy48L3A+YDtcbiAgICB9KVxufSlcblxuXG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY2FsY3VsYXRlUk9JIiwiY2FsY3VsYXRlUk9JQ2FzaEFuZEJvbmRzIiwiY2FsY3VsYXRlUk9JT3RoZXJBc3NldHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0aWFsRGVwb3NpdCIsInBhcnNlRmxvYXQiLCJ2YWx1ZSIsInllYXJseURlcG9zaXQiLCJkZXNpcmVkUmV0dXJucyIsInllYXJzSW52ZXN0ZWQiLCJyb2kiLCJjYWxjdWxhdGVkWWVhcnMiLCJyZXN1bHRFbGVtZW50IiwiaW5uZXJIVE1MIiwiaW5pdGlhbERlcG9zaXQyIiwieWVhcmx5RGVwb3NpdDIiLCJkZXNpcmVkUmV0dXJuczIiLCJ5ZWFyc0ludmVzdGVkMiIsInJvaTIiLCJjYWxjdWxhdGVkWWVhcnMyIiwicmVzdWx0RWxlbWVudDIiLCJpbml0aWFsRGVwb3NpdDMiLCJ5ZWFybHlEZXBvc2l0MyIsImRlc2lyZWRSZXR1cm5zMyIsInllYXJzSW52ZXN0ZWQzIiwicm9pMyIsImNhbGN1bGF0ZWRZZWFyczMiLCJyZXN1bHRFbGVtZW50MyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/cashAndBonds.js":
/*!*************************************!*\
  !*** ./src/scripts/cashAndBonds.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateROICashAndBonds: function() { return /* binding */ calculateROICashAndBonds; }\n/* harmony export */ });\nfunction calculateROICashAndBonds(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {\n  const roi2 = initialDeposit * Math.pow(1 + desiredReturns / 100, yearsInvested) + yearlyDeposit * (Math.pow(1 + desiredReturns / 100, yearsInvested) - 1) / (desiredReturns / 100);\n  return {\n    roi2: roi2.toFixed(2),\n    yearsInvested2: yearsInvested\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXNoQW5kQm9uZHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLHdCQUF3QkEsQ0FBQ0MsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsYUFBYSxFQUFFO0VBQ25HLE1BQU1DLElBQUksR0FBSUosY0FBYyxHQUFHSyxJQUFJLENBQUNDLEdBQUcsQ0FBRSxDQUFDLEdBQUdKLGNBQWMsR0FBQyxHQUFHLEVBQUdDLGFBQWEsQ0FBQyxHQUNuRUYsYUFBYSxJQUFJSSxJQUFJLENBQUNDLEdBQUcsQ0FBRSxDQUFDLEdBQUdKLGNBQWMsR0FBQyxHQUFHLEVBQUdDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJRCxjQUFjLEdBQUMsR0FBRyxDQUFFO0VBRTVHLE9BQU87SUFDSEUsSUFBSSxFQUFFQSxJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckJDLGNBQWMsRUFBRUw7RUFDcEIsQ0FBQztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9pLWNhbGN1bGF0b3IvLi9zcmMvc2NyaXB0cy9jYXNoQW5kQm9uZHMuanM/NmRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUk9JQ2FzaEFuZEJvbmRzKGluaXRpYWxEZXBvc2l0LCB5ZWFybHlEZXBvc2l0LCBkZXNpcmVkUmV0dXJucywgeWVhcnNJbnZlc3RlZCkge1xuICAgIGNvbnN0IHJvaTIgPSAoaW5pdGlhbERlcG9zaXQgKiBNYXRoLnBvdygoMSArIGRlc2lyZWRSZXR1cm5zLzEwMCksIHllYXJzSW52ZXN0ZWQpKSArXG4gICAgICAgICAgICAgICAgKHllYXJseURlcG9zaXQgKiAoTWF0aC5wb3coKDEgKyBkZXNpcmVkUmV0dXJucy8xMDApLCB5ZWFyc0ludmVzdGVkKSAtIDEpIC8gKGRlc2lyZWRSZXR1cm5zLzEwMCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm9pMjogcm9pMi50b0ZpeGVkKDIpLFxuICAgICAgICB5ZWFyc0ludmVzdGVkMjogeWVhcnNJbnZlc3RlZCxcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJjYWxjdWxhdGVST0lDYXNoQW5kQm9uZHMiLCJpbml0aWFsRGVwb3NpdCIsInllYXJseURlcG9zaXQiLCJkZXNpcmVkUmV0dXJucyIsInllYXJzSW52ZXN0ZWQiLCJyb2kyIiwiTWF0aCIsInBvdyIsInRvRml4ZWQiLCJ5ZWFyc0ludmVzdGVkMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/cashAndBonds.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHVCQUF1QjtJQUU1QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7RUFFQUQsV0FBV0EsQ0FBQSxFQUFFO0lBQ1QsSUFBSSxDQUFDSCxHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE1BQU07RUFDM0M7QUFDSjtBQUVBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9pLWNhbGN1bGF0b3IvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3MgQUxJVkUhITwvaDE+XCI7XG5cbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/otherAssets.js":
/*!************************************!*\
  !*** ./src/scripts/otherAssets.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateROIOtherAssets: function() { return /* binding */ calculateROIOtherAssets; }\n/* harmony export */ });\nfunction calculateROIOtherAssets(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {\n  const roi3 = initialDeposit * Math.pow(1 + desiredReturns / 100, yearsInvested) + yearlyDeposit * (Math.pow(1 + desiredReturns / 100, yearsInvested) - 1) / (desiredReturns / 100);\n  return {\n    roi3: roi3.toFixed(2),\n    yearsInvested3: yearsInvested\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vdGhlckFzc2V0cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsdUJBQXVCQSxDQUFDQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUU7RUFDbEcsTUFBTUMsSUFBSSxHQUFJSixjQUFjLEdBQUdLLElBQUksQ0FBQ0MsR0FBRyxDQUFFLENBQUMsR0FBR0osY0FBYyxHQUFDLEdBQUcsRUFBR0MsYUFBYSxDQUFDLEdBQy9FRixhQUFhLElBQUlJLElBQUksQ0FBQ0MsR0FBRyxDQUFFLENBQUMsR0FBR0osY0FBYyxHQUFDLEdBQUcsRUFBR0MsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUlELGNBQWMsR0FBQyxHQUFHLENBQUU7RUFFaEcsT0FBTztJQUNIRSxJQUFJLEVBQUVBLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQkMsY0FBYyxFQUFFTDtFQUNwQixDQUFDO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2ktY2FsY3VsYXRvci8uL3NyYy9zY3JpcHRzL290aGVyQXNzZXRzLmpzP2YwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVJPSU90aGVyQXNzZXRzKGluaXRpYWxEZXBvc2l0LCB5ZWFybHlEZXBvc2l0LCBkZXNpcmVkUmV0dXJucywgeWVhcnNJbnZlc3RlZCkge1xuICAgIGNvbnN0IHJvaTMgPSAoaW5pdGlhbERlcG9zaXQgKiBNYXRoLnBvdygoMSArIGRlc2lyZWRSZXR1cm5zLzEwMCksIHllYXJzSW52ZXN0ZWQpKSArXG4gICAgKHllYXJseURlcG9zaXQgKiAoTWF0aC5wb3coKDEgKyBkZXNpcmVkUmV0dXJucy8xMDApLCB5ZWFyc0ludmVzdGVkKSAtIDEpIC8gKGRlc2lyZWRSZXR1cm5zLzEwMCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm9pMzogcm9pMy50b0ZpeGVkKDIpLFxuICAgICAgICB5ZWFyc0ludmVzdGVkMzogeWVhcnNJbnZlc3RlZFxuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FsY3VsYXRlUk9JT3RoZXJBc3NldHMiLCJpbml0aWFsRGVwb3NpdCIsInllYXJseURlcG9zaXQiLCJkZXNpcmVkUmV0dXJucyIsInllYXJzSW52ZXN0ZWQiLCJyb2kzIiwiTWF0aCIsInBvdyIsInRvRml4ZWQiLCJ5ZWFyc0ludmVzdGVkMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/otherAssets.js\n");

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
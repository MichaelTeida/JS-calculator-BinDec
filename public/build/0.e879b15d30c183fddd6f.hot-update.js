"use strict";
self["webpackHotUpdatereact_calculator_bindec"](0,{

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DecCalculator = /*#__PURE__*/function (_Calculator) {
  _inherits(DecCalculator, _Calculator);
  var _super = _createSuper(DecCalculator);
  function DecCalculator() {
    _classCallCheck(this, DecCalculator);
    return _super.apply(this, arguments);
  }
  _createClass(DecCalculator, [{
    key: "add",
    value:
    /**
     * Method add numbers in two array
     */
    function add(numberX, numberY) {
      var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (var i = numberX.length - 1; i >= 0; i--) {
        var carryBit = numberX[i] + numberY[i] + result[i];
        if (carryBit >= 10) {
          result[i] = carryBit - 10;
          result[i - 1] = 1;
        } else if (carryBit === 3) {
          result[i] = 1;
          result[i - 1] = 1;
        } else {
          result[i] = carryBit;
        }
      }

      // for (let i = numberX.length - 1; i >= 0; i--) {
      //     let carryBit = numberX[i] + numberY[i] + result[i];
      //     if (carryBit === 2) {
      //         result[i] = 0;
      //         result[i - 1] = 1;
      //     } else if (carryBit === 3) {
      //         result[i] = 1;
      //         result[i - 1] = 1;
      //     } else {
      //         result[i] = carryBit;
      //     }
      // }
      return result;
    }

    /**
     * Method changing number
     */
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      var input = root.firstElementChild;
      input.setAttribute("contenteditable", "true");
      input.classList.add("active");
      input.focus();
      this.checkNumber();
      this.updateResult();
    }
  }]);
  return DecCalculator;
}(_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e18d322ba4ac1413fa7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lODc5YjE1ZDMwYzE4M2ZkZGQ2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUFBLElBRWhDQyxhQUFhLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFBQSxTQUFBQSxjQUFBO0lBQUFLLGVBQUEsT0FBQUwsYUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixhQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQTtJQUVmO0FBQ0o7QUFDQTtJQUNJLFNBQUFDLElBQUlDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO01BQ2xCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BRXhDLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUlFLFFBQVEsR0FBR0wsT0FBTyxDQUFDRyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxDQUFDLENBQUM7UUFDbEQsSUFBSUUsUUFBUSxJQUFJLEVBQUUsRUFBRTtVQUNoQkgsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBR0UsUUFBUSxHQUFHLEVBQUU7VUFDekJILE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckIsQ0FBQyxNQUNJLElBQUlFLFFBQVEsS0FBSyxDQUFDLEVBQUU7VUFDckJILE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQztVQUNiRCxNQUFNLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JCLENBQUMsTUFBTTtVQUNIRCxNQUFNLENBQUNDLENBQUMsQ0FBQyxHQUFHRSxRQUFRO1FBQ3hCO01BQ0o7O01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsT0FBT0gsTUFBTTtJQUNqQjs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBTCxHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBUSxhQUFhQyxJQUFJLEVBQUU7TUFDZixJQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsaUJBQWlCO01BQ3BDRCxLQUFLLENBQUNFLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7TUFDN0NGLEtBQUssQ0FBQ0csU0FBUyxDQUFDWixHQUFHLENBQUMsUUFBUSxDQUFDO01BQzdCUyxLQUFLLENBQUNJLEtBQUssQ0FBQyxDQUFDO01BRWIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZCO0VBQUM7RUFBQSxPQUFBMUIsYUFBQTtBQUFBLEVBaER1QkQsbURBQVU7QUFtRHRDLGlFQUFlQyxhQUFhOzs7Ozs7OztVQ3JENUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy8uL3B1YmxpYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBhZGQgbnVtYmVycyBpbiB0d28gYXJyYXlcbiAgICAgKi9cbiAgICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBudW1iZXJYLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgY2FycnlCaXQgPSBudW1iZXJYW2ldICsgbnVtYmVyWVtpXSArIHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmIChjYXJyeUJpdCA+PSAxMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGNhcnJ5Qml0IC0gMTA7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjYXJyeUJpdCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGNhcnJ5Qml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IG51bWJlclgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgLy8gICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xuICAgICAgICAvLyAgICAgaWYgKGNhcnJ5Qml0ID09PSAyKSB7XG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0W2ldID0gMDtcbiAgICAgICAgLy8gICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoY2FycnlCaXQgPT09IDMpIHtcbiAgICAgICAgLy8gICAgICAgICByZXN1bHRbaV0gPSAxO1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICByZXN1bHRbaV0gPSBjYXJyeUJpdDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBjaGFuZ2luZyBudW1iZXJcbiAgICAgKi9cbiAgICBjaGFuZ2VOdW1iZXIocm9vdCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIilcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUxOGQzMjJiYTRhYzE0MTNmYTdmXCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJEZWNDYWxjdWxhdG9yIiwiX0NhbGN1bGF0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkIiwibnVtYmVyWCIsIm51bWJlclkiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiY2FycnlCaXQiLCJjaGFuZ2VOdW1iZXIiLCJyb290IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImZvY3VzIiwiY2hlY2tOdW1iZXIiLCJ1cGRhdGVSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9
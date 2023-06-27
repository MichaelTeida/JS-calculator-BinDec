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
        if (carryBit === 2) {
          result[i] = 0;
          result[i - 1] = 1;
        } else if (carryBit === 3) {
          result[i] = 1;
          result[i - 1] = 1;
        } else {
          result[i] = carryBit;
        }
      }
      return result;
    }

    /**
     * Method changing number
     */
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      var input = root.firstElementChild;
      // input.innerText = +input.innerText === 0 ? 1 : 0;

      input.innerText = 0;
      input.classList.toggle("active");
      input.setAttribute("contenteditable", "true");
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
/******/ 	__webpack_require__.h = () => ("22ffc2f5eb650bd83609")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yM2JiOWMxNTkxMzU2M2I2NTZlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUFBLElBRWhDQyxhQUFhLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFBQSxTQUFBQSxjQUFBO0lBQUFLLGVBQUEsT0FBQUwsYUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixhQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQTtJQUVmO0FBQ0o7QUFDQTtJQUNJLFNBQUFDLElBQUlDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO01BQ2xCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3hDLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUlFLFFBQVEsR0FBR0wsT0FBTyxDQUFDRyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxDQUFDLENBQUM7UUFDbEQsSUFBSUUsUUFBUSxLQUFLLENBQUMsRUFBRTtVQUNoQkgsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBRyxDQUFDO1VBQ2JELE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckIsQ0FBQyxNQUFNLElBQUlFLFFBQVEsS0FBSyxDQUFDLEVBQUU7VUFDdkJILE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQztVQUNiRCxNQUFNLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JCLENBQUMsTUFBTTtVQUNIRCxNQUFNLENBQUNDLENBQUMsQ0FBQyxHQUFHRSxRQUFRO1FBQ3hCO01BQ0o7TUFDQSxPQUFPSCxNQUFNO0lBQ2pCOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFRLGFBQWFDLElBQUksRUFBRTtNQUNmLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxpQkFBaUI7TUFDcEM7O01BRUFELEtBQUssQ0FBQ0UsU0FBUyxHQUFHLENBQUM7TUFDbkJGLEtBQUssQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ2hDSixLQUFLLENBQUNLLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7TUFFN0MsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZCO0VBQUM7RUFBQSxPQUFBM0IsYUFBQTtBQUFBLEVBbkN1QkQsbURBQVU7QUFzQ3RDLGlFQUFlQyxhQUFhOzs7Ozs7OztVQ3hDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy8uL3B1YmxpYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBhZGQgbnVtYmVycyBpbiB0d28gYXJyYXlcbiAgICAgKi9cbiAgICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBmb3IgKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGNhcnJ5Qml0ID0gbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoY2FycnlCaXQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSAwO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJyeUJpdCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGNhcnJ5Qml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgICAqL1xuICAgIGNoYW5nZU51bWJlcihyb290KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgLy8gaW5wdXQuaW5uZXJUZXh0ID0gK2lucHV0LmlubmVyVGV4dCA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgIGlucHV0LmlubmVyVGV4dCA9IDA7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIilcblxuICAgICAgICB0aGlzLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIyZmZjMmY1ZWI2NTBiZDgzNjA5XCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJEZWNDYWxjdWxhdG9yIiwiX0NhbGN1bGF0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkIiwibnVtYmVyWCIsIm51bWJlclkiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiY2FycnlCaXQiLCJjaGFuZ2VOdW1iZXIiLCJyb290IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImNoZWNrTnVtYmVyIiwidXBkYXRlUmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
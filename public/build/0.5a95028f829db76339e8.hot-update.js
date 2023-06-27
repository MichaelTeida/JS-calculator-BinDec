"use strict";
self["webpackHotUpdatereact_calculator_bindec"](0,{

/***/ 28:
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

var BinaryCalculator = /*#__PURE__*/function (_Calculator) {
  _inherits(BinaryCalculator, _Calculator);
  var _super = _createSuper(BinaryCalculator);
  function BinaryCalculator() {
    _classCallCheck(this, BinaryCalculator);
    return _super.apply(this, arguments);
  }
  _createClass(BinaryCalculator, [{
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
      input.innerText = +input.innerText === 0 ? 1 : 0;
      this.checkNumber();
      this.updateResult();
    }
  }]);
  return BinaryCalculator;
}(_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BinaryCalculator);

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* abstract */
var Calculator = /*#__PURE__*/function () {
  function Calculator(selectorName) {
    _classCallCheck(this, Calculator);
    this.name = selectorName;
    this.$calculatorDOMElement = document.querySelector(selectorName);
    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.initEvents();
  }

  /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
  _createClass(Calculator, [{
    key: "add",
    value: function add(numberX, numberY) {
      console.error("Powinieneśzaimplementować tę metodę w klasie dziedziczącej.");
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }

    /* Abstract method changing number
     *  @param {jQuery element} root Parent element
     */
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      console.error("Powinieneś zaimplementować tę metodę w klasie dziedziczącej. ");
    }

    /* Method changing Result
     */
  }, {
    key: "updateResult",
    value: function updateResult() {
      var results = this.$calculatorDOMElement.querySelectorAll(".result-bit span");
      this.resultNumberArray.reverse().forEach(function (number, i) {
        results[i].innerText = number;
      });
    }

    /* Check what number is set in both numbers and add
     *  @return {string}
     */
  }, {
    key: "checkNumber",
    value: function checkNumber() {
      var root = this.$calculatorDOMElement;
      var $firstNumber = root.querySelectorAll(".group-number label:first-child");
      var $secondNumber = root.querySelectorAll(".group-number label:nth-child(2)");
      var $resultNumber = root.querySelectorAll(".group-number .result-bit");
      for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
        this.firstNumberArray[i] = parseInt($firstNumber[j].firstElementChild.innerText);
        this.secondNumberArray[i] = parseInt($secondNumber[j].firstElementChild.innerText);
        this.resultNumberArray[i] = parseInt($resultNumber[j].firstElementChild.innerText);
      }
      this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
    }

    /* Set event click on number
     */
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;
      this.$calculatorDOMElement.addEventListener("click", function (event) {
        if (event.target.parentElement.classList.contains("display-number")) {
          var parentLabel = event.target.parentElement;
          _this.changeNumber(parentLabel);
        }
      });
    }
  }]);
  return Calculator;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

/***/ }),

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
      input.innerText = +input.innerText === 0 ? 1 : 0;
      this.checkNumber();
      this.updateResult();
    }
  }]);
  return DecCalculator;
}(_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _DecCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);


document.addEventListener("DOMContentLoaded", function () {
  var bitCalc = new _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__["default"](".binary-calculator");
  var decCalc = new _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__["default"](".dec-calculator");
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d270c026c845cfb21597")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDYkQsTUFBTSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyQixDQUFDLE1BQU07VUFDSEQsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBR0UsUUFBUTtRQUN4QjtNQUNKO01BQ0EsT0FBT0gsTUFBTTtJQUNqQjs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBTCxHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBUSxhQUFhQyxJQUFJLEVBQUU7TUFDZixJQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsaUJBQWlCO01BQ3BDRCxLQUFLLENBQUNFLFNBQVMsR0FBRyxDQUFDRixLQUFLLENBQUNFLFNBQVMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFFaEQsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZCO0VBQUM7RUFBQSxPQUFBOEIsYUFBQTtBQUFBLEVBL0J1QnZELG1EQUFVO0FBa0N0QyxpRUFBZXVELGFBQWE7Ozs7Ozs7Ozs7QUNwQ3NCO0FBQ047QUFFNUMxQixRQUFRLENBQUNtQixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xELElBQU1RLE9BQU8sR0FBRyxJQUFJdkQseURBQWdCLENBQUMsb0JBQW9CLENBQUM7RUFDMUQsSUFBTXdELE9BQU8sR0FBRyxJQUFJeEQseURBQWdCLENBQUMsaUJBQWlCLENBQUM7QUFDekQsQ0FBQyxDQUFDOzs7Ozs7OztVQ05GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY2FsY3VsYXRvci1iaW5kZWMvLi9wdWJsaWMvanMvQmluYXJ5Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy8uL3B1YmxpYy9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjLy4vcHVibGljL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2FsY3VsYXRvci1iaW5kZWMvLi9wdWJsaWMvanMvYXBwLmpzIiwid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIEJpbmFyeUNhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcbiAgLyoqXG4gICAqIE1ldGhvZCBhZGQgbnVtYmVycyBpbiB0d28gYXJyYXlcbiAgICovXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XG4gICAgbGV0IHJlc3VsdCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICBmb3IgKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNhcnJ5Qml0ID0gbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XG4gICAgICBpZiAoY2FycnlCaXQgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gMDtcbiAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IDE7XG4gICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgKi9cbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcbiAgICBjb25zdCBpbnB1dCA9IHJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaW5wdXQuaW5uZXJUZXh0ID0gK2lucHV0LmlubmVyVGV4dCA9PT0gMCA/IDEgOiAwO1xuXG4gICAgdGhpcy5jaGVja051bWJlcigpO1xuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5Q2FsY3VsYXRvcjtcbiIsIi8qIGFic3RyYWN0ICovXG5jbGFzcyBDYWxjdWxhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck5hbWUpO1xuXG4gICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XG4gICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheSA9IFtdO1xuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cblxuICAvKiBBYnN0cmFjdCBtZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XG4gICAqICBAcGFyYW0ge2FycmF5fSBudW1iZXJYIEZpcnN0IG51bWJlclxuICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWSBTZWNvbmQgbnVtYmVyXG4gICAqICBAcmV0dXJuIHthcnJheX1cbiAgICovXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiUG93aW5pZW5lxZvCm3phaW1wbGVtZW50b3dhxIcgdMSZIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcbiAgICApO1xuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIH1cblxuICAvKiBBYnN0cmFjdCBtZXRob2QgY2hhbmdpbmcgbnVtYmVyXG4gICAqICBAcGFyYW0ge2pRdWVyeSBlbGVtZW50fSByb290IFBhcmVudCBlbGVtZW50XG4gICAqL1xuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIlBvd2luaWVuZcWbwpsgemFpbXBsZW1lbnRvd2HEhyB0xJnChSBtZXRvZMSZwpkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouIFwiXG4gICAgKTtcbiAgfVxuXG4gIC8qIE1ldGhvZCBjaGFuZ2luZyBSZXN1bHRcbiAgICovXG4gIHVwZGF0ZVJlc3VsdCgpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnJlc3VsdC1iaXQgc3BhblwiXG4gICAgKTtcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcbiAgICAgIHJlc3VsdHNbaV0uaW5uZXJUZXh0ID0gbnVtYmVyO1xuICAgIH0pO1xuICB9XG5cbiAgLyogQ2hlY2sgd2hhdCBudW1iZXIgaXMgc2V0IGluIGJvdGggbnVtYmVycyBhbmQgYWRkXG4gICAqICBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBjaGVja051bWJlcigpIHtcbiAgICBsZXQgcm9vdCA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xuICAgIGxldCAkZmlyc3ROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOmZpcnN0LWNoaWxkXCIpO1xuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOm50aC1jaGlsZCgyKVwiXG4gICAgKTtcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XG5cbiAgICBmb3IgKGxldCBpID0gJGZpcnN0TnVtYmVyLmxlbmd0aCAtIDEsIGogPSAwOyBpID49IDA7IGktLSwgaisrKSB7XG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCgkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0KTtcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCgkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCk7XG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQpO1xuICAgIH1cblxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSB0aGlzLmFkZChcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSxcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcbiAgICApO1xuICB9XG5cbiAgLyogU2V0IGV2ZW50IGNsaWNrIG9uIG51bWJlclxuICAgKi9cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbnVtYmVyXCIpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudExhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuIiwiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XG4gICAgICovXG4gICAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlclgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKGNhcnJ5Qml0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gMDtcbiAgICAgICAgICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FycnlCaXQgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSAxO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBjYXJyeUJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBjaGFuZ2luZyBudW1iZXJcbiAgICAgKi9cbiAgICBjaGFuZ2VOdW1iZXIocm9vdCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGlucHV0LmlubmVyVGV4dCA9ICtpbnB1dC5pbm5lclRleHQgPT09IDAgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsImltcG9ydCBCaW5hcnlDYWxjdWxhdG9yIGZyb20gXCIuL0JpbmFyeUNhbGN1bGF0b3JcIjtcbmltcG9ydCBEZWNDYWxjdWxhdG9yIGZyb20gXCIuL0RlY0NhbGN1bGF0b3JcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBiaXRDYWxjID0gbmV3IEJpbmFyeUNhbGN1bGF0b3IoXCIuYmluYXJ5LWNhbGN1bGF0b3JcIik7XG4gIGNvbnN0IGRlY0NhbGMgPSBuZXcgQmluYXJ5Q2FsY3VsYXRvcihcIi5kZWMtY2FsY3VsYXRvclwiKTtcbn0pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQyNzBjMDI2Yzg0NWNmYjIxNTk3XCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJCaW5hcnlDYWxjdWxhdG9yIiwiX0NhbGN1bGF0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkIiwibnVtYmVyWCIsIm51bWJlclkiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiY2FycnlCaXQiLCJjaGFuZ2VOdW1iZXIiLCJyb290IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVyVGV4dCIsImNoZWNrTnVtYmVyIiwidXBkYXRlUmVzdWx0Iiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsInJlc3VsdE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsImNvbnNvbGUiLCJlcnJvciIsInJlc3VsdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCIkZmlyc3ROdW1iZXIiLCIkc2Vjb25kTnVtYmVyIiwiJHJlc3VsdE51bWJlciIsImoiLCJwYXJzZUludCIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50TGFiZWwiLCJEZWNDYWxjdWxhdG9yIiwiYml0Q2FsYyIsImRlY0NhbGMiXSwic291cmNlUm9vdCI6IiJ9
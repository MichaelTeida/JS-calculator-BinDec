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
          result[i] = numberX[i] + numberY[i] - 10;
          result[i - 1] = 1;
        }
        // else if (carryBit === 3) {
        //     result[i] = 1;
        //     result[i - 1] = 1;
        // } else {
        //     result[i] = carryBit;
        // }
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

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _DecCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);


document.addEventListener("DOMContentLoaded", function () {
  var bitCalc = new _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__["default"](".binary-calculator");
  var decCalc = new _DecCalculator__WEBPACK_IMPORTED_MODULE_1__["default"](".dec-calculator");
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e879b15d30c183fddd6f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzUwZmE5ODZmZDhhNDI1YTM3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUFBLElBRWhDQyxhQUFhLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFBQSxTQUFBQSxjQUFBO0lBQUFLLGVBQUEsT0FBQUwsYUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixhQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQTtJQUVmO0FBQ0o7QUFDQTtJQUNJLFNBQUFDLElBQUlDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO01BQ2xCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BRXhDLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUlFLFFBQVEsR0FBR0wsT0FBTyxDQUFDRyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxDQUFDLENBQUM7UUFDbEQsSUFBSUUsUUFBUSxJQUFJLEVBQUUsRUFBRTtVQUNoQkgsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBR0gsT0FBTyxDQUFDRyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDLENBQUMsR0FBRyxFQUFFO1VBQ3hDRCxNQUFNLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0o7O01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsT0FBT0QsTUFBTTtJQUNqQjs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBTCxHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBUSxhQUFhQyxJQUFJLEVBQUU7TUFDZixJQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsaUJBQWlCO01BQ3BDRCxLQUFLLENBQUNFLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7TUFDN0NGLEtBQUssQ0FBQ0csU0FBUyxDQUFDWixHQUFHLENBQUMsUUFBUSxDQUFDO01BQzdCUyxLQUFLLENBQUNJLEtBQUssQ0FBQyxDQUFDO01BRWIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZCO0VBQUM7RUFBQSxPQUFBMUIsYUFBQTtBQUFBLEVBaER1QkQsbURBQVU7QUFtRHRDLGlFQUFlQyxhQUFhOzs7Ozs7Ozs7O0FDckRzQjtBQUNOO0FBRTVDNEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xELElBQU1DLE9BQU8sR0FBRyxJQUFJSCx5REFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztFQUMxRCxJQUFNSSxPQUFPLEdBQUcsSUFBSS9CLHNEQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDdEQsQ0FBQyxDQUFDOzs7Ozs7OztVQ05GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY2FsY3VsYXRvci1iaW5kZWMvLi9wdWJsaWMvanMvRGVjQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2FsY3VsYXRvci1iaW5kZWMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcblxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxuICAgICAqL1xuICAgIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlclgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKGNhcnJ5Qml0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gbnVtYmVyWFtpXSArIG51bWJlcllbaV0gLSAxMDtcbiAgICAgICAgICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzKSB7XG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0W2ldID0gMTtcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRbaSAtIDFdID0gMTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQ7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAvLyAgICAgbGV0IGNhcnJ5Qml0ID0gbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XG4gICAgICAgIC8vICAgICBpZiAoY2FycnlCaXQgPT09IDIpIHtcbiAgICAgICAgLy8gICAgICAgICByZXN1bHRbaV0gPSAwO1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChjYXJyeUJpdCA9PT0gMykge1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpXSA9IDE7XG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpXSA9IGNhcnJ5Qml0O1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgICAqL1xuICAgIGNoYW5nZU51bWJlcihyb290KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKVxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiaW1wb3J0IEJpbmFyeUNhbGN1bGF0b3IgZnJvbSBcIi4vQmluYXJ5Q2FsY3VsYXRvclwiO1xuaW1wb3J0IERlY0NhbGN1bGF0b3IgZnJvbSBcIi4vRGVjQ2FsY3VsYXRvclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGJpdENhbGMgPSBuZXcgQmluYXJ5Q2FsY3VsYXRvcihcIi5iaW5hcnktY2FsY3VsYXRvclwiKTtcbiAgY29uc3QgZGVjQ2FsYyA9IG5ldyBEZWNDYWxjdWxhdG9yKFwiLmRlYy1jYWxjdWxhdG9yXCIpO1xufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTg3OWIxNWQzMGMxODNmZGRkNmZcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJfQ2FsY3VsYXRvciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGQiLCJudW1iZXJYIiwibnVtYmVyWSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJjYXJyeUJpdCIsImNoYW5nZU51bWJlciIsInJvb3QiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiZm9jdXMiLCJjaGVja051bWJlciIsInVwZGF0ZVJlc3VsdCIsIkJpbmFyeUNhbGN1bGF0b3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaXRDYWxjIiwiZGVjQ2FsYyJdLCJzb3VyY2VSb290IjoiIn0=
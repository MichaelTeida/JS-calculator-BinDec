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
      input.setAttribute("contenteditable", "true");
      input.focus(input.classList.toggle("active"));
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
/******/ 	__webpack_require__.h = () => ("74ca0f66f5af5ab4f0c3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzU3NjMwNWZlOTEyZDg2ZDc4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUFBLElBRWhDQyxhQUFhLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFBQSxTQUFBQSxjQUFBO0lBQUFLLGVBQUEsT0FBQUwsYUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixhQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQTtJQUVmO0FBQ0o7QUFDQTtJQUNJLFNBQUFDLElBQUlDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO01BQ2xCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3hDLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUlFLFFBQVEsR0FBR0wsT0FBTyxDQUFDRyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxDQUFDLENBQUM7UUFDbEQsSUFBSUUsUUFBUSxLQUFLLENBQUMsRUFBRTtVQUNoQkgsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBRyxDQUFDO1VBQ2JELE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckIsQ0FBQyxNQUFNLElBQUlFLFFBQVEsS0FBSyxDQUFDLEVBQUU7VUFDdkJILE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQztVQUNiRCxNQUFNLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JCLENBQUMsTUFBTTtVQUNIRCxNQUFNLENBQUNDLENBQUMsQ0FBQyxHQUFHRSxRQUFRO1FBQ3hCO01BQ0o7TUFDQSxPQUFPSCxNQUFNO0lBQ2pCOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFRLGFBQWFDLElBQUksRUFBRTtNQUNmLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxpQkFBaUI7TUFDcEM7TUFDQUQsS0FBSyxDQUFDRSxZQUFZLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDO01BRzdDRixLQUFLLENBQUNHLEtBQUssQ0FBQ0gsS0FBSyxDQUFDSSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztNQUM3QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQ2xCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDdkI7RUFBQztFQUFBLE9BQUEzQixhQUFBO0FBQUEsRUFsQ3VCRCxtREFBVTtBQXFDdEMsaUVBQWVDLGFBQWE7Ozs7Ozs7Ozs7QUN2Q3NCO0FBQ047QUFFNUM2QixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbEQsSUFBTUMsT0FBTyxHQUFHLElBQUlILHlEQUFnQixDQUFDLG9CQUFvQixDQUFDO0VBQzFELElBQU1JLE9BQU8sR0FBRyxJQUFJaEMsc0RBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUN0RCxDQUFDLENBQUM7Ozs7Ozs7O1VDTkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy8uL3B1YmxpYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XG4gICAgICovXG4gICAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlclgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKGNhcnJ5Qml0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gMDtcbiAgICAgICAgICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FycnlCaXQgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSAxO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBjYXJyeUJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBjaGFuZ2luZyBudW1iZXJcbiAgICAgKi9cbiAgICBjaGFuZ2VOdW1iZXIocm9vdCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIC8vIGlucHV0LmlubmVyVGV4dCA9ICtpbnB1dC5pbm5lclRleHQgPT09IDAgPyAxIDogMDtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKVxuXG5cbiAgICAgICAgaW5wdXQuZm9jdXMoaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiaW1wb3J0IEJpbmFyeUNhbGN1bGF0b3IgZnJvbSBcIi4vQmluYXJ5Q2FsY3VsYXRvclwiO1xuaW1wb3J0IERlY0NhbGN1bGF0b3IgZnJvbSBcIi4vRGVjQ2FsY3VsYXRvclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGJpdENhbGMgPSBuZXcgQmluYXJ5Q2FsY3VsYXRvcihcIi5iaW5hcnktY2FsY3VsYXRvclwiKTtcbiAgY29uc3QgZGVjQ2FsYyA9IG5ldyBEZWNDYWxjdWxhdG9yKFwiLmRlYy1jYWxjdWxhdG9yXCIpO1xufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzRjYTBmNjZmNWFmNWFiNGYwYzNcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJfQ2FsY3VsYXRvciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGQiLCJudW1iZXJYIiwibnVtYmVyWSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJjYXJyeUJpdCIsImNoYW5nZU51bWJlciIsInJvb3QiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaGVja051bWJlciIsInVwZGF0ZVJlc3VsdCIsIkJpbmFyeUNhbGN1bGF0b3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaXRDYWxjIiwiZGVjQ2FsYyJdLCJzb3VyY2VSb290IjoiIn0=
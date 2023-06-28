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
/******/ 	__webpack_require__.h = () => ("e926c292602870db6185")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZjJkMTA3MWEyZWIyZTU5OGYxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUFBLElBRWhDQyxhQUFhLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFBQSxTQUFBQSxjQUFBO0lBQUFLLGVBQUEsT0FBQUwsYUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixhQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQTtJQUVmO0FBQ0o7QUFDQTtJQUNJLFNBQUFDLElBQUlDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO01BQ2xCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BRXhDLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUlFLFFBQVEsR0FBR0wsT0FBTyxDQUFDRyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxDQUFDLENBQUM7UUFDbEQsSUFBSUUsUUFBUSxJQUFJLEVBQUUsRUFBRTtVQUNoQkgsTUFBTSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyQixDQUFDLE1BQU0sSUFBSUUsUUFBUSxLQUFLLENBQUMsRUFBRTtVQUN2QkgsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBRyxDQUFDO1VBQ2JELE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckIsQ0FBQyxNQUFNO1VBQ0hELE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEdBQUdFLFFBQVE7UUFDeEI7TUFDSjs7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQSxPQUFPSCxNQUFNO0lBQ2pCOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFRLGFBQWFDLElBQUksRUFBRTtNQUNmLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxpQkFBaUI7TUFDcENELEtBQUssQ0FBQ0UsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQztNQUM3Q0YsS0FBSyxDQUFDRyxTQUFTLENBQUNaLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDN0JTLEtBQUssQ0FBQ0ksS0FBSyxDQUFDLENBQUM7TUFFYixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQ2xCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDdkI7RUFBQztFQUFBLE9BQUExQixhQUFBO0FBQUEsRUE5Q3VCRCxtREFBVTtBQWlEdEMsaUVBQWVDLGFBQWE7Ozs7Ozs7O1VDbkQ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjLy4vcHVibGljL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2FsY3VsYXRvci1iaW5kZWMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcblxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxuICAgICAqL1xuICAgIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlclgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKGNhcnJ5Qml0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAvLyAgICAgbGV0IGNhcnJ5Qml0ID0gbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XG4gICAgICAgIC8vICAgICBpZiAoY2FycnlCaXQgPT09IDIpIHtcbiAgICAgICAgLy8gICAgICAgICByZXN1bHRbaV0gPSAwO1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChjYXJyeUJpdCA9PT0gMykge1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpXSA9IDE7XG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJlc3VsdFtpXSA9IGNhcnJ5Qml0O1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgICAqL1xuICAgIGNoYW5nZU51bWJlcihyb290KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKVxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTkyNmMyOTI2MDI4NzBkYjYxODVcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJfQ2FsY3VsYXRvciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGQiLCJudW1iZXJYIiwibnVtYmVyWSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJjYXJyeUJpdCIsImNoYW5nZU51bWJlciIsInJvb3QiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiZm9jdXMiLCJjaGVja051bWJlciIsInVwZGF0ZVJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=
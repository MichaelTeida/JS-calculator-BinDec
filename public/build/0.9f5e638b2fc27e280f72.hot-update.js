"use strict";
self["webpackHotUpdatereact_calculator_bindec"](0,{

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a1cd2afa3ad6bb2c348b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUdRLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsaUJBQWlCLENBQUNSLFNBQVMsQ0FBQztNQUNwRjtNQUVBLElBQUksQ0FBQ25CLGlCQUFpQixHQUFHLElBQUksQ0FBQ0ssR0FBRyxDQUMvQixJQUFJLENBQUNQLGdCQUFnQixFQUNyQixJQUFJLENBQUNDLGlCQUNQLENBQUM7SUFDSDs7SUFFQTtBQUNGO0VBREU7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBRUEsU0FBQUgsV0FBQSxFQUFhO01BQUEsSUFBQTJCLEtBQUE7TUFDWCxJQUFJLENBQUNqQyxxQkFBcUIsQ0FBQ2tDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDSixLQUFJLENBQUNsQixZQUFZLENBQUN5QixXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQTVDLFVBQUE7QUFBQTtBQUdILGlFQUFlQSxVQUFVOzs7Ozs7OztVQy9FekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jYWxjdWxhdG9yLWJpbmRlYy8uL3B1YmxpYy9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LWNhbGN1bGF0b3ItYmluZGVjL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhYnN0cmFjdCAqL1xuY2xhc3MgQ2FsY3VsYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xuICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yTmFtZTtcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcblxuICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xuICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICB9XG5cbiAgLyogQWJzdHJhY3QgbWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxuICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWCBGaXJzdCBudW1iZXJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxuICAgKiAgQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIlBvd2luaWVuZcWbwpt6YWltcGxlbWVudG93YcSHIHTEmSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXG4gICAgKTtcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICB9XG5cbiAgLyogQWJzdHJhY3QgbWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgKiAgQHBhcmFtIHtqUXVlcnkgZWxlbWVudH0gcm9vdCBQYXJlbnQgZWxlbWVudFxuICAgKi9cbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCJQb3dpbmllbmXFm8KbIHphaW1wbGVtZW50b3dhxIcgdMSZwoUgbWV0b2TEmcKZIHcga2xhc2llIGR6aWVkemljesSFY2VqLiBcIlxuICAgICk7XG4gIH1cblxuICAvKiBNZXRob2QgY2hhbmdpbmcgUmVzdWx0XG4gICAqL1xuICB1cGRhdGVSZXN1bHQoKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5yZXN1bHQtYml0IHNwYW5cIlxuICAgICk7XG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XG4gICAgICByZXN1bHRzW2ldLmlubmVyVGV4dCA9IG51bWJlcjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIENoZWNrIHdoYXQgbnVtYmVyIGlzIHNldCBpbiBib3RoIG51bWJlcnMgYW5kIGFkZFxuICAgKiAgQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgY2hlY2tOdW1iZXIoKSB7XG4gICAgbGV0IHJvb3QgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudDtcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcbiAgICBsZXQgJHNlY29uZE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdyb3VwLW51bWJlciBsYWJlbDpudGgtY2hpbGQoMilcIlxuICAgICk7XG4gICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIC5yZXN1bHQtYml0XCIpO1xuXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoJGZpcnN0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCk7XG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoJHNlY29uZE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQpO1xuICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KCRyZXN1bHROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gdGhpcy5hZGQoXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5XG4gICAgKTtcbiAgfVxuXG4gIC8qIFNldCBldmVudCBjbGljayBvbiBudW1iZXJcbiAgICovXG4gIGluaXRFdmVudHMoKSB7XG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNwbGF5LW51bWJlclwiKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExY2QyYWZhM2FkNmJiMmMzNDhiXCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJzZWxlY3Rvck5hbWUiLCJfY2xhc3NDYWxsQ2hlY2siLCJuYW1lIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwicmVzdWx0TnVtYmVyQXJyYXkiLCJpbml0RXZlbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGQiLCJudW1iZXJYIiwibnVtYmVyWSIsImNvbnNvbGUiLCJlcnJvciIsImNoYW5nZU51bWJlciIsInJvb3QiLCJ1cGRhdGVSZXN1bHQiLCJyZXN1bHRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJldmVyc2UiLCJmb3JFYWNoIiwibnVtYmVyIiwiaSIsImlubmVyVGV4dCIsImNoZWNrTnVtYmVyIiwiJGZpcnN0TnVtYmVyIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJsZW5ndGgiLCJqIiwicGFyc2VJbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50TGFiZWwiXSwic291cmNlUm9vdCI6IiJ9
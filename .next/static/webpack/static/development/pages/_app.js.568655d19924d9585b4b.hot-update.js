webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/reducer.ts":
/*!**************************!*\
  !*** ./pages/reducer.ts ***!
  \**************************/
/*! exports provided: initialState, IndexReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexReducer", function() { return IndexReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./pages/constants.ts");


var initialState = {
  start: false,
  posts: []
};
var IndexReducer = function IndexReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_POST"]:
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_POST_SUCCESS"]:
        draft.posts = action.data.data;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_POST_FAIELD"]:
        console.log(action.error);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ACTION"]:
        draft.start = true;
        break;

      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (IndexReducer);

/***/ })

})
//# sourceMappingURL=_app.js.568655d19924d9585b4b.hot-update.js.map
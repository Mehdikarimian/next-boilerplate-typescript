module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/actions.ts":
/*!**************************!*\
  !*** ./pages/actions.ts ***!
  \**************************/
/*! exports provided: getAll, getAllSuccess, getAllFaield, defaultAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSuccess", function() { return getAllSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFaield", function() { return getAllFaield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAction", function() { return defaultAction; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./pages/constants.ts");

function getAll() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POST"]
  };
}
function getAllSuccess(data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POST_SUCCESS"],
    data
  };
}
function getAllFaield(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POST_FAIELD"],
    error
  };
}
function defaultAction() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ACTION"]
  };
}

/***/ }),

/***/ "./pages/constants.ts":
/*!****************************!*\
  !*** ./pages/constants.ts ***!
  \****************************/
/*! exports provided: DEFAULT_ACTION, GET_ALL_POST, GET_ALL_POST_SUCCESS, GET_ALL_POST_FAIELD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ACTION", function() { return DEFAULT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POST", function() { return GET_ALL_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POST_SUCCESS", function() { return GET_ALL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POST_FAIELD", function() { return GET_ALL_POST_FAIELD; });
const DEFAULT_ACTION = 'app/index/DEFAULT_ACTION';
const GET_ALL_POST = 'app/index/GET_ALL_POST';
const GET_ALL_POST_SUCCESS = 'app/index/GET_ALL_POST_SUCCESS';
const GET_ALL_POST_FAIELD = 'app/index/GET_ALL_POST_FAIELD';

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./pages/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./pages/selectors.ts");
var _jsxFileName = "/home/mehdi/Projects/jahaninfo/next-boilerplate-ts/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAll"])());
  }

  mapPosts() {
    return this.props.IndexState.posts.map(post => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, post.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, post.body)));
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, this.mapPosts());
  }

}

const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createStructuredSelector"])({
  IndexState: Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["default"])()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(withConnect)(Index));

/***/ }),

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./pages/constants.ts");


const initialState = {
  start: false,
  posts: []
};
const IndexReducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
/* harmony default export */ __webpack_exports__["default"] = (IndexReducer);

/***/ }),

/***/ "./pages/selectors.ts":
/*!****************************!*\
  !*** ./pages/selectors.ts ***!
  \****************************/
/*! exports provided: default, selectImprintDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImprintDomain", function() { return selectIndexDomain; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./pages/reducer.ts");



const selectIndexDomain = state => state.index || _reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"];

const makeSelectPosts = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIndexDomain, substate => substate);

/* harmony default export */ __webpack_exports__["default"] = (makeSelectPosts);


/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mehdi/Projects/jahaninfo/next-boilerplate-ts/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
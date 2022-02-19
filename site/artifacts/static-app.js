(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ atoms_Button; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ atoms_Input; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ atoms_Icon; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ atoms_Select; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ atoms_List; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ atoms_Grid; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ atoms_Card; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ atoms_Title; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ atoms_SubTitle; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ atoms_Paragraph; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ BG_BgImage; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ BG_BgRight; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ BG_BgLeft; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ BG_BgTop; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ BG_BgMarie; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ atoms_Dropdown; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ atoms_Section; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ atoms_More; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ atoms_Less; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ atoms_Hero; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ atoms_Modal; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ atoms_Slider; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ atoms_Textarea; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ Link; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ atoms_Quote; });

// UNUSED EXPORTS: PageContainer, Picture, Animate, Ga

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/PageContainer/styles.scss
var styles = __webpack_require__(78);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/PageContainer/index.js



var PageContainer_PageContainer = function PageContainer(_ref) {
  var children = _ref.children,
      col = _ref.col;
  return /*#__PURE__*/external_react_default.a.createElement(atoms_Grid, {
    className: styles["container"],
    col: col
  }, children);
};
/* harmony default export */ var atoms_PageContainer = (PageContainer_PageContainer);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(23);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(2);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Button/styles.scss
var Button_styles = __webpack_require__(36);
var Button_styles_default = /*#__PURE__*/__webpack_require__.n(Button_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Button/index.jsx





var Button_Button = function Button(_ref) {
  var children = _ref.children,
      to = _ref.to,
      className = _ref.className,
      onClick = _ref.onClick,
      inverse = _ref.inverse;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, to ? /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: to,
    className: external_classnames_default()(Button_styles_default.a.button, className, defineProperty_default()({}, Button_styles_default.a.inverse, inverse)),
    onClick: onClick
  }, children) : /*#__PURE__*/external_react_default.a.createElement("button", {
    className: external_classnames_default()(Button_styles_default.a.button, className, defineProperty_default()({}, Button_styles_default.a.inverse, inverse)),
    onClick: onClick
  }, children));
};
/* harmony default export */ var atoms_Button = (Button_Button);
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(26);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(24);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(11);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Input/styles.scss
var Input_styles = __webpack_require__(21);
var Input_styles_default = /*#__PURE__*/__webpack_require__.n(Input_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Input/index.jsx




var _excluded = ["className", "name", "label", "type", "helperText", "required", "validator", "err"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Input_Input = function Input(_ref) {
  var _cn;

  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      type = _ref.type,
      helperText = _ref.helperText,
      required = _ref.required,
      validator = _ref.validator,
      err = _ref.err,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = slicedToArray_default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(err),
      _useState6 = slicedToArray_default()(_useState5, 2),
      invalid = _useState6[0],
      setInvalid = _useState6[1];

  var _useState7 = Object(external_react_["useState"])({
    "default": required ? '*Champs requis' : '',
    errors: err || []
  }),
      _useState8 = slicedToArray_default()(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  Object(external_react_["useEffect"])(function () {
    setErrors({
      "default": required ? '*Champs requis' : '',
      errors: err || []
    });
  }, [err]);
  Object(external_react_["useEffect"])(function () {
    if (err && err.length > 0) {
      setInvalid(true);
    }
  }, [err]);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setValue(e.target.value);
  }, [value]);
  var onBlur = Object(external_react_["useCallback"])(function (e) {
    var val = e.target.value;
    var err = validator && validator(val);

    if (err || required && val === '') {
      setValid(false);
      setInvalid(true);
      err && setErrors(function (r) {
        return _objectSpread(_objectSpread({}, r), {}, {
          errors: [err]
        });
      });
    } else {
      setInvalid(false);
      setValid(true);
      setErrors(function (r) {
        return _objectSpread(_objectSpread({}, r), {}, {
          errors: []
        });
      });
    }
  }, [value]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.container, className)
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.subContainer, (_cn = {}, defineProperty_default()(_cn, Input_styles_default.a.valid, valid), defineProperty_default()(_cn, Input_styles_default.a.invalid, invalid), _cn))
  }, /*#__PURE__*/external_react_default.a.createElement("input", extends_default()({
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    type: type
  }, props)), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: name
  }, label), valid && !invalid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faCheck"]
  }), invalid && !valid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faTimes"]
  })), errors.errors.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.helper, defineProperty_default()({}, Input_styles_default.a.red, invalid))
  }, errors.errors.join(', ')) : helperText ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Input_styles_default.a.helper
  }, helperText) : errors["default"] ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.helper, defineProperty_default()({}, Input_styles_default.a.red, invalid))
  }, errors["default"]) : null);
};
/* harmony default export */ var atoms_Input = (Input_Input);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(79);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Icon/index.jsx


var Icon_excluded = ["icon", "className", "onClick"];


var Icon_Icon = function Icon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      onClick = _ref.onClick,
      props = objectWithoutProperties_default()(_ref, Icon_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], extends_default()({
    icon: icon,
    className: className,
    onClick: onClick
  }, props));
};
/* harmony default export */ var atoms_Icon = (Icon_Icon);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Select/styles.scss
var Select_styles = __webpack_require__(14);
var Select_styles_default = /*#__PURE__*/__webpack_require__.n(Select_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Select/index.jsx



var Select_excluded = ["className", "name", "label", "options", "helperText", "required", "validator", "err", "onInput"];

function Select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Select_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* TODO: Mega refactor to plan */

var Select_Select = function Select(_ref) {
  var _cn, _cn2;

  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      options = _ref.options,
      helperText = _ref.helperText,
      required = _ref.required,
      validator = _ref.validator,
      err = _ref.err,
      onInput = _ref.onInput,
      props = objectWithoutProperties_default()(_ref, Select_excluded);

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = slicedToArray_default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(err),
      _useState6 = slicedToArray_default()(_useState5, 2),
      invalid = _useState6[0],
      setInvalid = _useState6[1];

  var _useState7 = Object(external_react_["useState"])({
    "default": required ? '*Champs requis' : '',
    errors: err || []
  }),
      _useState8 = slicedToArray_default()(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      showOptions = _useState10[0],
      setShowOptions = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(''),
      _useState12 = slicedToArray_default()(_useState11, 2),
      touched = _useState12[0],
      setTouched = _useState12[1];

  var _useState13 = Object(external_react_["useState"])(false),
      _useState14 = slicedToArray_default()(_useState13, 2),
      active = _useState14[0],
      setActive = _useState14[1];

  var selectInput = Object(external_react_["useRef"])(null);
  var container = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    setErrors({
      "default": required ? '*Champs requis' : '',
      errors: err || []
    });
  }, [err]);
  Object(external_react_["useEffect"])(function () {
    setInvalid(err);
  }, [err]);
  var toggle = Object(external_react_["useCallback"])(function (e) {
    e.preventDefault();
    setTouched('touched');
    setShowOptions(true);
    setActive(true);
  }, []);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setShowOptions(false);

    if (!active) {
      return;
    }

    setActive(false);

    if (container.current.getAttribute('data-status') !== 'touched') {
      return;
    }

    var val = e.target.getAttribute('data-value');
    var oldVal = selectInput.current.getAttribute('data-value');

    if (val && val !== '') {
      setValue(val);
    }

    var err = val && validator && validator(val);

    if (err || required && !val) {
      setValid(false);
      setInvalid(true);
      err && setErrors(function (r) {
        return Select_objectSpread(Select_objectSpread({}, r), {}, {
          errors: [err]
        });
      });
    } else {
      setInvalid(false);
      setValid(true);
      setErrors(function (r) {
        return Select_objectSpread(Select_objectSpread({}, r), {}, {
          errors: []
        });
      });
      onInput && onInput([name, val]);
    }
  }, [active]);
  Object(external_react_["useEffect"])(function () {
    document && document.body.addEventListener('click', onChange);
    return function () {
      document && document.body.removeEventListener('click', onChange);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: container,
    className: external_classnames_default()(Select_styles_default.a.container, className),
    "data-status": touched
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.subContainer, (_cn = {}, defineProperty_default()(_cn, Select_styles_default.a.valid, valid), defineProperty_default()(_cn, Select_styles_default.a.invalid, invalid), _cn))
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: selectInput,
    className: Select_styles_default.a.select,
    onClick: toggle,
    "data-value": value
  }, value), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.options, (_cn2 = {}, defineProperty_default()(_cn2, Select_styles_default.a.show, showOptions), defineProperty_default()(_cn2, Select_styles_default.a["show".concat(options.length)], showOptions), _cn2))
  }, options.map(function (o, i) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: i,
      className: Select_styles_default.a.option,
      "data-value": o,
      onClick: onChange
    }, o);
  })), /*#__PURE__*/external_react_default.a.createElement("input", {
    name: name,
    value: value,
    type: "hidden"
  }), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faCaretDown"]
  })), errors.errors.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.helper, defineProperty_default()({}, Select_styles_default.a.red, invalid))
  }, errors.errors.join(', ')) : helperText ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Select_styles_default.a.helper
  }, helperText) : errors["default"] ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.helper, defineProperty_default()({}, Select_styles_default.a.red, invalid))
  }, errors["default"]) : null);
};
/* harmony default export */ var atoms_Select = (Select_Select);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Picture/styles.scss
var Picture_styles = __webpack_require__(56);
var Picture_styles_default = /*#__PURE__*/__webpack_require__.n(Picture_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Picture/index.jsx




var Picture_Picture = function Picture(_ref) {
  var className = _ref.className,
      image = _ref.image,
      mobileImage = _ref.mobileImage,
      alt = _ref.alt,
      display = _ref.display;
  return /*#__PURE__*/external_react_default.a.createElement("picture", {
    className: external_classnames_default()(Picture_styles_default.a.picture, className, defineProperty_default()({}, Picture_styles_default.a.cover, display === 'cover'))
  }, mobileImage && /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: mobileImage,
    media: "(max-width: 930px)"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: image,
    alt: alt
  }));
};
/* harmony default export */ var atoms_Picture = (Picture_Picture);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/List/styles.scss
var List_styles = __webpack_require__(80);
var List_styles_default = /*#__PURE__*/__webpack_require__.n(List_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/List/index.jsx



var List_List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: external_classnames_default()(List_styles_default.a.list, className)
  }, children);
};

List_List.Item = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("span", null, children));
};

/* harmony default export */ var atoms_List = (List_List);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Grid/styles.scss
var Grid_styles = __webpack_require__(30);
var Grid_styles_default = /*#__PURE__*/__webpack_require__.n(Grid_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Grid/index.jsx




var Grid_Grid = function Grid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      col = _ref.col;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Grid_styles_default.a.grid
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(className, Grid_styles_default.a.content, defineProperty_default()({}, Grid_styles_default.a["grid".concat(col)], true))
  }, children));
};

Grid_Grid.Item = function (_ref2) {
  var children = _ref2.children,
      col = _ref2.col,
      className = _ref2.className;
  var cols = col.split('');
  var colStart = cols.findIndex(function (f) {
    return f === '1';
  }) + 1;
  var colSpan = cols.filter(function (f) {
    return f === '1';
  }).length;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Grid_styles_default.a.item, className, defineProperty_default()({}, Grid_styles_default.a["item".concat(colStart).concat(colSpan)], true))
  }, children);
};

/* harmony default export */ var atoms_Grid = (Grid_Grid);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Card/styles.scss
var Card_styles = __webpack_require__(81);
var Card_styles_default = /*#__PURE__*/__webpack_require__.n(Card_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Card/index.jsx



var Card_Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Card_styles_default.a.card, className)
  }, children);
};
/* harmony default export */ var atoms_Card = (Card_Card);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Title/styles.scss
var Title_styles = __webpack_require__(40);
var Title_styles_default = /*#__PURE__*/__webpack_require__.n(Title_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Title/index.jsx




var Title_Title = function Title(_ref) {
  var _cn;

  var className = _ref.className,
      noMargin = _ref.noMargin,
      centered = _ref.centered,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: external_classnames_default()(Title_styles_default.a.title, className, (_cn = {}, defineProperty_default()(_cn, Title_styles_default.a.noMargin, noMargin), defineProperty_default()(_cn, Title_styles_default.a.centered, centered), _cn))
  }, children);
};
/* harmony default export */ var atoms_Title = (Title_Title);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/SubTitle/styles.scss
var SubTitle_styles = __webpack_require__(41);
var SubTitle_styles_default = /*#__PURE__*/__webpack_require__.n(SubTitle_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/SubTitle/index.jsx




var SubTitle_SubTitle = function SubTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      small = _ref.small;
  return /*#__PURE__*/external_react_default.a.createElement("h3", {
    className: external_classnames_default()(SubTitle_styles_default.a.title, className, defineProperty_default()({}, SubTitle_styles_default.a.small, small))
  }, children);
};

SubTitle_SubTitle.Sub = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: external_classnames_default()(SubTitle_styles_default.a.sub, className)
  }, children);
};

/* harmony default export */ var atoms_SubTitle = (SubTitle_SubTitle);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Paragraph/styles.scss
var Paragraph_styles = __webpack_require__(37);
var Paragraph_styles_default = /*#__PURE__*/__webpack_require__.n(Paragraph_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Paragraph/index.jsx




var Paragraph_Paragraph = function Paragraph(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      strong = _ref.strong,
      emphasis = _ref.emphasis,
      noTopMargin = _ref.noTopMargin;
  return /*#__PURE__*/external_react_default.a.createElement("p", {
    className: external_classnames_default()(Paragraph_styles_default.a.p, className, (_cn = {}, defineProperty_default()(_cn, Paragraph_styles_default.a.strong, strong), defineProperty_default()(_cn, Paragraph_styles_default.a.emphasis, emphasis), defineProperty_default()(_cn, Paragraph_styles_default.a.noTopMargin, noTopMargin), _cn))
  }, children);
};
/* harmony default export */ var atoms_Paragraph = (Paragraph_Paragraph);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/compass.jpg
var compass = __webpack_require__(42);
var compass_default = /*#__PURE__*/__webpack_require__.n(compass);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/boat.jpg
var boat = __webpack_require__(43);
var boat_default = /*#__PURE__*/__webpack_require__.n(boat);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/boat-top.jpg
var boat_top = __webpack_require__(82);
var boat_top_default = /*#__PURE__*/__webpack_require__.n(boat_top);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/palm.jpg
var palm = __webpack_require__(31);
var palm_default = /*#__PURE__*/__webpack_require__.n(palm);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/door-blue.jpg
var door_blue = __webpack_require__(83);
var door_blue_default = /*#__PURE__*/__webpack_require__.n(door_blue);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/door-green.jpg
var door_green = __webpack_require__(44);
var door_green_default = /*#__PURE__*/__webpack_require__.n(door_green);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/desert.jpg
var desert = __webpack_require__(45);
var desert_default = /*#__PURE__*/__webpack_require__.n(desert);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/blue.jpg
var blue = __webpack_require__(46);
var blue_default = /*#__PURE__*/__webpack_require__.n(blue);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/flower.jpg
var flower = __webpack_require__(47);
var flower_default = /*#__PURE__*/__webpack_require__.n(flower);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/knot.jpg
var knot = __webpack_require__(48);
var knot_default = /*#__PURE__*/__webpack_require__.n(knot);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/lucky.jpg
var lucky = __webpack_require__(10);
var lucky_default = /*#__PURE__*/__webpack_require__.n(lucky);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/ocean.jpg
var ocean = __webpack_require__(49);
var ocean_default = /*#__PURE__*/__webpack_require__.n(ocean);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/parot.jpg
var parot = __webpack_require__(57);
var parot_default = /*#__PURE__*/__webpack_require__.n(parot);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/pattern-green.jpg
var pattern_green = __webpack_require__(84);
var pattern_green_default = /*#__PURE__*/__webpack_require__.n(pattern_green);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/pattern-grey.jpg
var pattern_grey = __webpack_require__(85);
var pattern_grey_default = /*#__PURE__*/__webpack_require__.n(pattern_grey);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/pattern-round-grey.jpg
var pattern_round_grey = __webpack_require__(86);
var pattern_round_grey_default = /*#__PURE__*/__webpack_require__.n(pattern_round_grey);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/pencil-heads.jpg
var pencil_heads = __webpack_require__(108);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/pencil-rainbow.jpg
var pencil_rainbow = __webpack_require__(50);
var pencil_rainbow_default = /*#__PURE__*/__webpack_require__.n(pencil_rainbow);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/table-coffee.jpg
var table_coffee = __webpack_require__(58);
var table_coffee_default = /*#__PURE__*/__webpack_require__.n(table_coffee);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/table.jpg
var table = __webpack_require__(51);
var table_default = /*#__PURE__*/__webpack_require__.n(table);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/assets/marie-profile.jpg
var marie_profile = __webpack_require__(59);
var marie_profile_default = /*#__PURE__*/__webpack_require__.n(marie_profile);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/BG/styles.scss
var BG_styles = __webpack_require__(7);
var BG_styles_default = /*#__PURE__*/__webpack_require__.n(BG_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/BG/index.jsx

























function debounce(fn, ms) {
  var _arguments = arguments,
      _this = this;

  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      fn.apply(_this, _arguments);
    }, ms);
  };
}

var LAYOUT_DESKTOP_BREAKPOINT = 760;

var BG_Background = function Background() {
  return /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 1770 1050",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,885,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,885,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,885,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t6"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "r1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "r2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b6"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "gradYellow",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "rgb(255,255,131)"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "rgb(243,243,119)"
  })), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "gradGreen",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "rgb(23,255,199)"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "rgb(23,243,199)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: compass_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c3)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "720",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: boat_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: palm_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: desert_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: pencil_rainbow_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "525",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: ocean_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c3)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "885",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: pattern_grey_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: parot_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: table_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: knot_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c3)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "720",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: pattern_green_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: desert_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: ocean_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: flower_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "525",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: door_green_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c3)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "885",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: blue_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: palm_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: door_green_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: boat_top_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c3)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "720",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: table_coffee_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: knot_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: flower_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#b2)"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    height: "400",
    width: "400",
    x: "165",
    y: "870",
    fill: "url(#gradYellow)"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#b3)"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    height: "400",
    width: "400",
    x: "525",
    y: "870",
    fill: "url(#gradGreen)"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#b4)"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    height: "400",
    width: "400",
    x: "885",
    y: "870",
    fill: "url(#gradYellow)"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#b5)"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    height: "400",
    width: "400",
    x: "1245",
    y: "870",
    fill: "url(#gradGreen)"
  })));
};

var BG_Left = function Left() {
  return /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 1770 1050",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,-180)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "-165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: blue_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: compass_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: palm_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: table_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: pencil_rainbow_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: boat_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: door_blue_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: flower_default.a
  })));
};

var BG_Right = function Right() {
  return /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 1770 1050",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,-180)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: palm_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: ocean_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: table_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: knot_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: door_green_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: table_coffee_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: pattern_round_grey_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: parot_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "-165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: blue_default.a
  })));
};

var BG_Top = function Top() {
  return /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 1770 1050",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t6"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,-180)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t1)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "-180",
    y: "-180",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t2)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "180",
    y: "-180",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: compass_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t3)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "540",
    y: "-180",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: boat_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t4)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "900",
    y: "-180",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: palm_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t5)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1260",
    y: "-180",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: desert_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#t6)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1620",
    y: "-180",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: pencil_rainbow_default.a
  })));
};

var BG_BgImage = function BgImage(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/external_react_default.a.createElement(BG_Background, null));
};
var BG_BgLeft = function BgLeft(_ref2) {
  var className = _ref2.className,
      mini = _ref2.mini;
  var browserWindow = typeof window !== 'undefined' ? window : false;

  var _useState = Object(external_react_["useState"])(browserWindow ? browserWindow.innerWidth : null),
      _useState2 = slicedToArray_default()(_useState, 2),
      ww = _useState2[0],
      setww = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var handleResize = debounce(function () {
      setww(browserWindow.innerWidth);
    }, 200);
    browserWindow.addEventListener('resize', handleResize);
    return function () {
      browserWindow.removeEventListener('resize', handleResize);
    };
  });
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: className
  }, ww < LAYOUT_DESKTOP_BREAKPOINT ? mini ? /*#__PURE__*/external_react_default.a.createElement(BG_Top, null) : /*#__PURE__*/external_react_default.a.createElement(BG_Background, null) : /*#__PURE__*/external_react_default.a.createElement(BG_Left, null));
};
var BG_BgRight = function BgRight(_ref3) {
  var className = _ref3.className,
      mini = _ref3.mini;
  var browserWindow = typeof window !== 'undefined' ? window : false;

  var _useState3 = Object(external_react_["useState"])(browserWindow ? browserWindow.innerWidth : null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      ww = _useState4[0],
      setww = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    var handleResize = debounce(function () {
      setww(browserWindow.innerWidth);
    }, 200);
    browserWindow.addEventListener('resize', handleResize);
    return function () {
      browserWindow.removeEventListener('resize', handleResize);
    };
  });
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: className
  }, ww < LAYOUT_DESKTOP_BREAKPOINT ? mini ? /*#__PURE__*/external_react_default.a.createElement(BG_Top, null) : /*#__PURE__*/external_react_default.a.createElement(BG_Background, null) : /*#__PURE__*/external_react_default.a.createElement(BG_Right, null));
};
var BG_BgTop = function BgTop(_ref4) {
  var className = _ref4.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/external_react_default.a.createElement(BG_Top, null));
};
var BG_BgTest = function BgTest(_ref5) {
  var className = _ref5.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 1770 1050",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,885,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,0)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,885,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l3c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,360)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l4c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,885,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1245,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l5c5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1605,720)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "t6"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,-180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "r1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "r2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,540)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b3"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b4"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1065,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b5"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1425,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "b6"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,1785,900)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l1"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,180)"
  })), /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "l2"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,540)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c1)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "165px 0px",
      animationDelay: "0s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c2)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "525px 0px",
      animationDelay: ".1s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c3)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "885px 0px",
      animationDelay: ".2s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "720",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c4)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1245px 0px",
      animationDelay: ".3s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l1c5)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1605px 0px",
      animationDelay: ".4s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c1)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "345px 180px",
      animationDelay: ".1s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c2)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "705px 180px",
      animationDelay: ".2s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "525",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c3)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1065px 180px",
      animationDelay: ".3s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "885",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l2c4)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1425px 180px",
      animationDelay: ".4s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "165",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c1)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "165px 360px",
      animationDelay: ".2s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c2)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "525px 360px",
      animationDelay: ".3s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c3)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "885px 360px",
      animationDelay: ".4s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "720",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c4)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1245px 360px",
      animationDelay: ".5s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l3c5)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1605px 360px",
      animationDelay: ".6s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "330",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c1)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "345px 540px",
      animationDelay: ".3s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "165",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c2)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "705px 540px",
      animationDelay: ".4s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "525",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c3)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1065px 540px",
      animationDelay: ".5s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "885",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l4c4)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1425px 540px",
      animationDelay: ".6s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1245",
    y: "510",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c1)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "165px 720px",
      animationDelay: ".4s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "0",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c2)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "525px 720px",
      animationDelay: ".5s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "360",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c3)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "885px 720px",
      animationDelay: ".6s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "720",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c4)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1245px 720px",
      animationDelay: ".7s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1080",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#l5c5)",
    className: BG_styles_default.a.diamond,
    style: {
      transformOrigin: "1605px 720px",
      animationDelay: ".8s"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "400",
    width: "400",
    x: "1440",
    y: "690",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: lucky_default.a
  }))));
};
var BG_BgMarie = function BgMarie(_ref6) {
  var className = _ref6.className;
  var browserWindow = typeof window !== 'undefined' ? window : false;

  var _useState5 = Object(external_react_["useState"])(browserWindow ? browserWindow.innerWidth : null),
      _useState6 = slicedToArray_default()(_useState5, 2),
      ww = _useState6[0],
      setww = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    var handleResize = debounce(function () {
      setww(browserWindow.innerWidth);
    }, 200);
    browserWindow.addEventListener('resize', handleResize);
    return function () {
      browserWindow.removeEventListener('resize', handleResize);
    };
  });
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: className
  }, ww < LAYOUT_DESKTOP_BREAKPOINT ? /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 768 1152",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "mask"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,0)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,0)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,180)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,705,180)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,360)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,360)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,-15,180)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#mask)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "1152",
    width: "768",
    x: "0",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: marie_profile_default.a
  }))) : /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: BG_styles_default.a.image,
    viewBox: "0 0 1770 1050",
    preserveAspectRatio: "xMinYMin"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("clipPath", {
    id: "mask"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,0)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,0)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,180)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,360)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,360)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,540)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,165,720)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,525,720)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,-180)"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "233.4",
    height: "233.4",
    transform: "matrix(0.707,0.707,-0.707,0.707,345,900)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    clipPath: "url(#mask)"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    height: "1152",
    width: "768",
    x: "-30",
    y: "0",
    preserveAspectRatio: "xMinYMin slice",
    xlinkHref: marie_profile_default.a
  }))));
};
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Dropdown/styles.scss
var Dropdown_styles = __webpack_require__(38);
var Dropdown_styles_default = /*#__PURE__*/__webpack_require__.n(Dropdown_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Dropdown/index.jsx



function Dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Dropdown_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Context = /*#__PURE__*/external_react_default.a.createContext();
var Dropdown_Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _useState = Object(external_react_["useState"])({
    on: true,
    toggle: toggle
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];

  var toggle = function toggle() {
    return setContext(function (e) {
      return Dropdown_objectSpread(Dropdown_objectSpread({}, e), {}, {
        on: !e.on
      });
    });
  };

  Object(external_react_["useEffect"])(function () {
    setContext(function (e) {
      return Dropdown_objectSpread(Dropdown_objectSpread({}, e), {}, {
        toggle: toggle
      });
    });
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(Context.Provider, {
    value: context
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Dropdown_styles_default.a.wrapper, className)
  }, children));
};

Dropdown_Dropdown.Trigger = function (_ref2) {
  var children = _ref2.children;
  var context = Object(external_react_["useContext"])(Context);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Dropdown_styles_default.a.trigger,
    onClick: context.toggle
  }, children);
};

Dropdown_Dropdown.Content = function (_ref3) {
  var children = _ref3.children;
  var context = Object(external_react_["useContext"])(Context);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Dropdown_styles_default.a.content, defineProperty_default()({}, Dropdown_styles_default.a.on, context.on))
  }, children);
};

Dropdown_Dropdown.Closed = function (_ref4) {
  var children = _ref4.children;
  var context = Object(external_react_["useContext"])(Context);
  return !context.on ? children : null;
};

Dropdown_Dropdown.Opened = function (_ref5) {
  var children = _ref5.children;
  var context = Object(external_react_["useContext"])(Context);
  return context.on ? children : null;
};

/* harmony default export */ var atoms_Dropdown = (Dropdown_Dropdown);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Section/styles.scss
var Section_styles = __webpack_require__(12);
var Section_styles_default = /*#__PURE__*/__webpack_require__.n(Section_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Section/index.jsx





var Section_Section = function Section(_ref) {
  var _cn, _cn3;

  var children = _ref.children,
      bg = _ref.bg,
      margin = _ref.margin,
      bgLeft = _ref.bgLeft,
      bgRight = _ref.bgRight,
      bgTop = _ref.bgTop,
      className = _ref.className,
      noTopMargin = _ref.noTopMargin,
      home = _ref.home,
      marie = _ref.marie,
      mini = _ref.mini;
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: external_classnames_default()(Section_styles_default.a.section, className, (_cn = {}, defineProperty_default()(_cn, Section_styles_default.a.wrapper, bg || bgRight || bgLeft || bgTop || marie), defineProperty_default()(_cn, Section_styles_default.a.marginBottom, bgRight || bgTop || bgLeft || marie), _cn))
  }, bgTop ? /*#__PURE__*/external_react_default.a.createElement(BG_BgTop, {
    className: external_classnames_default()(Section_styles_default.a.bg, Section_styles_default.a.top)
  }) : bgRight ? /*#__PURE__*/external_react_default.a.createElement(BG_BgRight, {
    className: external_classnames_default()(Section_styles_default.a.bg, Section_styles_default.a.right),
    mini: mini
  }) : bgLeft ? /*#__PURE__*/external_react_default.a.createElement(BG_BgLeft, {
    className: external_classnames_default()(Section_styles_default.a.bg, Section_styles_default.a.left),
    mini: mini
  }) : marie ? /*#__PURE__*/external_react_default.a.createElement(BG_BgMarie, {
    className: external_classnames_default()(Section_styles_default.a.bg, Section_styles_default.a.left, Section_styles_default.a.marie)
  }) : bg ? /*#__PURE__*/external_react_default.a.createElement(BG_BgImage, {
    className: external_classnames_default()(Section_styles_default.a.bg, defineProperty_default()({}, Section_styles_default.a.home, home))
  }) : null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Section_styles_default.a.content, (_cn3 = {}, defineProperty_default()(_cn3, Section_styles_default.a.margin, margin), defineProperty_default()(_cn3, Section_styles_default.a.sides, bgTop || bgRight || bgLeft), defineProperty_default()(_cn3, Section_styles_default.a.noTopMargin, noTopMargin), _cn3))
  }, children));
};
/* harmony default export */ var atoms_Section = (Section_Section);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/More/styles.scss
var More_styles = __webpack_require__(87);
var More_styles_default = /*#__PURE__*/__webpack_require__.n(More_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/More/index.jsx




var More_More = function More() {
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: More_styles_default.a.more
  }, /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faPlus"]
  }));
};
/* harmony default export */ var atoms_More = (More_More);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Less/styles.scss
var Less_styles = __webpack_require__(88);
var Less_styles_default = /*#__PURE__*/__webpack_require__.n(Less_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Less/index.jsx




var Less_Less = function Less() {
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Less_styles_default.a.less
  }, /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faMinus"]
  }));
};
/* harmony default export */ var atoms_Less = (Less_Less);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Hero/styles.scss
var Hero_styles = __webpack_require__(32);
var Hero_styles_default = /*#__PURE__*/__webpack_require__.n(Hero_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Hero/index.jsx





var Hero_Hero = function Hero(_ref) {
  var grey = _ref.grey,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Hero_styles_default.a.hero, defineProperty_default()({}, Hero_styles_default.a.grey, grey))
  }, children);
};

Hero_Hero.Title = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement(atoms_Title, {
    className: Hero_styles_default.a.title
  }, children);
};

Hero_Hero.Content = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      horizontal = _ref3.horizontal;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Hero_styles_default.a.content, className, defineProperty_default()({}, Hero_styles_default.a.horizontal, horizontal))
  }, children);
};

/* harmony default export */ var atoms_Hero = (Hero_Hero);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Modal/styles.scss
var Modal_styles = __webpack_require__(60);
var Modal_styles_default = /*#__PURE__*/__webpack_require__.n(Modal_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Modal/index.jsx



function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Modal_Context = /*#__PURE__*/external_react_default.a.createContext();
var Modal_Modal = function Modal(_ref) {
  var children = _ref.children;

  var _useState = Object(external_react_["useState"])({
    on: false,
    open: open,
    close: close
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];

  var open = function open() {
    return setContext(function (e) {
      return Modal_objectSpread(Modal_objectSpread({}, e), {}, {
        on: true
      });
    });
  };

  var close = function close() {
    return setContext(function (e) {
      return Modal_objectSpread(Modal_objectSpread({}, e), {}, {
        on: false
      });
    });
  };

  Object(external_react_["useEffect"])(function () {
    setContext(function (e) {
      return Modal_objectSpread(Modal_objectSpread({}, e), {}, {
        open: open,
        close: close
      });
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    if (!document) {
      return;
    }

    if (context.on) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [context.on]);
  return /*#__PURE__*/external_react_default.a.createElement(Modal_Context.Provider, {
    value: context
  }, children);
};

Modal_Modal.Content = function (_ref2) {
  var children = _ref2.children;
  var context = Object(external_react_["useContext"])(Modal_Context);

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
    return null;
  };

  return context.on ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Modal_styles_default.a.modal,
    onClick: context.close
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    onClick: stopPropagation,
    className: Modal_styles_default.a.content
  }, children)) : null;
};

Modal_Modal.Consumer = Modal_Context.Consumer;
/* harmony default export */ var atoms_Modal = (Modal_Modal);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Slider/styles.scss
var Slider_styles = __webpack_require__(19);
var Slider_styles_default = /*#__PURE__*/__webpack_require__.n(Slider_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Slider/index.jsx








var Slider_useSliderControl = function useSliderControl(slideNumber) {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      activeSlide = _useState2[0],
      setActiveSlide = _useState2[1];

  var speed = 10000;

  var previous = function previous() {
    return setActiveSlide(activeSlide <= 0 ? slideNumber - 1 : activeSlide - 1);
  };

  var next = function next() {
    return setActiveSlide((activeSlide + 1) % slideNumber);
  };

  var goTo = function goTo(i) {
    return function () {
      return setActiveSlide(i);
    };
  };

  Object(external_react_["useEffect"])(function () {
    var interval = setInterval(function () {
      setActiveSlide(function (active) {
        return (active + 1) % slideNumber;
      });
    }, speed);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  var controls = {
    previous: previous,
    next: next,
    goTo: goTo
  };
  return [controls, activeSlide];
};

var Slider_Slider = function Slider(_ref) {
  var children = _ref.children;

  var _useSliderControl = Slider_useSliderControl(children.length - 1),
      _useSliderControl2 = slicedToArray_default()(_useSliderControl, 2),
      controls = _useSliderControl2[0],
      activeSlide = _useSliderControl2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.slider
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.upper
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.prev,
    onClick: controls.previous
  }, /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faChevronLeft"]
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Slider_styles_default.a.wrapper, Slider_styles_default.a["slide".concat(activeSlide + 1)])
  }, children), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.next,
    onClick: controls.next
  }, /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faChevronRight"]
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.lower
  }, new Array(children.length - 1).fill(1).map(function (_, i) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: "slider-".concat(i),
      onClick: controls.goTo(i),
      className: external_classnames_default()(Slider_styles_default.a.quickAccess, defineProperty_default()({}, Slider_styles_default.a.quickAccessActive, i === activeSlide))
    });
  })));
};

Slider_Slider.Item = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Slider_styles_default.a.item, className)
  }, children);
};

/* harmony default export */ var atoms_Slider = (Slider_Slider);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Textarea/styles.scss
var Textarea_styles = __webpack_require__(22);
var Textarea_styles_default = /*#__PURE__*/__webpack_require__.n(Textarea_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Textarea/index.jsx




var Textarea_excluded = ["className", "name", "label", "type", "helperText", "required", "validator", "err"];

function Textarea_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Textarea_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Textarea_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Textarea_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Textarea_Textarea = function Textarea(_ref) {
  var _cn;

  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      type = _ref.type,
      helperText = _ref.helperText,
      required = _ref.required,
      validator = _ref.validator,
      err = _ref.err,
      props = objectWithoutProperties_default()(_ref, Textarea_excluded);

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = slicedToArray_default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(err),
      _useState6 = slicedToArray_default()(_useState5, 2),
      invalid = _useState6[0],
      setInvalid = _useState6[1];

  var _useState7 = Object(external_react_["useState"])({
    "default": required ? '*Champs requis' : '',
    errors: err || []
  }),
      _useState8 = slicedToArray_default()(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  Object(external_react_["useEffect"])(function () {
    setErrors({
      "default": required ? '*Champs requis' : '',
      errors: err || []
    });
  }, [err]);
  Object(external_react_["useEffect"])(function () {
    if (err && err.length > 0) {
      setInvalid(true);
    }
  }, [err]);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setValue(e.target.value);
  }, [value]);
  var onBlur = Object(external_react_["useCallback"])(function (e) {
    var val = e.target.value;
    var err = validator && validator(val);

    if (err || required && val === '') {
      setValid(false);
      setInvalid(true);
      err && setErrors(function (r) {
        return Textarea_objectSpread(Textarea_objectSpread({}, r), {}, {
          errors: [err]
        });
      });
    } else {
      setInvalid(false);
      setValid(true);
      setErrors(function (r) {
        return Textarea_objectSpread(Textarea_objectSpread({}, r), {}, {
          errors: []
        });
      });
    }
  }, [value]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.container, className)
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.subContainer, (_cn = {}, defineProperty_default()(_cn, Textarea_styles_default.a.valid, valid), defineProperty_default()(_cn, Textarea_styles_default.a.invalid, invalid), _cn))
  }, /*#__PURE__*/external_react_default.a.createElement("textarea", extends_default()({
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    type: type
  }, props)), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: name
  }, label), valid && !invalid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faCheck"]
  }), invalid && !valid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faTimes"]
  })), errors.errors.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.helper, defineProperty_default()({}, Textarea_styles_default.a.red, invalid))
  }, errors.errors.join(', ')) : helperText ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Textarea_styles_default.a.helper
  }, helperText) : errors["default"] ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.helper, defineProperty_default()({}, Textarea_styles_default.a.red, invalid))
  }, errors["default"]) : null);
};
/* harmony default export */ var atoms_Textarea = (Textarea_Textarea);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/utils.js
var utils = __webpack_require__(20);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Link/styles.scss
var Link_styles = __webpack_require__(61);
var Link_styles_default = /*#__PURE__*/__webpack_require__.n(Link_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Link/index.jsx





var Link_CustomLink = function CustomLink(_ref) {
  var children = _ref.children,
      to = _ref.to,
      className = _ref.className,
      noStyle = _ref.noStyle,
      cb = _ref.cb,
      external = _ref.external,
      onClick = _ref.onClick;
  return external ? /*#__PURE__*/external_react_default.a.createElement("a", {
    href: to,
    className: external_classnames_default()(!noStyle && Link_styles_default.a.link, className),
    onClick: Object(utils["a" /* composeCb */])([cb, onClick]),
    target: "_blank"
  }, children) : /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: to,
    className: external_classnames_default()(!noStyle && Link_styles_default.a.link, className),
    onClick: Object(utils["a" /* composeCb */])([cb, onClick])
  }, children);
};
/* harmony default export */ var Link = (Link_CustomLink);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Animate/styles.scss
var Animate_styles = __webpack_require__(27);
var Animate_styles_default = /*#__PURE__*/__webpack_require__.n(Animate_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Animate/index.jsx


var Animate_options = {
  root: null,
  rootMargin: '0px',
  treshold: 1
};

var Animate_callback = function callback(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add(Animate_styles_default.a.isVisible);
    } else {
      entry.target.classList.remove(Animate_styles_default.a.isVisible);
    }
  });
};

var observer;
var Animate_Animate = function Animate(_ref) {
  var children = _ref.children;
  observer = window && observer === undefined ? new IntersectionObserver(Animate_callback, Animate_options) : undefined;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Animate_styles_default.a.parent
  }, children);
};

Animate_Animate.FromLeft = function (_ref2) {
  var children = _ref2.children;
  var node = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    observer.observe(node.current);
    return function () {
      observer.unobserve(node.current);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: node,
    className: Animate_styles_default.a.fromLeft
  }, children);
};

Animate_Animate.FromRight = function (_ref3) {
  var children = _ref3.children;
  var node = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    observer.observe(node.current);
    return function () {
      observer.unobserve(node.current);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: node,
    className: Animate_styles_default.a.fromRight
  }, children);
};

Animate_Animate.FromTop = function (_ref4) {
  var children = _ref4.children;
  var node = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    observer.observe(node.current);
    return function () {
      observer.unobserve(node.current);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: node,
    className: Animate_styles_default.a.fromTop
  }, children);
};

/* harmony default export */ var atoms_Animate = (Animate_Animate);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Quote/styles.scss
var Quote_styles = __webpack_require__(62);
var Quote_styles_default = /*#__PURE__*/__webpack_require__.n(Quote_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/Quote/index.jsx



var Quote_Quote = function Quote(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: external_classnames_default()(Quote_styles_default.a.p, className)
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Quote_styles_default.a.quote
  }, "\u201C"), children);
};
/* harmony default export */ var atoms_Quote = (Quote_Quote);
// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/GA/index.jsx

var content = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J80HMF2KRG');";

var GA_Ga = function Ga() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-J80HMF2KRG"
  }), /*#__PURE__*/external_react_default.a.createElement("script", null, content));
};

/* harmony default export */ var GA = (GA_Ga);
// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/index.js


























/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._235o4SrE-aLJ1uLNIFI2CV{margin-top:80px}._3Fc6i8KUfoIA980XTGCdcU{margin:80px auto 0;padding:100px 0}._1vHagC3nk7G-xa9arOPprq{background-color:rgba(255,255,255,.7);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1rem}._2KYW1yYI3duHy8tNJhEsdp{color:#222;text-align:center;font-weight:400;font-size:1.5rem;line-height:1.2;padding:18px 0}.tmTJHJFWpeT0R3aBSCcZK{font-size:3rem;line-height:1;display:block}._1_arahqIi5SeEh7xtmWKen{margin-top:60px;margin:36px 0 18px}._11yPMhAWCtFKrha2QKsAoI{text-align:center;font-size:1.5rem;line-height:1.3;color:#707070;padding:3rem 0}._11yPMhAWCtFKrha2QKsAoI strong{color:#17f3c7;font-weight:500}._2y2ClqqJZcma98aoHb6uY5{margin-bottom:1.25rem}._3GP9bTsdDmODIxHmxDTCol{font-size:3.5rem;font-weight:600;color:#17f3c7}._1PUq6vHcgzDAbmmWX04_do{font-size:1.75rem;font-style:italic;color:#fff}._3Td5EKhHt8NRfpEINd07Nz{display:flex;justify-content:center}._3Td5EKhHt8NRfpEINd07Nz>a:first-of-type{margin-right:1.25rem}._23_TFJQZIjz8fRz6j-fUw8{display:flex;flex-direction:column;justify-content:center;text-align:center}._2j5r2iPAmVaBXdTY9Gcwcs{color:#707070;font-size:1.5rem;display:block;padding-top:1.5rem}._1fb9kV4_iC_tqjBoK0yK4j{color:#17f3c7;font-size:1rem;display:block;font-weight:500}._2Cb6GLnlyEZXCaobYVR5V-{display:flex;justify-content:center;margin-bottom:1.25rem}._2Cb6GLnlyEZXCaobYVR5V->button{margin-right:1.25rem}._2Cb6GLnlyEZXCaobYVR5V->button:last-of-type{margin-right:0}._2a_2efjYvTLFewDUyPJ9aD{text-align:left}._2JvzZhvXnnYKY3sZnoaFZ4{padding-left:3rem}._2_mGcvMM4D0fBXuvGjwA-0{font-size:1.1rem;line-height:0}._3BKr24uQIZV7qn8CpO51r4{color:#17f3c7;font-weight:600}@media(min-width: 760px){._3Fc6i8KUfoIA980XTGCdcU{max-width:960px}._1vHagC3nk7G-xa9arOPprq{padding:0 50px}._2KYW1yYI3duHy8tNJhEsdp{font-size:2.25rem}.tmTJHJFWpeT0R3aBSCcZK{font-size:64px;line-height:1.7}._11yPMhAWCtFKrha2QKsAoI{font-size:1.75rem;padding:4.5rem 0}._23_TFJQZIjz8fRz6j-fUw8{padding-top:0}._2Cb6GLnlyEZXCaobYVR5V-{margin-bottom:0}.mjJbpbOnSFHZti_p7QCSy{margin-top:calc(2 * 1.25rem)}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,eAAe,CAAC,yBAAc,kBAAkB,CAAC,eAAe,CAAC,yBAAW,qCAAqC,CAAC,iBAAiB,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,cAAc,CAAC,yBAAO,UAAU,CAAC,iBAAiB,CAAC,eAAe,CAAC,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,uBAAU,cAAc,CAAC,aAAa,CAAC,aAAa,CAAC,yBAAc,eAAe,CAAC,kBAAkB,CAAC,yBAAM,iBAAiB,CAAC,gBAAgB,CAAC,eAAe,CAAC,aAAa,CAAC,cAAc,CAAC,gCAAa,aAAa,CAAC,eAAe,CAAC,yBAAU,qBAAqB,CAAC,yBAAM,gBAAgB,CAAC,eAAe,CAAC,aAAa,CAAC,yBAAO,iBAAiB,CAAC,iBAAiB,CAAC,UAAU,CAAC,yBAAK,YAAY,CAAC,sBAAsB,CAAC,yCAAqB,oBAAoB,CAAC,yBAAW,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,yBAAe,aAAa,CAAC,gBAAgB,CAAC,aAAa,CAAC,kBAAkB,CAAC,yBAAqB,aAAa,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,yBAAc,YAAY,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,gCAAqB,oBAAoB,CAAC,6CAAkC,cAAc,CAAC,yBAAM,eAAe,CAAC,yBAAM,iBAAiB,CAAC,yBAAmB,gBAAgB,CAAC,aAAa,CAAC,yBAAW,aAAa,CAAC,eAAe,CAAC,yBAAyB,yBAAc,eAAe,CAAC,yBAAW,cAAc,CAAC,yBAAO,iBAAiB,CAAC,uBAAU,cAAc,CAAC,eAAe,CAAC,yBAAM,iBAAiB,CAAC,gBAAgB,CAAC,yBAAW,aAAa,CAAC,yBAAc,eAAe,CAAC,uBAAW,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".page{margin-top:80px}.titleWrapper{margin:80px auto 0;padding:100px 0}.titleText{background-color:rgba(255,255,255,.7);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1rem}.title{color:#222;text-align:center;font-weight:400;font-size:1.5rem;line-height:1.2;padding:18px 0}.titleBig{font-size:3rem;line-height:1;display:block}.titleButtons{margin-top:60px;margin:36px 0 18px}.hero{text-align:center;font-size:1.5rem;line-height:1.3;color:#707070;padding:3rem 0}.hero strong{color:#17f3c7;font-weight:500}.dropdown{margin-bottom:1.25rem}.step{font-size:3.5rem;font-weight:600;color:#17f3c7}.quote{font-size:1.75rem;font-style:italic;color:#fff}.cta{display:flex;justify-content:center}.cta>a:first-of-type{margin-right:1.25rem}.container{display:flex;flex-direction:column;justify-content:center;text-align:center}.containerSpan{color:#707070;font-size:1.5rem;display:block;padding-top:1.5rem}.containerSpanBottom{color:#17f3c7;font-size:1rem;display:block;font-weight:500}.containerCta{display:flex;justify-content:center;margin-bottom:1.25rem}.containerCta>button{margin-right:1.25rem}.containerCta>button:last-of-type{margin-right:0}.left{text-align:left}.list{padding-left:3rem}.exceptionSubtitle{font-size:1.1rem;line-height:0}.important{color:#17f3c7;font-weight:600}@media(min-width: 760px){.titleWrapper{max-width:960px}.titleText{padding:0 50px}.title{font-size:2.25rem}.titleBig{font-size:64px;line-height:1.7}.hero{font-size:1.75rem;padding:4.5rem 0}.container{padding-top:0}.containerCta{margin-bottom:0}.marginTop{margin-top:calc(2 * 1.25rem)}}"]}]);

// Exports
exports.locals = {
	"page": "_235o4SrE-aLJ1uLNIFI2CV",
	"titleWrapper": "_3Fc6i8KUfoIA980XTGCdcU",
	"titleText": "_1vHagC3nk7G-xa9arOPprq",
	"title": "_2KYW1yYI3duHy8tNJhEsdp",
	"titleBig": "tmTJHJFWpeT0R3aBSCcZK",
	"titleButtons": "_1_arahqIi5SeEh7xtmWKen",
	"hero": "_11yPMhAWCtFKrha2QKsAoI",
	"dropdown": "_2y2ClqqJZcma98aoHb6uY5",
	"step": "_3GP9bTsdDmODIxHmxDTCol",
	"quote": "_1PUq6vHcgzDAbmmWX04_do",
	"cta": "_3Td5EKhHt8NRfpEINd07Nz",
	"container": "_23_TFJQZIjz8fRz6j-fUw8",
	"containerSpan": "_2j5r2iPAmVaBXdTY9Gcwcs",
	"containerSpanBottom": "_1fb9kV4_iC_tqjBoK0yK4j",
	"containerCta": "_2Cb6GLnlyEZXCaobYVR5V-",
	"left": "_2a_2efjYvTLFewDUyPJ9aD",
	"list": "_2JvzZhvXnnYKY3sZnoaFZ4",
	"exceptionSubtitle": "_2_mGcvMM4D0fBXuvGjwA-0",
	"important": "_3BKr24uQIZV7qn8CpO51r4",
	"marginTop": "mjJbpbOnSFHZti_p7QCSy"
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, ".RrGojiqY771zy3rZgg6Vl{display:none}.NDUAWon4Ndz3UJJB4UQm0{width:100%;height:100%;display:block}._1m3iaAwgfaetzpBoJ6P8LT{-webkit-animation:_3_wPWQEzK1mdsXsCoKOxkM .5s linear;animation:_3_wPWQEzK1mdsXsCoKOxkM .5s linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes _3_wPWQEzK1mdsXsCoKOxkM{0%{transform:rotateY(-180deg);opacity:0}100%{transform:rotateY(0deg);opacity:1}}@keyframes _3_wPWQEzK1mdsXsCoKOxkM{0%{transform:rotateY(-180deg);opacity:0}100%{transform:rotateY(0deg);opacity:1}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,uBAAQ,YAAY,CAAC,uBAAO,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,yBAAS,oDAAyB,CAAzB,4CAAyB,CAAC,oCAA4B,CAA5B,4BAA4B,CAAC,yBAAyB,CAAC,kCAAyB,CAAzB,0BAA0B,CAAC,2CAAgB,GAAG,0BAA0B,CAAC,SAAS,CAAC,KAAK,uBAAuB,CAAC,SAAS,CAAC,CAA/F,mCAAgB,GAAG,0BAA0B,CAAC,SAAS,CAAC,KAAK,uBAAuB,CAAC,SAAS,CAAC","file":"styles.scss","sourcesContent":[".symbol{display:none}.image{width:100%;height:100%;display:block}.diamond{animation:flip .5s linear;animation-fill-mode:forwards;transform:rotateY(180deg);backface-visibility:hidden}@keyframes flip{0%{transform:rotateY(-180deg);opacity:0}100%{transform:rotateY(0deg);opacity:1}}"]}]);

// Exports
exports.locals = {
	"symbol": "RrGojiqY771zy3rZgg6Vl",
	"image": "NDUAWon4Ndz3UJJB4UQm0",
	"diamond": "_1m3iaAwgfaetzpBoJ6P8LT",
	"flip": "_3_wPWQEzK1mdsXsCoKOxkM"
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return contactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aboutPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return servicePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return homePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return comingSoon; });
/* unused harmony export routes */
var contactPage = {
  path: '/contact',
  template: 'src/pages/Contact',
  title: 'On s\'appelle ?'
};
var aboutPage = {
  path: '/about',
  template: 'src/pages/About',
  title: 'Un peu de moi'
};
var servicePage = {
  path: '/services',
  template: 'src/pages/Service',
  title: 'Mes services'
};
var homePage = {
  path: '/',
  template: 'src/pages/Home'
};
var comingSoon = {
  path: '/en',
  template: 'src/pages/English'
};
var routes = [homePage, servicePage, aboutPage, contactPage, comingSoon, {
  path: '404',
  template: 'src/pages/404'
}];
/* harmony default export */ __webpack_exports__["d"] = (routes);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/lucky.b76b1aa7.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1Gw2TeAL9u86EF9o8WhtGx{overflow:hidden}._2n8DeO3fO1TrjBYx8IcCar{position:relative}._tegdV_glQWYEGWdyKtad{position:absolute;top:0;left:50%;transform:translate(-50%);width:100%;min-width:600px;max-width:calc(calc(100% - 1.75rem) - 0.875rem);margin:0 auto}._3BWNNIiTP64_e5Z7XcGW7O{position:relative;margin:80px 0 0}._1BYi9lncL1ghQaRnMPNebw{margin:0 0 80px}._2Gs5LzAWp_RXoRRjpHyj8L{margin:0 0 80px}._2j6khUnfjb2-TB7Y2kGbKA+div,._3CZTQXLIcqca9KxNas-SF8+div{margin-top:80px}._2yZ7I0oQSfWBYuNejOwH8Z+div{margin-top:80px}._1ZVOe3Rcj2dIehrcOypjfp{min-width:200%;top:50%;transform:translate(-50%, -50%)}._11A2H8FDKvUYP_DkMj8e4H{width:300%}._11A2H8FDKvUYP_DkMj8e4H+div{margin-top:400px}@media(min-width: 760px){._tegdV_glQWYEGWdyKtad{max-width:960px}._2oZpcFzTOqHF63peawPIWQ{margin-top:0}._2j6khUnfjb2-TB7Y2kGbKA+div,._3CZTQXLIcqca9KxNas-SF8+div,._11A2H8FDKvUYP_DkMj8e4H+div{margin-top:0}._1ZVOe3Rcj2dIehrcOypjfp{min-width:960px;max-width:960px;top:0%;transform:translate(-50%, 0)}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,eAAe,CAAC,yBAAS,iBAAiB,CAAC,uBAAI,iBAAiB,CAAC,KAAK,CAAC,QAAQ,CAAC,yBAAyB,CAAC,UAAU,CAAC,eAAe,CAAC,+CAA+C,CAAC,aAAa,CAAC,yBAAS,iBAAiB,CAAC,eAAe,CAAC,yBAAQ,eAAe,CAAC,yBAAc,eAAe,CAAC,0DAAqB,eAAe,CAAC,6BAAS,eAAe,CAAC,yBAAM,cAAc,CAAC,OAAO,CAAC,+BAA+B,CAAC,yBAAO,UAAU,CAAC,6BAAW,gBAAgB,CAAC,yBAAyB,uBAAI,eAAe,CAAC,yBAAa,YAAY,CAAC,uFAAgC,YAAY,CAAC,yBAAM,eAAe,CAAC,eAAe,CAAC,MAAM,CAAC,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".section{overflow:hidden}.wrapper{position:relative}.bg{position:absolute;top:0;left:50%;transform:translate(-50%);width:100%;min-width:600px;max-width:calc(calc(100% - 1.75rem) - 0.875rem);margin:0 auto}.content{position:relative;margin:80px 0 0}.margin{margin:0 0 80px}.marginBottom{margin:0 0 80px}.right+div,.left+div{margin-top:80px}.top+div{margin-top:80px}.home{min-width:200%;top:50%;transform:translate(-50%, -50%)}.marie{width:300%}.marie+div{margin-top:400px}@media(min-width: 760px){.bg{max-width:960px}.noTopMargin{margin-top:0}.right+div,.left+div,.marie+div{margin-top:0}.home{min-width:960px;max-width:960px;top:0%;transform:translate(-50%, 0)}}"]}]);

// Exports
exports.locals = {
	"section": "_1Gw2TeAL9u86EF9o8WhtGx",
	"wrapper": "_2n8DeO3fO1TrjBYx8IcCar",
	"bg": "_tegdV_glQWYEGWdyKtad",
	"content": "_3BWNNIiTP64_e5Z7XcGW7O",
	"margin": "_1BYi9lncL1ghQaRnMPNebw",
	"marginBottom": "_2Gs5LzAWp_RXoRRjpHyj8L",
	"right": "_2j6khUnfjb2-TB7Y2kGbKA",
	"left": "_3CZTQXLIcqca9KxNas-SF8",
	"top": "_2yZ7I0oQSfWBYuNejOwH8Z",
	"home": "_1ZVOe3Rcj2dIehrcOypjfp",
	"marie": "_11A2H8FDKvUYP_DkMj8e4H",
	"noTopMargin": "_2oZpcFzTOqHF63peawPIWQ"
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2PZJrW-6Wtn7XQLZbhlKf5{position:fixed;top:0;left:0;background-color:#fff;width:100%;overflow:hidden;z-index:1000;box-shadow:0 2px 2px rgba(0,0,0,.2)}.RuZ5o2hZ_Cty0ghSGOIBU{display:grid;grid-template-columns:48px auto 48px;grid-template-rows:80px auto;grid-template-areas:\"icon logo lang\" \"nav nav nav\";justify-items:stretch;align-items:center}._2-5E9vr1ekF-AbwqJUum8Q{grid-area:logo}.yQCHkFqPFgvvSjMOHnsBn{grid-area:nav;max-height:0;transition:max-height .3s ease-in;display:block}._3G4Ouo_3oXKBjxKO-Z2pKd{max-height:80px}.j0un8IbS9jSvKT0_Z06fo{max-height:160px}._1QjMTilJpipjWGvKxR4CRr{max-height:240px}._2DCG_ArOg2hNGnElMWSjUs{max-height:320px}.IYj_jwspV5XdmNz_23FpE{max-height:400px}._3F-uXzlV3vfORScK4-eKIB{border-top:1px solid #707070;display:block;width:100%}._3F-uXzlV3vfORScK4-eKIB a{display:block;width:100%;color:inherit;padding:1rem}._3F-uXzlV3vfORScK4-eKIB:hover{color:#222;background-color:#17f3c7}._3xrB4DvVNvQClRV2YZXT1Z{color:#222;background-color:#17f3c7}.o0830Ujb4euKR6vIDUNoI{display:none;background-color:#fff;transition:max-height .3s ease-in}._2OZ4YPmccjiUAGEngBlRYB{width:-webkit-max-content;width:-moz-max-content;width:max-content}.PXhebmVipa5O8_vxPKfiU{cursor:pointer;grid-area:icon;justify-self:center;align-self:center;width:100%;height:100%;display:flex;justify-content:center;align-items:center}._3cJEdvD0wz1z_xW6g1Be8-{grid-area:lang;position:relative;cursor:pointer;width:100%;align-self:center;justify-self:center;height:100%;display:flex;justify-content:center;align-items:center}._3cJEdvD0wz1z_xW6g1Be8-:hover .Z7nVYRMAmNJtnh-WnBfmQ{max-height:200%}.Z7nVYRMAmNJtnh-WnBfmQ{position:fixed;top:56px;right:5px;display:flex;max-height:0;transition:max-height .3s ease-in;flex-direction:column;overflow:hidden}._2-dHJl6oI9YP0aYJ1040bt{width:48px;border:1px solid #707070;padding:5px;display:flex;justify-content:center;text-decoration:none;background-color:#fff}._2-dHJl6oI9YP0aYJ1040bt:last-of-type{border-top:0}@media(min-width: 760px){.RuZ5o2hZ_Cty0ghSGOIBU{grid-template-columns:auto 1fr;grid-template-areas:\"logo nav lang\";overflow:initial;max-width:960px;margin:0 auto}._2-5E9vr1ekF-AbwqJUum8Q{justify-self:left;padding:0 1.5rem;padding-left:0;margin-left:1.25rem}.yQCHkFqPFgvvSjMOHnsBn{height:80px;max-height:80px;justify-self:right;margin-right:1.25rem}.Z7nVYRMAmNJtnh-WnBfmQ{right:calc((100% - 960px)/2 - (48px / 4))}._3F-uXzlV3vfORScK4-eKIB{border:0;display:inline-block;width:initial;align-self:stretch;position:relative}._3F-uXzlV3vfORScK4-eKIB:last-of-type a{padding-right:0}._3F-uXzlV3vfORScK4-eKIB a{padding:0 1.5rem;line-height:80px;vertical-align:middle}._3F-uXzlV3vfORScK4-eKIB:hover{background-color:#fff;color:#17f3c7}._3F-uXzlV3vfORScK4-eKIB:hover ._2rN9C_1Nm_ozNcG7UOROpr{max-height:80px}._3F-uXzlV3vfORScK4-eKIB:hover .Bi7lQ815FOUcAnqFgYgSj{max-height:160px}._3xrB4DvVNvQClRV2YZXT1Z{background-color:#fff;color:#17f3c7}.o0830Ujb4euKR6vIDUNoI{display:block;max-height:0;position:absolute;overflow:hidden}.PXhebmVipa5O8_vxPKfiU{display:none}}", "",{"version":3,"sources":["style.scss"],"names":[],"mappings":"AAAA,yBAAW,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAqB,CAAC,UAAU,CAAC,eAAe,CAAC,YAAY,CAAC,mCAAmC,CAAC,uBAAQ,YAAY,CAAC,oCAAoC,CAAC,4BAA4B,CAAC,kDAAkD,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,yBAAM,cAAc,CAAC,uBAAK,aAAa,CAAC,YAAY,CAAC,iCAAiC,CAAC,aAAa,CAAC,yBAAM,eAAe,CAAC,uBAAM,gBAAgB,CAAC,yBAAM,gBAAgB,CAAC,yBAAM,gBAAgB,CAAC,uBAAM,gBAAgB,CAAC,yBAAS,4BAA4B,CAAC,aAAa,CAAC,UAAU,CAAC,2BAAW,aAAa,CAAC,UAAU,CAAC,aAAa,CAAC,YAAY,CAAC,+BAAe,UAAU,CAAC,wBAAwB,CAAC,yBAAQ,UAAU,CAAC,wBAAwB,CAAC,uBAAQ,YAAY,CAAC,qBAAqB,CAAC,iCAAiC,CAAC,yBAAY,yBAAgB,CAAhB,sBAAgB,CAAhB,iBAAiB,CAAC,uBAAU,cAAc,CAAC,cAAc,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,yBAAU,cAAc,CAAC,iBAAiB,CAAC,cAAc,CAAC,UAAU,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,sDAAyB,eAAe,CAAC,uBAAS,cAAc,CAAC,QAAQ,CAAC,SAAS,CAAC,YAAY,CAAC,YAAY,CAAC,iCAAiC,CAAC,qBAAqB,CAAC,eAAe,CAAC,yBAAM,UAAU,CAAC,wBAAwB,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,sCAAmB,YAAY,CAAC,yBAAyB,uBAAQ,8BAA8B,CAAC,mCAAmC,CAAC,gBAAgB,CAAC,eAAe,CAAC,aAAa,CAAC,yBAAM,iBAAiB,CAAC,gBAAgB,CAAC,cAAc,CAAC,mBAAmB,CAAC,uBAAK,WAAW,CAAC,eAAe,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAS,yCAAyC,CAAC,yBAAS,QAAQ,CAAC,oBAAoB,CAAC,aAAa,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wCAAwB,eAAe,CAAC,2BAAW,gBAAgB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,+BAAe,qBAAqB,CAAC,aAAa,CAAC,wDAAwB,eAAe,CAAC,sDAAwB,gBAAgB,CAAC,yBAAQ,qBAAqB,CAAC,aAAa,CAAC,uBAAQ,aAAa,CAAC,YAAY,CAAC,iBAAiB,CAAC,eAAe,CAAC,uBAAU,YAAY,CAAC","file":"style.scss","sourcesContent":[".container{position:fixed;top:0;left:0;background-color:#fff;width:100%;overflow:hidden;z-index:1000;box-shadow:0 2px 2px rgba(0,0,0,.2)}.header{display:grid;grid-template-columns:48px auto 48px;grid-template-rows:80px auto;grid-template-areas:\"icon logo lang\" \"nav nav nav\";justify-items:stretch;align-items:center}.logo{grid-area:logo}.nav{grid-area:nav;max-height:0;transition:max-height .3s ease-in;display:block}.nav1{max-height:80px}.nav2{max-height:160px}.nav3{max-height:240px}.nav4{max-height:320px}.nav5{max-height:400px}.navItem{border-top:1px solid #707070;display:block;width:100%}.navItem a{display:block;width:100%;color:inherit;padding:1rem}.navItem:hover{color:#222;background-color:#17f3c7}.active{color:#222;background-color:#17f3c7}.subnav{display:none;background-color:#fff;transition:max-height .3s ease-in}.subnavItem{width:max-content}.menuIcon{cursor:pointer;grid-area:icon;justify-self:center;align-self:center;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.langMenu{grid-area:lang;position:relative;cursor:pointer;width:100%;align-self:center;justify-self:center;height:100%;display:flex;justify-content:center;align-items:center}.langMenu:hover .langNav{max-height:200%}.langNav{position:fixed;top:56px;right:5px;display:flex;max-height:0;transition:max-height .3s ease-in;flex-direction:column;overflow:hidden}.lang{width:48px;border:1px solid #707070;padding:5px;display:flex;justify-content:center;text-decoration:none;background-color:#fff}.lang:last-of-type{border-top:0}@media(min-width: 760px){.header{grid-template-columns:auto 1fr;grid-template-areas:\"logo nav lang\";overflow:initial;max-width:960px;margin:0 auto}.logo{justify-self:left;padding:0 1.5rem;padding-left:0;margin-left:1.25rem}.nav{height:80px;max-height:80px;justify-self:right;margin-right:1.25rem}.langNav{right:calc((100% - 960px)/2 - (48px / 4))}.navItem{border:0;display:inline-block;width:initial;align-self:stretch;position:relative}.navItem:last-of-type a{padding-right:0}.navItem a{padding:0 1.5rem;line-height:80px;vertical-align:middle}.navItem:hover{background-color:#fff;color:#17f3c7}.navItem:hover .subnav1{max-height:80px}.navItem:hover .subnav2{max-height:160px}.active{background-color:#fff;color:#17f3c7}.subnav{display:block;max-height:0;position:absolute;overflow:hidden}.menuIcon{display:none}}"]}]);

// Exports
exports.locals = {
	"container": "_2PZJrW-6Wtn7XQLZbhlKf5",
	"header": "RuZ5o2hZ_Cty0ghSGOIBU",
	"logo": "_2-5E9vr1ekF-AbwqJUum8Q",
	"nav": "yQCHkFqPFgvvSjMOHnsBn",
	"nav1": "_3G4Ouo_3oXKBjxKO-Z2pKd",
	"nav2": "j0un8IbS9jSvKT0_Z06fo",
	"nav3": "_1QjMTilJpipjWGvKxR4CRr",
	"nav4": "_2DCG_ArOg2hNGnElMWSjUs",
	"nav5": "IYj_jwspV5XdmNz_23FpE",
	"navItem": "_3F-uXzlV3vfORScK4-eKIB",
	"active": "_3xrB4DvVNvQClRV2YZXT1Z",
	"subnav": "o0830Ujb4euKR6vIDUNoI",
	"subnavItem": "_2OZ4YPmccjiUAGEngBlRYB",
	"menuIcon": "PXhebmVipa5O8_vxPKfiU",
	"langMenu": "_3cJEdvD0wz1z_xW6g1Be8-",
	"langNav": "Z7nVYRMAmNJtnh-WnBfmQ",
	"lang": "_2-dHJl6oI9YP0aYJ1040bt",
	"subnav1": "_2rN9C_1Nm_ozNcG7UOROpr",
	"subnav2": "Bi7lQ815FOUcAnqFgYgSj"
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3iS9MP9fOlOQ4_UpDrYPLm{display:inline-block;margin-top:2rem;width:100%}._2Iag2e7G5vGaw_67ojyS6J{position:relative;border-bottom:1px solid #666;padding:.5rem 0}._2Iag2e7G5vGaw_67ojyS6J label{position:absolute;left:0}._2Iag2e7G5vGaw_67ojyS6J input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Raleway\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}._2Iag2e7G5vGaw_67ojyS6J input:invalid{outline:none}._2Iag2e7G5vGaw_67ojyS6J input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}._2Iag2e7G5vGaw_67ojyS6J input[value=\"\"]+label{bottom:.5rem}._2Iag2e7G5vGaw_67ojyS6J input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}._2Iag2e7G5vGaw_67ojyS6J input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}._2Iag2e7G5vGaw_67ojyS6J svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}._1XhNO_uNdWE_MyQmULvHfh{padding:.5rem 0;font-size:.75rem}.TVe2UUMspunsymywDRO5_{color:red}._3c1KmYMgzk_NOaHx0Ffl9z{border-bottom:1px solid #17f3c7}._3c1KmYMgzk_NOaHx0Ffl9z svg path{color:#17f3c7}._22e0rmAOGf5sHrRrqb5oCG{border-bottom:1px solid red}._22e0rmAOGf5sHrRrqb5oCG svg path{color:red}.TRi1xFVJ7fYhAE7wik1sp{width:100%;height:1.5rem;cursor:pointer;min-height:1.5rem}.AVgbVF3thbqZQfZY8IBAI{position:absolute;top:3rem;left:0;width:100%;z-index:100;max-height:0;transition:max-height .3s ease-in;overflow:hidden}._1Ims8M_9-6XGWLb0P-yDLn{cursor:pointer;border-bottom:1px solid #707070;padding:.5rem;background-color:#fff}._1Ims8M_9-6XGWLb0P-yDLn:last-of-type{border:0}._1Ims8M_9-6XGWLb0P-yDLn:hover{background-color:#17f3c7;color:#fff}.q1_pARF_gCRufCSn1QEb_{max-height:7.5rem}._2t6LzfUmR-k1lMUz2SUtVC{max-height:2.5rem}._3gJMxhbam4Lj3RAwakeNsb{max-height:5rem}.ORfCHMtBkM84xMTxXrUqS{max-height:7.5rem}._3BjcZ3paKqPkf56qeYKMsj{max-height:10rem}._3ZmFtfX0mME5nLdUMo35ps{max-height:12.5rem}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,yBAAc,iBAAiB,CAAC,4BAA4B,CAAC,eAAe,CAAC,+BAAoB,iBAAiB,CAAC,MAAM,CAAC,+BAAoB,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,UAAU,CAAC,aAAa,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,uCAA4B,YAAY,CAAC,qCAA0B,QAAQ,CAAC,mDAAmD,CAAC,+CAAoC,YAAY,CAAC,qDAA0C,WAAW,CAAC,iBAAiB,CAAC,qDAA0C,WAAW,CAAC,iBAAiB,CAAC,6BAAkB,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,yBAAQ,eAAe,CAAC,gBAAgB,CAAC,uBAAK,SAAS,CAAC,yBAAO,+BAA+B,CAAC,kCAAgB,aAAa,CAAC,yBAAS,2BAA2B,CAAC,kCAAkB,SAAS,CAAC,uBAAQ,UAAU,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,uBAAS,iBAAiB,CAAC,QAAQ,CAAC,MAAM,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,iCAAiC,CAAC,eAAe,CAAC,yBAAQ,cAAc,CAAC,+BAA+B,CAAC,aAAa,CAAC,qBAAqB,CAAC,sCAAqB,QAAQ,CAAC,+BAAc,wBAAwB,CAAC,UAAU,CAAC,uBAAM,iBAAiB,CAAC,yBAAO,iBAAiB,CAAC,yBAAO,eAAe,CAAC,uBAAO,iBAAiB,CAAC,yBAAO,gBAAgB,CAAC,yBAAO,kBAAkB","file":"styles.scss","sourcesContent":[".container{display:inline-block;margin-top:2rem;width:100%}.subContainer{position:relative;border-bottom:1px solid #666;padding:.5rem 0}.subContainer label{position:absolute;left:0}.subContainer input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Raleway\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}.subContainer input:invalid{outline:none}.subContainer input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}.subContainer input[value=\"\"]+label{bottom:.5rem}.subContainer input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}.subContainer input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}.subContainer svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}.helper{padding:.5rem 0;font-size:.75rem}.red{color:red}.valid{border-bottom:1px solid #17f3c7}.valid svg path{color:#17f3c7}.invalid{border-bottom:1px solid red}.invalid svg path{color:red}.select{width:100%;height:1.5rem;cursor:pointer;min-height:1.5rem}.options{position:absolute;top:3rem;left:0;width:100%;z-index:100;max-height:0;transition:max-height .3s ease-in;overflow:hidden}.option{cursor:pointer;border-bottom:1px solid #707070;padding:.5rem;background-color:#fff}.option:last-of-type{border:0}.option:hover{background-color:#17f3c7;color:#fff}.show{max-height:7.5rem}.show1{max-height:2.5rem}.show2{max-height:5rem}.show3{max-height:7.5rem}.show4{max-height:10rem}.show5{max-height:12.5rem}"]}]);

// Exports
exports.locals = {
	"container": "_3iS9MP9fOlOQ4_UpDrYPLm",
	"subContainer": "_2Iag2e7G5vGaw_67ojyS6J",
	"helper": "_1XhNO_uNdWE_MyQmULvHfh",
	"red": "TVe2UUMspunsymywDRO5_",
	"valid": "_3c1KmYMgzk_NOaHx0Ffl9z",
	"invalid": "_22e0rmAOGf5sHrRrqb5oCG",
	"select": "TRi1xFVJ7fYhAE7wik1sp",
	"options": "AVgbVF3thbqZQfZY8IBAI",
	"option": "_1Ims8M_9-6XGWLb0P-yDLn",
	"show": "q1_pARF_gCRufCSn1QEb_",
	"show1": "_2t6LzfUmR-k1lMUz2SUtVC",
	"show2": "_3gJMxhbam4Lj3RAwakeNsb",
	"show3": "ORfCHMtBkM84xMTxXrUqS",
	"show4": "_3BjcZ3paKqPkf56qeYKMsj",
	"show5": "_3ZmFtfX0mME5nLdUMo35ps"
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2ll3UahSpwkAJMrnEfufNE{margin-top:80px}._1RXtskOtDGovGu5WT2kb4q{margin-bottom:80px}._2_JLvKAhSfwbtl2cBPBYZX{position:relative}._2Ggjc7gW1OKJkXjHqI08Pt{display:flex;justify-content:space-between;flex-wrap:wrap}.ZIRZPxniQ-A-fC_97jsFz{display:flex;justify-content:center;margin-top:40px}._3MQ2WdYprGI79WHlnUpclS,._18WUtNVHBgx9jImy-2BMQc,._2FB3uShW62-WdF1JFNO6qX{width:100%;height:100%;position:fixed;top:0;left:0;opacity:1;background-color:#fff;z-index:999;display:flex;justify-content:center;align-items:center}._18WUtNVHBgx9jImy-2BMQc,._2FB3uShW62-WdF1JFNO6qX{flex-direction:column;text-align:center}._18WUtNVHBgx9jImy-2BMQc{color:red}._3LpQ_5apkpWv6NJN8m4RGB path{fill:red}._2FB3uShW62-WdF1JFNO6qX{color:#17f3c7;font-weight:700}._8Bnk00aM6xI1Kt7ThOENx path{fill:#17f3c7}.EcoaGMNbrYwoxvblA0Vua{width:100%}._1VFO2H4dxhALay-ZayS3-D{margin:0 1.5rem}._3j91sJiuVN6a7Cz0ixzzp9{display:block}@media(min-width: 760px){.EcoaGMNbrYwoxvblA0Vua{width:calc(50% - 10px)}.ZIRZPxniQ-A-fC_97jsFz{display:flex;justify-content:flex-end}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,eAAe,CAAC,yBAAc,kBAAkB,CAAC,yBAAM,iBAAiB,CAAC,yBAAa,YAAY,CAAC,6BAA6B,CAAC,cAAc,CAAC,uBAAa,YAAY,CAAC,sBAAsB,CAAC,eAAe,CAAC,2EAAqC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,SAAS,CAAC,qBAAqB,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,kDAAqB,qBAAqB,CAAC,iBAAiB,CAAC,yBAAW,SAAS,CAAC,8BAAoB,QAAQ,CAAC,yBAAU,aAAa,CAAC,eAAe,CAAC,6BAAmB,YAAY,CAAC,uBAAO,UAAU,CAAC,yBAAS,eAAe,CAAC,yBAAQ,aAAa,CAAC,yBAAyB,uBAAO,sBAAsB,CAAC,uBAAa,YAAY,CAAC,wBAAwB,CAAC","file":"styles.scss","sourcesContent":[".page{margin-top:80px}.marginBottom{margin-bottom:80px}.form{position:relative}.formWrapper{display:flex;justify-content:space-between;flex-wrap:wrap}.formActions{display:flex;justify-content:center;margin-top:40px}.formSubmitting,.formError,.formSent{width:100%;height:100%;position:fixed;top:0;left:0;opacity:1;background-color:#fff;z-index:999;display:flex;justify-content:center;align-items:center}.formError,.formSent{flex-direction:column;text-align:center}.formError{color:red}.formErrorIcon path{fill:red}.formSent{color:#17f3c7;font-weight:700}.formSentIcon path{fill:#17f3c7}.input{width:100%}.telSpan{margin:0 1.5rem}.submit{display:block}@media(min-width: 760px){.input{width:calc(50% - 10px)}.formActions{display:flex;justify-content:flex-end}}"]}]);

// Exports
exports.locals = {
	"page": "_2ll3UahSpwkAJMrnEfufNE",
	"marginBottom": "_1RXtskOtDGovGu5WT2kb4q",
	"form": "_2_JLvKAhSfwbtl2cBPBYZX",
	"formWrapper": "_2Ggjc7gW1OKJkXjHqI08Pt",
	"formActions": "ZIRZPxniQ-A-fC_97jsFz",
	"formSubmitting": "_3MQ2WdYprGI79WHlnUpclS",
	"formError": "_18WUtNVHBgx9jImy-2BMQc",
	"formSent": "_2FB3uShW62-WdF1JFNO6qX",
	"formErrorIcon": "_3LpQ_5apkpWv6NJN8m4RGB",
	"formSentIcon": "_8Bnk00aM6xI1Kt7ThOENx",
	"input": "EcoaGMNbrYwoxvblA0Vua",
	"telSpan": "_1VFO2H4dxhALay-ZayS3-D",
	"submit": "_3j91sJiuVN6a7Cz0ixzzp9"
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_Header; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ components_Footer; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ components_Home; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_Contact; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_About; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ components_Service; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(9);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(11);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(2);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/routes/index.js
var routes = __webpack_require__(8);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/atoms/index.js + 25 modules
var atoms = __webpack_require__(1);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/hooks.jsx


var hooks_usePageNavigation = function usePageNavigation() {
  var browserWindow = typeof window !== 'undefined' ? window : undefined;

  var _useState = Object(external_react_["useState"])(),
      _useState2 = slicedToArray_default()(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var ref = Object(external_react_["useRef"])(currentPage);

  function handlePageNavigation() {
    if (browserWindow && browserWindow.location.pathname !== ref.current) {
      setCurrentPage(browserWindow.location.pathname);
      setTimeout(function () {
        return browserWindow.scrollTo(0, 0);
      }, 50);
    }
  }

  Object(external_react_["useEffect"])(function () {
    ref.current = currentPage;
  });
  Object(external_react_["useEffect"])(function () {
    var checker;

    if (browserWindow) {
      setCurrentPage(browserWindow.location.pathname);
      checker = setInterval(handlePageNavigation, 200);
    }

    return function () {
      clearInterval(checker);
    };
  }, []);
  return [currentPage];
};
var useGa = function useGa() {
  var browserWindow = typeof window !== 'undefined' ? window : undefined;

  var gtag = function gtag() {
    return browserWindow && browserWindow.gtag;
  };

  var sendEvent = function sendEvent(eventName, eventProperties) {
    return function () {
      var ga = gtag();
      eventName && ga && ga('event', eventName, eventProperties);
    };
  };

  return [gtag(), sendEvent];
};
// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/tags.js


var _menu;


var tags = {
  menu: (_menu = {}, defineProperty_default()(_menu, routes["e" /* homePage */].path, ['Click_HP_Menu', {
    eventCategory: 'Vision',
    eventLabel: 'Menu',
    eventAction: 'click'
  }]), defineProperty_default()(_menu, routes["f" /* servicePage */].path, ['Click_MesServices_Menu', {
    eventCategory: 'Offre',
    eventLabel: 'Menu',
    eventAction: 'click'
  }]), defineProperty_default()(_menu, routes["a" /* aboutPage */].path, ['Click_UnPeuDeMoi_Menu', {
    eventCategory: 'Coach',
    eventLabel: 'Menu',
    eventAction: 'click'
  }]), defineProperty_default()(_menu, routes["c" /* contactPage */].path, ['Click_OnSAppelle_Menu', {
    eventCategory: 'ContactInfo',
    eventLabel: 'Menu',
    eventAction: 'click'
  }]), _menu),
  home: {
    button: {
      service: ['Click_MesServices_HP', {
        eventCategory: 'Offre',
        eventLabel: 'BannerHP',
        eventAction: 'click'
      }],
      about: ['Click_UnPeuDeMoi_HP', {
        eventCategory: 'Coach',
        eventLabel: 'BannerHP',
        eventAction: 'click'
      }],
      contact: ['Click_ContactezMoi_HP', {
        eventCategory: 'ContactInfo',
        eventLabel: 'BannerHP',
        eventAction: 'click'
      }]
    },
    link: {
      about: ['Click_UnPeuDeMoi_HP', {
        eventCategory: 'Coach',
        eventLabel: 'ParagraphHP',
        eventAction: 'click'
      }]
    }
  },
  service: {
    button: {
      modal: {
        scaleup: {
          description: ['Click_DescrScaleUps_MeServices', {
            eventCategory: 'OffreScaleUps',
            eventLabel: 'DescrScaleUps_MesServices',
            eventAction: 'click'
          }],
          theme: ['Click_ThemScaleUps_MesServices', {
            eventCategory: 'OffreScaleUps',
            eventLabel: 'ThemScaleUps_MesServices',
            eventAction: 'click'
          }],
          contact: ['Click_ContactezMoiScaleUps_MesServices', {
            eventCategory: 'ContactInfo',
            eventLabel: 'ThemScaleUps_MesServices',
            eventAction: 'click'
          }]
        },
        explorateur: {
          description: ['Click_DescrExplo_MesServices', {
            eventCategory: 'OffreExplorateurs',
            eventLabel: 'DescrExplo_MesServices',
            eventAction: 'click'
          }],
          theme: ['Click_ThemExplo_MesServices', {
            eventCategory: 'OffreExplorateurs',
            eventLabel: 'ThemExplo_MesServices',
            eventAction: 'click'
          }],
          contact: ['Click_ContactezMoiExplo_MesServices', {
            eventCategory: 'ContactInfo',
            eventLabel: 'ThemExplo_MesServices',
            eventAction: 'click'
          }]
        },
        nomad: {
          description: ['Click_DescrGlobal_MeServices', {
            eventCategory: 'OffreGlobalNomads',
            eventLabel: 'DescrGlobal_MesServices',
            eventAction: 'click'
          }],
          theme: ['Click_ThemGlobal_MesServices', {
            eventCategory: 'OffreGlobalNomads',
            eventLabel: 'ThemGlobal_MesServices',
            eventAction: 'click'
          }],
          contact: ['Click_ContactezMoiGlobal_MesServices', {
            eventCategory: 'ContactInfo',
            eventLabel: 'ThemGlobal_MesServices',
            eventAction: 'click'
          }],
          cck: ['Click_CCK_MesServices', {
            eventCategory: 'OffreGlobalNomads',
            eventLabel: 'CTACCK_DescrGlobal_MesServices',
            eventAction: 'click'
          }]
        }
      },
      banner: {
        contact: ['Click_ContactezMoiCurieuxBanner_MesServices', {
          eventCategory: 'ContactInfo',
          eventLabel: 'BannerCurieux_MesServices',
          eventAction: 'click'
        }]
      },
      contact: ['Click_ContactezMoiAlorsBanner_MesServices', {
        eventCategory: 'ContactInfo',
        eventLabel: 'BannerAlors_MesServices',
        eventAction: 'click'
      }],
      about: ['Click_UnPeuDeMoi_MesServicesHyperlink', {
        eventCategory: 'Coach',
        eventLabel: 'HyperlinkMesServices',
        eventAction: 'click'
      }]
    }
  },
  about: {
    button: {
      cck: ['Click_CCK_UnPeuDeMoi', {
        eventCategory: 'OffreGlobalNomads',
        eventLabel: 'CTACCK_UnPeuDeMoi',
        eventAction: 'click'
      }],
      contact: ['Click_ContactezMoi_UnPeuDeMoi', {
        eventCategory: 'ContactInfo',
        eventLabel: 'CTAUnPeuDeMoi',
        eventAction: 'click'
      }]
    }
  },
  contact: {
    form: {
      started: ['StartedForm_OnSAppelle', {
        eventCategory: 'ContactStarted',
        eventLabel: 'OnSAppelle',
        eventAction: 'click'
      }],
      sent: ['SentForm_OnSAppelle', {
        eventCategory: 'ContactSent',
        eventLabel: 'OnSAppelle',
        eventAction: 'click'
      }]
    }
  }
};
/* harmony default export */ var src_tags = (tags);
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(23);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Header/components/styles.scss
var styles = __webpack_require__(89);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Header/components/Logo.jsx




var Logo_Logo = function Logo(_ref) {
  var cb = _ref.cb;
  return /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/",
    className: styles["logo"],
    onClick: cb
  }, "Patchwork-s");
};

/* harmony default export */ var components_Logo = (Logo_Logo);
// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Header/components/index.js

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Header/style.scss
var style = __webpack_require__(13);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Header/index.jsx












var Header_routes = routes["d" /* default */].filter(function (r) {
  return r.title;
});

var Header_Header = function Header(props) {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _usePageNavigation = hooks_usePageNavigation(),
      _usePageNavigation2 = slicedToArray_default()(_usePageNavigation, 1),
      currentPage = _usePageNavigation2[0];

  var _useGa = useGa(),
      _useGa2 = slicedToArray_default()(_useGa, 2),
      _ = _useGa2[0],
      sendEvent = _useGa2[1];

  var toggle = Object(external_react_["useCallback"])(function () {
    setActive(!active);
  }, [active]);
  var hide = Object(external_react_["useCallback"])(function () {
    setActive(false);
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: style_default.a.container
  }, /*#__PURE__*/external_react_default.a.createElement("header", {
    className: style_default.a.header
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: style_default.a.logo
  }, /*#__PURE__*/external_react_default.a.createElement(components_Logo, {
    cb: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.menu['/']))
  })), /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: external_classnames_default()(style_default.a.nav, defineProperty_default()({}, style_default.a["nav".concat(Header_routes.length)], active))
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, Header_routes.map(function (route, i) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      className: external_classnames_default()(style_default.a.navItem, defineProperty_default()({}, style_default.a.active, route.path === currentPage)),
      key: "".concat(route.path).concat(i),
      onClick: hide
    }, /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
      to: route.path,
      cb: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.menu[route.path])),
      noStyle: true
    }, route.title), route.routes && /*#__PURE__*/external_react_default.a.createElement("ul", {
      className: external_classnames_default()(style_default.a.subnav, defineProperty_default()({}, style_default.a["subnav".concat(route.routes.length)], true))
    }, route.routes.map(function (subroute, j) {
      return /*#__PURE__*/external_react_default.a.createElement("li", {
        className: style_default.a.subnavItem,
        key: "".concat(subroute.path).concat(j)
      }, /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
        to: subroute.path,
        noStyle: true
      }, subroute.title));
    })));
  }))), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: style_default.a.menuIcon,
    onClick: toggle
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Icon */], {
    icon: active ? free_solid_svg_icons_["faTimes"] : free_solid_svg_icons_["faBars"]
  })), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: style_default.a.langMenu
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Icon */], {
    icon: free_solid_svg_icons_["faGlobe"]
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: style_default.a.langNav
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
    to: routes["e" /* homePage */].path,
    className: style_default.a.lang
  }, "FR"), /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
    to: routes["b" /* comingSoon */].path,
    className: style_default.a.lang
  }, "EN")))));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Footer/styles.scss
var Footer_styles = __webpack_require__(90);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Footer/index.jsx


var Footer_Footer = function Footer() {
  return /*#__PURE__*/external_react_default.a.createElement("footer", {
    className: Footer_styles["footer"]
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, "\xA9 Patchwork-s - ", new Date().getFullYear())));
};
/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Home/styles.scss
var Home_styles = __webpack_require__(28);
var Home_styles_default = /*#__PURE__*/__webpack_require__.n(Home_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Home/index.jsx









var Home_Home = function Home() {
  var _useGa = useGa(),
      _useGa2 = slicedToArray_default()(_useGa, 2),
      _ = _useGa2[0],
      sendEvent = _useGa2[1];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bg: true,
    home: true
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Home_styles_default.a.titleWrapper
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Home_styles_default.a.titleText
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: Home_styles_default.a.title
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Home_styles_default.a.titleBig
  }, " Accueillez votre Transformation Culturelle"), /*#__PURE__*/external_react_default.a.createElement("span", null, "pour les Organisations et les Individus", /*#__PURE__*/external_react_default.a.createElement("br", null), "avides de Changement et de Diversit\xE9"))))), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: external_classnames_default()(Home_styles_default.a.wrapper, Home_styles_default.a.hero)
  }, "L\u2019art d\u2019", /*#__PURE__*/external_react_default.a.createElement("strong", null, "assembler"), " des ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "exp\xE9riences de vies"), /*#__PURE__*/external_react_default.a.createElement("br", null), "pour lib\xE9rer de ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "nouveaux possibles")))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgRight: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "5"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "11100"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], {
    noMargin: true
  }, "Le Changement & la Diversit\xE9 sont devenus des r\xE9alit\xE9s quotidiennes"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "La Transformation ou l'int\xE9gration de ces nouvelles variables que sont le Changement et la Diversit\xE9 est ", /*#__PURE__*/external_react_default.a.createElement("b", null, "affaire d\u2019engagement r\xE9ciproque"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Il y a interaction & coexistence \xE0 diff\xE9rents niveaux. chaque parts de nous, chaque entit\xE9, \xE9quipe, m\xE9tier, \xEAtre humain, organisation poss\xE8de une culture diff\xE9rente, des ", /*#__PURE__*/external_react_default.a.createElement("b", null, "r\xE9f\xE9rentiels complexes et multiples"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Toute la valeur du travail en Transformation est de permettre une mise en commun de ces richesses, de trouver un terrain commun de rencontres."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "L\u2019Objectif n\u2019est pas de sommer et de tout uniformiser mais de ", /*#__PURE__*/external_react_default.a.createElement("b", null, "faire \xE9merger une unit\xE9 de la diversit\xE9"), " - qu\u2019elle soit Int\xE9rieure, au niveau individuel ou Organisationnelle."))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgLeft: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "4"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "0111"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], {
    noMargin: true
  }, "Le coaching comme un Atelier d\u2019assemblage en perp\xE9tuelle \xE9volution"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Ma conviction: ", /*#__PURE__*/external_react_default.a.createElement(atoms["s" /* Quote */], null, "Comme un Patchwork, nous tissons notre Vie, r\xE9cit par r\xE9cit, reliant nos Exp\xE9riences par le fil de nos Apprentissages")), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Mon exp\xE9rience atypique riche en ", /*#__PURE__*/external_react_default.a.createElement("b", null, "diversit\xE9 & multiculturalit\xE9"), " (en savoir plus sur moi ", /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
    to: routes["a" /* aboutPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.home.link.about))
  }, "ici"), "\xA0!) m\u2019a amen\xE9e \xE0 avoir une lecture du monde multiple, dynamique et non lin\xE9aire - ouvrant le champ des possibles.", /*#__PURE__*/external_react_default.a.createElement("br", null), "A l\u2019instar d\u2019un patchwork, j\u2019ai donc tiss\xE9 mon parcours et mon identit\xE9, avec des morceaux, tous tr\xE8s diff\xE9rents, mais tous uniques, utiles et ", /*#__PURE__*/external_react_default.a.createElement("b", null, "singuliers"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "C\u2019est dans cet \xE9tat d\u2019esprit que je souhaite vous ", /*#__PURE__*/external_react_default.a.createElement("b", null, "accompagner"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, /*#__PURE__*/external_react_default.a.createElement("b", null, "D\xE9ployons"), ", ensemble, votre ", /*#__PURE__*/external_react_default.a.createElement("b", null, "potentiel"), " & votre Patchwork en s\u2019appuyant sur ces exp\xE9riences de vies, Celles qui ont compt\xE9 pour vous, vous ont aid\xE9 ou celles qui ont \xE9t\xE9 source d'", /*#__PURE__*/external_react_default.a.createElement("b", null, "apprentissage"), " et qui rec\xE8lent de ressources insoup\xE7onn\xE9es pour ", /*#__PURE__*/external_react_default.a.createElement("b", null, "transformer positivement votre pr\xE9sent"), "."))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    margin: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */], {
    grey: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */].Title, null, "Vous souhaitez en savoir plus ?"), /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */].Content, {
    horizontal: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["f" /* servicePage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.home.button.service))
  }, "Mes services"), /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["a" /* aboutPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.home.button.about))
  }, "Un peu de moi"), /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.home.button.contact))
  }, "Contactez moi")))));
};
/* harmony default export */ var components_Home = (Home_Home);
// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(91);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(63);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Contact/styles.scss
var Contact_styles = __webpack_require__(15);
var Contact_styles_default = /*#__PURE__*/__webpack_require__.n(Contact_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Contact/index.jsx






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var minLength = function minLength(l) {
  return function (val) {
    if (val.length < l) {
      return "Minimum ".concat(l, " characteres");
    }

    return false;
  };
};

var Contact_name = function name(type) {
  return function (val) {
    if (val.trim().length < 1) {
      return "Veuillez renseignre votre ".concat(type);
    }

    return false;
  };
};

var email = function email(val) {
  if (!/\S+@\S+\.\S+/.test(val)) {
    return 'Veuillez renseigner un email valide';
  }

  return false;
};

var phone = function phone(val) {
  if (!/(\d{10}|(\d\d\s?){5})/g.test(val)) {
    return 'Veuillez renseigner un numéro de téléphone valide (xxxxxxxxxx, xx xx xx xx xx)';
  }

  return false;
};

var TEL = '07 85 30 47 18';
var MAIL = 'cavillon.marie@gmail.com';
var inputs = [{
  type: 'text',
  name: '$firstname',
  label: 'Prénom',
  validator: Contact_name('Prénom')
}, {
  type: 'text',
  name: '$lastname',
  label: 'Nom',
  validator: Contact_name('Nom')
}, {
  type: 'email',
  name: 'email',
  label: 'Email',
  validator: email
}, {
  type: 'tel',
  name: 'phone',
  label: 'Téléphone',
  validator: phone
}, {
  type: 'select',
  name: '$interest',
  label: 'Intéressez par',
  options: ['Présentation / Fit', 'Informations tarifaires', 'Autres']
}, {
  type: 'textarea',
  name: '$otherInterest',
  label: 'Veuillez préciser'
}, {
  type: 'select',
  name: '$about',
  label: 'Vous êtes plutôt',
  options: ['Scale-Up', 'Xplorateurs de Sens', 'Global Nomads', 'Autres']
}, {
  type: 'textarea',
  name: '$otherAbout',
  label: 'Veuillez préciser'
}];
var URL = 'https://api.staticforms.xyz/submit';
var ACCESS_KEY = 'f753ab3d-f93c-4652-bd86-2c8a429ba751';
var Contact_Contact = function Contact() {
  var _useState = Object(external_react_["useState"])(inputs),
      _useState2 = slicedToArray_default()(_useState, 2),
      inputList = _useState2[0],
      setInputList = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      formSent = _useState4[0],
      setFormSent = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      formSubmissionError = _useState6[0],
      setFormSubmissionError = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      submitting = _useState8[0],
      setSubmitting = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      formValues = _useState10[0],
      setFormValues = _useState10[1];

  var formElement = Object(external_react_["useRef"])(null);

  var _useState11 = Object(external_react_["useState"])(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      displayInterestConditionVerified = _useState12[0],
      setDisplayInterestConditionVerified = _useState12[1];

  var _useState13 = Object(external_react_["useState"])(false),
      _useState14 = slicedToArray_default()(_useState13, 2),
      displayAboutConditionVerified = _useState14[0],
      setDisplayAboutConditionVerified = _useState14[1];

  var _useGa = useGa(),
      _useGa2 = slicedToArray_default()(_useGa, 2),
      _ = _useGa2[0],
      sendEvent = _useGa2[1];

  var toggleDisplayCondition = Object(external_react_["useCallback"])(function (val) {
    if (val[0] === '$interest' && val[1] === 'Autres') {
      setDisplayInterestConditionVerified(true);
    } else if (val[0] === '$interest') {
      setDisplayInterestConditionVerified(false);
    }

    if (val[0] === '$about' && val[1] === 'Autres') {
      setDisplayAboutConditionVerified(true);
    } else if (val[0] === '$about') {
      setDisplayAboutConditionVerified(false);
    }
  }, [inputList]);
  Object(external_react_["useEffect"])(function () {
    if (!submitting) {
      return;
    }

    function send() {
      return _send.apply(this, arguments);
    }

    function _send() {
      _send = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var response;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(URL, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(_objectSpread(_objectSpread({}, formValues), {}, {
                    accessKey: ACCESS_KEY
                  }))
                });

              case 3:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 6;
                  break;
                }

                throw Error('error');

              case 6:
                sendEvent.apply(void 0, toConsumableArray_default()(src_tags.contact.form.sent))();
                setFormSent(true);
                setSubmitting(false);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                setFormSubmissionError(true);
                setSubmitting(false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));
      return _send.apply(this, arguments);
    }

    send();
  }, [submitting, formValues]);

  var submit = function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    sendEvent.apply(void 0, toConsumableArray_default()(src_tags.contact.form.started))();
    var newInputList = inputList.map(function (i) {
      return _objectSpread(_objectSpread({}, i), {}, {
        errors: i.type === 'textarea' ? [] : i.validator ? [i.validator(formElement.current[i.name].value)] : formElement.current[i.name].value === '' ? ['Champs requis'] : []
      });
    });
    var isFormValid = newInputList.every(function (i) {
      return i.errors[0] === false || i.errors.length === 0;
    });

    if (!isFormValid) {
      setInputList(newInputList.map(function (i) {
        return _objectSpread(_objectSpread({}, i), {}, {
          errors: i.errors[0] === false ? [] : i.errors
        });
      }));
      setSubmitting(false);
      return;
    }

    setFormValues(inputList.reduce(function (a, i) {
      return _objectSpread(_objectSpread({}, a), {}, defineProperty_default()({}, i.name, formElement.current[i.name].value));
    }, {}));
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.page
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgLeft: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "011"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], null, "On s'appelle ?"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Vous souhaitez en savoir plus, prendre rendez-vous ou vous avez des questions sur ma fa\xE7on de travailler? Appelons nous!"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Laissez un message ici et je prendrai un plaisir \xE0 vous r\xE9pondre dans les meilleurs d\xE9lais"), /*#__PURE__*/external_react_default.a.createElement("form", {
    ref: formElement,
    action: "",
    mehtod: "post",
    className: external_classnames_default()(Contact_styles_default.a.form, {})
  }, submitting && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formSubmitting
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Icon */], {
    icon: free_solid_svg_icons_["faSpinner"],
    className: Contact_styles_default.a.spinner,
    size: "3x",
    spin: true
  })), formSubmissionError && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formError
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Icon */], {
    icon: free_solid_svg_icons_["faTimes"],
    className: Contact_styles_default.a.formErrorIcon,
    size: "3x"
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez r\xE9essayer plus tard."), /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["e" /* homePage */].path
  }, "Revenir a l'accueil")), formSent && !formSubmissionError && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formSent
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Icon */], {
    icon: free_solid_svg_icons_["faCheck"],
    className: Contact_styles_default.a.formSentIcon,
    size: "3x"
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Le formulaire a bien \xE9t\xE9 envoy\xE9."), /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["e" /* homePage */].path
  }, "Revenir a l'accueil")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formWrapper
  }, inputList.map(function (i) {
    return i.type === 'select' ? /*#__PURE__*/external_react_default.a.createElement(atoms["u" /* Select */], {
      key: i.name,
      className: Contact_styles_default.a.input,
      name: i.name,
      label: i.label,
      options: i.options,
      required: true,
      err: i.errors && i.errors.length > 0 ? i.errors : null,
      onInput: toggleDisplayCondition
    }) : i.type === 'textarea' ? displayInterestConditionVerified && i.name === '$otherInterest' || displayAboutConditionVerified && i.name === '$otherAbout' ? /*#__PURE__*/external_react_default.a.createElement(atoms["x" /* Textarea */], {
      key: i.name,
      className: Contact_styles_default.a.input,
      name: i.name,
      label: i.label,
      type: i.type,
      required: true,
      validator: i.validator,
      err: i.errors
    }) : null : /*#__PURE__*/external_react_default.a.createElement(atoms["l" /* Input */], {
      key: i.name,
      className: Contact_styles_default.a.input,
      name: i.name,
      label: i.label,
      type: i.type,
      required: true,
      validator: i.validator,
      err: i.errors
    });
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formActions
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    className: Contact_styles_default.a.submit,
    onClick: submit
  }, "Envoyez"))))))));
};
/* harmony default export */ var components_Contact = (Contact_Contact);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/About/styles.scss
var About_styles = __webpack_require__(29);
var About_styles_default = /*#__PURE__*/__webpack_require__.n(About_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/About/index.jsx









var About_About = function About() {
  var _useGa = useGa(),
      _useGa2 = slicedToArray_default()(_useGa, 2),
      _ = _useGa2[0],
      sendEvent = _useGa2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: About_styles_default.a.page
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    marie: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "011"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], null, "Bonjour, moi c'est Marie"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "J'ai grandi, v\xE9cu et travaill\xE9 \xE0 l'", /*#__PURE__*/external_react_default.a.createElement("b", null, "\xE9tranger"), " toute ma vie (9 pays diff\xE9rents \xE0 mon actif, sur 6 continents!), ce qui fait \xE9galement de moi une CCK*!, et a influenc\xE9 qui je suis et les projets que j\u2019entreprends.", /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("small", null, /*#__PURE__*/external_react_default.a.createElement("i", null, "* CCK (Cross Culture Kid): Enfant ayant v\xE9cu au sein de - ou interagi de fa\xE7on significative avec -  deux ou plusieurs cultures au cours de ses ann\xE9es de formation (en savoir plus ", /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
    to: "https://globallygrounded.com/third-culture-kids/",
    external: true,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.about.button.cck))
  }, "ici"), ")"))), /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "Entre Diversit\xE9 & Curiosit\xE9 de l\u2019\xEAtre humain"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "J\u2019ai d\xE9but\xE9 ma carri\xE8re dans l\u2019", /*#__PURE__*/external_react_default.a.createElement("b", null, "accompagnement d\u2019entreprises"), ", sur des sujets de transformation digital, sur des projets tr\xE8s vari\xE9s et dans des environnements toujours challengeants & innovants - en agence, puis en conseil, pour finir en start-up /scale-up."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Passionn\xE9e par ce qui meut l\u2019\xEAtre humain et les rend si uniques, mes r\xF4les de Manager ont renforc\xE9s mon envie d\u2019accompagner les personnes dans leur ", /*#__PURE__*/external_react_default.a.createElement("b", null, "potentialisation"), ".", /*#__PURE__*/external_react_default.a.createElement("br", null), "C\u2019est en suivant cette envie int\xE9rieure forte, et fort du constat que nous sommes nombreux \xE0 accepter les status quo en limitant ainsi nos options de d\xE9veloppement et de r\xE9alisation, que j\u2019ai souhait\xE9 approfondir ma connaissance de la psychologie et du d\xE9veloppement humain. Je suis maintenant ", /*#__PURE__*/external_react_default.a.createElement("b", null, "Coach certifi\xE9e"), "* depuis Septembre 2020, avec pr\xE8s de ", /*#__PURE__*/external_react_default.a.createElement("b", null, "100 heures de pratique"), " \xE0 mon actif.", /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("small", null, "(*titre RNCP - reconnu par l'Etat - et ICF niveau PCC)")))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgRight: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "4"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "1110"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "\u201CBuilding Bridges to Unlock Potentials\u201D"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Ainsi, ce qui me drive aujourd\u2019hui c\u2019est d\u2019accompagner les personnes \xE0 ", /*#__PURE__*/external_react_default.a.createElement("b", null, "construire des ponts"), " pour ", /*#__PURE__*/external_react_default.a.createElement("b", null, "lib\xE9rer"), " tous ces ", /*#__PURE__*/external_react_default.a.createElement("b", null, "potentiels"), ", tous ces ", /*#__PURE__*/external_react_default.a.createElement("b", null, "nouveaux possibles"), " ", /*#__PURE__*/external_react_default.a.createElement("i", null, "\u201Cen attente\u201D"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "-- Qu\u2019il s\u2019agissent de ponts entre soi et soi, entre soi et autrui ou entre projets ou expertises diff\xE9rentes,", /*#__PURE__*/external_react_default.a.createElement("br", null), "-- Qu\u2019ils s\u2019agissent de lib\xE9rer des comp\xE9tences ou des relations, en entreprise ou aupr\xE8s de particuliers, ou m\xEAme de lib\xE9rer de nouvelles id\xE9es,"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "J\u2019aspire, \xE0 ", /*#__PURE__*/external_react_default.a.createElement("b", null, "relier"), " toutes ces ", /*#__PURE__*/external_react_default.a.createElement("b", null, "singularit\xE9s"), " pour que chacun puisse en ressortir ", /*#__PURE__*/external_react_default.a.createElement("b", null, "potentialis\xE9, augment\xE9"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "C\u2019est cela, qui m\u2019inspire aujourd\u2019hui."))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgLeft: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "4"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "0111"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "Mon Patchwork \xE0 moi..."), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: About_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "La Diversit\xE9 & la Multiculturalit\xE9 comme Ressource"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Ayant appris a \xE9voluer d\xE8s mon plus jeune \xE2ge dans des ", /*#__PURE__*/external_react_default.a.createElement("b", null, "contextes pluri-culturels"), " avec souvent des syst\xE8mes de valeur diff\xE9rents, j\u2019ai fait de cette appr\xE9hension de la diff\xE9rence une force.", /*#__PURE__*/external_react_default.a.createElement("br", null), "En d\xE9veloppant ma tol\xE9rance, m\u2019\xE9panouissant professionnellement dans des environnements changeants, jonglant parmis des cultures d\u2019entreprises diff\xE9rentes en tant que consultante, reliant des expertises distinctes entre elles via des postes transverses ou encore en construisant des \xE9quipes pluridisciplinaires en cultivant l\u2019unicit\xE9 de chacun."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Ainsi, ma capacit\xE9 \xE0 appr\xE9hender des environnements, contextes et personnalit\xE9s diverses me permet ", /*#__PURE__*/external_react_default.a.createElement("b", null, "tol\xE9rance, respect, non jugement et ouverture d\u2019esprit"), " sur les probl\xE9matiques et enjeux de chacun.", /*#__PURE__*/external_react_default.a.createElement("br", null), "C\u2019est \xE9galement cette exp\xE9rience qui me permet de vous accompagner en tant que Global Nomad ou Explorateur de Sens, puisque j\u2019ai moi fait face aux m\xEAme ", /*#__PURE__*/external_react_default.a.createElement("b", null, "Enjeux"), ".")))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: About_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "L\u2019Empathie comme Comp\xE9tence"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Int\xE9grer cette diversit\xE9 et cette diff\xE9rence dans la compr\xE9hension du monde qui m\u2019entoure m\u2019a de facto amen\xE9 \xE0 d\xE9velopper mes capacit\xE9s d\u2019empathie, pour, \xE0 la fois m\u2019adapter \xE9tant plus jeune, et maintenant ", /*#__PURE__*/external_react_default.a.createElement("b", null, "me relier aux autres"), " - qu\u2019ils aient la m\xEAme culture ou non - et ainsi construire des relations plus \u201Cconnect\xE9es\u201D.", /*#__PURE__*/external_react_default.a.createElement("br", null), "Je mets aujourd\u2019hui \xE0 profit cette comp\xE9tence au service de nos s\xE9ances."))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: About_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "L\u2019Energie comme Talent"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Dynamique, active, d\xE9termin\xE9e - voici quelques adjectifs que mes proches ou anciens coll\xE8gues utilisent pour me d\xE9crire.", /*#__PURE__*/external_react_default.a.createElement("br", null), "Investie dans ce que j\u2019entreprends, je puise dans cette ", /*#__PURE__*/external_react_default.a.createElement("b", null, "vitalit\xE9"), " pour vous accompagner de la mani\xE8re la plus ad\xE9quate et personnalis\xE9e en m\u2019", /*#__PURE__*/external_react_default.a.createElement("b", null, "ajustant \xE0 vos besoins"), "."))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: About_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "La Transformation comme Perspective"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Aussi loin que je me souvienne le ", /*#__PURE__*/external_react_default.a.createElement("b", null, "changement, la m\xE9tamorphose ou le d\xE9veloppement"), " d\u2019une id\xE9e, d\u2019un projet, d\u2019une personne ou tout simplement d\u2019un potentiel quelqu\u2019il soit m\u2019a toujours fascin\xE9.", /*#__PURE__*/external_react_default.a.createElement("br", null), "Commen\xE7ant par l\u2019accompagnement d\u2019entreprise dans leur innovation et l\u2019utilisation du digital au service de leur mission, je souhaite maintenant accompagner des personnes dans leur propre Transformation.")))))), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "1",
    className: About_styles_default.a.cta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.about.button.contact))
  }, "Contactez moi")))));
};
/* harmony default export */ var components_About = (About_About);
// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/utils.js
var utils = __webpack_require__(20);

// EXTERNAL MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Service/styles.scss
var Service_styles = __webpack_require__(5);
var Service_styles_default = /*#__PURE__*/__webpack_require__.n(Service_styles);

// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Service/quotes.js

var quotes = [function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Les s\xE9ances de coaching m\u2019ont permis de clarifier, ordonner et bien red\xE9finir mes objectifs.\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Cet accompagnement m'a permis de trouver des ressources et des solutions internes et surtout de passer outre mes peurs et mes projections n\xE9gatives pour faire des choix avec lesquels je me sens align\xE9e.\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Prendre le temps de r\xE9fl\xE9chir sur moi, casser mes croyances et mes peurs, faire de l\u2019introspection, me conna\xEEtre mieux\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Faire le tri dans mes r\xE9flexions, mes besoins, mes envies pour y voir plus clair. Le fait de partager ses doutes avec une personne ext\xE9rieur comp\xE9tente est rassurant, et m'a aid\xE9 \xE0 trouver des r\xE9ponses \xE0 mes questions. \xC7a m'a aussi ouverte \xE0 de nouvelles perspectives que je n'avais pas forc\xE9ment envisager.\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Les s\xE9ances m'ont permis de cibler plus pr\xE9cis\xE9ment mes lacunes et surtout les traits de personnalit\xE9 qui en sont la cause, pour identifier des solutions \xE0 mettre en place afin de palier \xE0 ces lacunes, sans fondamentalement changer de personnalit\xE9.\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Les questionnements qui d\xE9clenchent des r\xE9flexions indispensables ou d\xE9bloquent certains points de stagnation, la mesure de l'\xE9volution de l'\xE9tat d'esprit avec le syst\xE8me des \xE9chelles, le travail sur les valeurs\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Ambiance conviviale, sentir \xE0 l\u2019aise pour \xE9changer malgr\xE9 la vid\xE9o,\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"J'ai appr\xE9ci\xE9 tirer les fils lors de nos discussions, ce qui m'a amen\xE9 \xE0 me poser des questions, voir les choses sous un autre angle. Tu as su poser les bonnes questions je pense pour m'aider \xE0 y voir plus clair, avec une vision objective\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"- Des solutions concr\xE8tes \xE0 mes questions => plan A, B, C", /*#__PURE__*/external_react_default.a.createElement("br", null), "- Les exos pertinents et int\xE9ressants qui sont dans la continuit\xE9 de nos \xE9changes", /*#__PURE__*/external_react_default.a.createElement("br", null), "- Pas de jugement (ou en tout cas pas ressenti :p)", /*#__PURE__*/external_react_default.a.createElement("br", null), "- La flexibilit\xE9 sur les sujets \xE0 aborder\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Ta bienveillance, la pertinence de ton questionnement, ton \xE9tat d'esprit positif, ton esprit de synth\xE8se et un calme rassurant.\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Facilit\xE9 \xE0 mettre \xE0 laiSe et \xE0 reformuler tout en me mettant dans mes propres contradictions ou croyances, capacit\xE9 \xE0 cr\xE9er du lien, \xE0 rassurer.", /*#__PURE__*/external_react_default.a.createElement("br", null), "Pas que \xE9couter mais aussi participer\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"Ta bienveillance, ton sens de l'\xE9coute, ton objectivit\xE9 (hyper important de ne pas se sentir juger pour pouvoir tout exprimer), ta flexibilit\xE9, on sent que tu as des connaissances quelque soit le sujet, et tu as de bonnes r\xE9flexions qui m'ont fait r\xE9fl\xE9chir. Le fait que tu partages aussi tes exp\xE9riences perso, \xE7a \"humanise\" et on peut s'identifier\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"La m\xE9thode de consolidation de la r\xE9flexion, en rappelant et en r\xE9sumant chaque \xE9tape des discussions.\"");
}, function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, "\"J'ai trouv\xE9 les outils et techniques mis en place efficaces\"");
}];
// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/Service/index.jsx











var Service_Service = function Service() {
  var _useGa = useGa(),
      _useGa2 = slicedToArray_default()(_useGa, 2),
      _ = _useGa2[0],
      sendEvent = _useGa2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.page
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgTop: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], {
    centered: true,
    className: Service_styles_default.a.marginTop
  }, "A qui je m'adresse ?")), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "4"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "0110",
    className: Service_styles_default.a.container
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Scale-Ups", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpanBottom
  }, "(Entreprises)")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.containerCta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Consumer, null, function (_ref) {
    var open = _ref.open;
    return /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
      inverse: true,
      onClick: Object(utils["a" /* composeCb */])([open, sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.scaleup.description))])
    }, "Qui sont-ils ?");
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Scale-Ups"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Vous avez de la traction, votre offre commence \xE0 prendre et vous souhaitez maintenant ", /*#__PURE__*/external_react_default.a.createElement("b", null, "changer d'\xE9chelle"), " en ", /*#__PURE__*/external_react_default.a.createElement("b", null, "acc\xE9lerant votre croissance"), ", et ce \xE9ventuellement \xE0 l'", /*#__PURE__*/external_react_default.a.createElement("b", null, "international")), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Le ", /*#__PURE__*/external_react_default.a.createElement("b", null, "capital humain"), ", est un enjeu essentiel pour vous dans cette phase critique de d\xE9veloppement o\xF9 il faut ", /*#__PURE__*/external_react_default.a.createElement("b", null, "se d\xE9multiplier sans perdre son ADN"), ": structuration et s\xE9curisation de votre croissance, d\xE9veloppement et recrutement de talents, besoin de renforcement du leadership dans des \xE9quipes et ", /*#__PURE__*/external_react_default.a.createElement("b", null, "environnements extr\xE9mement vari\xE9s et souvent multiculturels"), " (non pas seulement d\xE9mographique, mais en terme d'id\xE9e et de perspectives)."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Adressons les ensemble."))), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Consumer, null, function (_ref2) {
    var open = _ref2.open;
    return /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
      onClick: Object(utils["a" /* composeCb */])([open, sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.scaleup.theme))])
    }, "Th\xE9matiques");
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Scale-Ups"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], {
    className: Service_styles_default.a.left
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Organisation des m\xE9thodes de travail"), "impl\xE9mentation et suivi d'OKR, clarification des r\xF4les et responsabilit\xE9s dans des organisations souvent transverses et matricielles, gestion et efficacit\xE9 des process, r\xE9unions et modes de communication (agenda, r\xF4les partag\xE9s, modalit\xE9s de d\xE9cisions, outils de communication...), facilitation au Co-dev", /*#__PURE__*/external_react_default.a.createElement("br", null), "\xA0"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Accompagnement continue des talents et middle management"), "mieux se conna\xEEtre, identifier ses axes de d\xE9veloppement et construire des plans d'actions, communiquer efficacement, prendre sa place en restant authentique, fonctionner efficacement et en confiance avec ses \xE9quipes - en pr\xE9sentiel ou en distanciel", /*#__PURE__*/external_react_default.a.createElement("br", null), "\xA0"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Management muticulturel & diversite"), "Internationalisation des \xE9quipes et/ou gestion d'\xE9quipes matricielles: \xEAtre conscient de ses orientations cross-culturelles, normes et valeurs, d\xE9couvrir comment les \xE9largir, apprendre \xE0 idenfiier celle des autres et efficacement r\xE9duire les differences culturelles (communication, modes de travail...)")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.containerCta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.scaleup.contact))
  }, "Contactez moi"))))))), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "4"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "1100",
    className: Service_styles_default.a.container
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Explorateurs de Sens", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpanBottom
  }, "(Particuliers)")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.containerCta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Consumer, null, function (_ref3) {
    var open = _ref3.open;
    return /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
      inverse: true,
      onClick: Object(utils["a" /* composeCb */])([open, sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.explorateur.description))])
    }, "Qui sont-ils ?");
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Explorateurs de Sens"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Investi.e"), ", et ", /*#__PURE__*/external_react_default.a.createElement("b", null, "soucieux.se des autres"), ", vous souhaitez \xEAtre au top \xE0 tous les niveaux - pro ou perso."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Votre ", /*#__PURE__*/external_react_default.a.createElement("b", null, "\xE9quilibre"), " et/ou votre ", /*#__PURE__*/external_react_default.a.createElement("b", null, "besoin d'\xE9panouissement"), " est vital pour vous et il vous arrive d\u2019avoir un peu le ", /*#__PURE__*/external_react_default.a.createElement("b", null, "vertige entre tous vos engagements"), " et de ne plus savoir ou donner de la t\xEAte..."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Que vous soyez en ", /*#__PURE__*/external_react_default.a.createElement("b", null, "qu\xEAte d\u2019une nouvelle direction"), " pro ou perso, de ", /*#__PURE__*/external_react_default.a.createElement("b", null, "clarification"), " dans vos choix et d\xE9cisions, d\u2019 ", /*#__PURE__*/external_react_default.a.createElement("b", null, "alignement"), " avec vos valeurs internes ou de d\xE9couverte et d\u2019", /*#__PURE__*/external_react_default.a.createElement("b", null, "aventures nouvelles"), ", ce coaching est fait pour vous si vous \xEAtes en qu\xEAte de ", /*#__PURE__*/external_react_default.a.createElement("b", null, "changements"), " et que vous souhaitez ", /*#__PURE__*/external_react_default.a.createElement("b", null, "remettre en question votre status quo"), "."))), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Consumer, null, function (_ref4) {
    var open = _ref4.open;
    return /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
      onClick: Object(utils["a" /* composeCb */])([open, sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.explorateur.theme))])
    }, "Th\xE9matiques");
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Explorateurs de Sens"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], {
    className: Service_styles_default.a.left
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "\xC9quilibre de vie"), "Equilibre vie pro/perso"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Nouveau projet de vie"), "D\xE9finition et/ou mise en place d'un nouveau projet de vie"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Relations"), "Communication plus authentique et connect\xE9e \xE0 soi et aux autres"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "\xC9panouissement pro"), "D\xE9finition et/ou clarification  de next steps professionnelles"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Transition de vie"), "Accompagnement dans une nouvelle phase de vie (nouvellement parent, confinement, licenciement...)")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.containerCta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.explorateur.contact))
  }, "Contactez moi")))))), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "0011",
    className: Service_styles_default.a.container
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Global Citizens", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpanBottom
  }, "(Particuliers)")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.containerCta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Consumer, null, function (_ref5) {
    var open = _ref5.open;
    return /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
      inverse: true,
      onClick: Object(utils["a" /* composeCb */])([open, sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.nomad.description))])
    }, "Qui sont-ils ?");
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Global Citizens"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Expats"), " ou ", /*#__PURE__*/external_react_default.a.createElement("b", null, "A-CCK"), "*,  vous vous caract\xE9risez par une ", /*#__PURE__*/external_react_default.a.createElement("b", null, "vie hautement mobile"), "."), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Le ", /*#__PURE__*/external_react_default.a.createElement("b", null, "changement"), " et la ", /*#__PURE__*/external_react_default.a.createElement("b", null, "nouveaut\xE9"), " font partie int\xE9grante de votre quotidien. C\u2019est excitant mais \xE7a comporte aussi son ", /*#__PURE__*/external_react_default.a.createElement("b", null, "lot de challenge: appr\xE9hender la dimension \xE9motionnelle de la complexit\xE9 culturelle"), " (int\xE9gration, adaptation constante, recherche de stabilit\xE9 & de rep\xE8re, chamboulement identitaire\u2026)"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, "Autant de sujet que nous pouvons aborder ensemble pour que vous puissiez ", /*#__PURE__*/external_react_default.a.createElement("b", null, "profiter pleinement"), " de ces exp\xE9riences multiculturelles et transformantes!"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    className: Service_styles_default.a.left
  }, /*#__PURE__*/external_react_default.a.createElement("small", null, /*#__PURE__*/external_react_default.a.createElement("i", null, "* CCK (Cross Culture Kids): Enfant ayant v\xE9cu au sein de - ou interagi de fa\xE7on significative avec -  deux ou plusieurs cultures au cours de ses ann\xE9es de formation ", /*#__PURE__*/external_react_default.a.createElement("i", null, "(en savoir plus ", /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
    to: "https://globallygrounded.com/third-culture-kids/",
    external: true,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.nomad.cck))
  }, "ici"), ")"), /*#__PURE__*/external_react_default.a.createElement("br", null), "* A-CCK: CCK devenu adulte"))))), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Consumer, null, function (_ref6) {
    var open = _ref6.open;
    return /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
      onClick: Object(utils["a" /* composeCb */])([open, sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.nomad.theme))])
    }, "Th\xE9matiques");
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["p" /* Modal */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.containerSpan
  }, "Les"), "Global Citizens"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], {
    className: Service_styles_default.a.left
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Arriv\xE9e & Int\xE9gration"), "Appropriation des codes culturels, organisation de sa nouvelle vie..."), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Adaptation & Identit\xE9"), "Choc culturel, questions identitaires, perte de rep\xE8res, sentiment d\u2019appartenance..."), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "D\xE9part & Rapatriation"), "Organisation du d\xE9part, tristesse &/ou deuil li\xE9 aux s\xE9parations humaines, \xE0 la culture..."), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], {
    small: true
  }, "Relations interculturelles"), "Communication interculturelle et cr\xE9ation de synergies (pro &/ou perso)")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.containerCta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.modal.nomad.contact))
  }, "Contactez moi")))))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], {
    centered: true
  }, "Ce que je vous propose")), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgRight: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "110"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.step
  }, "1. "), "L'Accompagnement"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: Service_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "R\xE9gulier, Approfondi et en Ligne"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Un accompagnement sur ", /*#__PURE__*/external_react_default.a.createElement("b", null, "6 mois")), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Avec des s\xE9ances ", /*#__PURE__*/external_react_default.a.createElement("b", null, "toutes les 2 semaines"), " environ"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Dont les s\xE9ances pr\xE9liminaires et de cl\xF4ture de 2H et des s\xE9ances de suivi de 1H chacune - soit ", /*#__PURE__*/external_react_default.a.createElement("b", null, "12h de coaching au total")), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Sur la ", /*#__PURE__*/external_react_default.a.createElement("b", null, "plateforme de votre choix"), ": zoom, skype, google meet. Vous n\u2019avez qu\u2019\xE0 choisir!")))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: Service_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "Accessible en Anglais, Espagnol ou Fran\xE7ais"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "De nationalit\xE9 Fran\xE7aise, j\u2019ai grandi \xE0 l\u2019\xE9tranger et ai toujours \xE9volu\xE9 professionnellement dans des environnements internationaux  devenant ainsi bilingue ", /*#__PURE__*/external_react_default.a.createElement("b", null, "Espagnol & Anglais"), " (5 ans en Am\xE9rique Latine, 2 ans \xE0 Londres...).")))))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgLeft: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "011"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.step
  }, "2. "), "La Coach"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: Service_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "Certifi\xE9e"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Titre ", /*#__PURE__*/external_react_default.a.createElement("b", null, "RNCP"), " et ", /*#__PURE__*/external_react_default.a.createElement("b", null, "ICF"), " niveau PCC chez Coaching Ways (formation et dipl\xF4me reconnu par l\u2019Etat)"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Form\xE9e \xE0 la ", /*#__PURE__*/external_react_default.a.createElement("b", null, "CNV"), " (Communication Non Violente): modules de base et modules d\u2019approfondissement & \u201CR\xE9f\xE9rente CNV\u201D en entreprise")))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: Service_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "Sensibilis\xE9e \xE0 vos  Enjeux"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Un coaching pour Explorateurs de Sens, Global Citizens et Scale-Ups, ", /*#__PURE__*/external_react_default.a.createElement("b", null, "PAR"), " une Exploratrice de Sens et Global Nomad ayant travaill\xE9 en Scale-up. (En savoir plus sur moi ", /*#__PURE__*/external_react_default.a.createElement(atoms["n" /* Link */], {
    to: routes["a" /* aboutPage */].path
  }, "ici"), ")", /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), "Ainsi, parce que je connais ces enjeux et la complexit\xE9 de ces environnements, parce que j\u2019ai travers\xE9 les ", /*#__PURE__*/external_react_default.a.createElement("b", null, "difficult\xE9s"), " qui vont avec, j\u2019ai choisi d\u2019apporter ce ", /*#__PURE__*/external_react_default.a.createElement("b", null, "soutien"), " \xE0 ceux qui traverse les m\xEAmes \xE9preuves.")))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: Service_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "En posture Dynamique et Ouverte"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Un coaching ", /*#__PURE__*/external_react_default.a.createElement("b", null, "\xE9nergique"), " dans un climat de ", /*#__PURE__*/external_react_default.a.createElement("b", null, "non-jugement"), ", voil\xE0 ce que vous pouvez attendre de moi.", /*#__PURE__*/external_react_default.a.createElement("br", null), "Capitalisant sur ", /*#__PURE__*/external_react_default.a.createElement("b", null, "ma personnalit\xE9 dynamique"), " ainsi que mon ", /*#__PURE__*/external_react_default.a.createElement("b", null, "ouverture d\u2019esprit"), " cultiv\xE9e par mon style de vie mobile, je mets ces deux attributs ", /*#__PURE__*/external_react_default.a.createElement("b", null, "au service de nos s\xE9ances et de votre objectif"), ",", /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), "Ce que je vous demanderais en retour: ", /*#__PURE__*/external_react_default.a.createElement("b", null, "un engagement sinc\xE8re"), " envers votre ", /*#__PURE__*/external_react_default.a.createElement("b", null, "processus de croissance"), ".")))))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgRight: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "110"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Service_styles_default.a.step
  }, "3. "), "La D\xE9marche"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */], {
    className: Service_styles_default.a.dropdown
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Trigger, null, /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */].Sub, null, "Pragmatique, Autonomisante & tourn\xE9e vers le Futur"), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Closed, null, /*#__PURE__*/external_react_default.a.createElement(atoms["q" /* More */], null)), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Opened, null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Less */], null))), /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Dropdown */].Content, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Autant vous le dire tout de suite: vous - allez - travaillez!", /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), "C\u2019est dans un cadre structur\xE9 et agile \xE0 la fois que je vous propose d\u2019\xE9voluer pour d\xE9finir ", /*#__PURE__*/external_react_default.a.createElement("b", null, "concr\xE8tement"), " ce que vous souhaitez et ", /*#__PURE__*/external_react_default.a.createElement("b", null, "comment"), " y arriver - afin que vous seul.e puissiez vous approprier votre succ\xE8s."), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Une ", /*#__PURE__*/external_react_default.a.createElement("b", null, "Vision cible"), " et des ", /*#__PURE__*/external_react_default.a.createElement("b", null, "R\xE9sultats cl\xE9s Mesurables"), " d\xE9finis par vous lors de la s\xE9ance pr\xE9liminaire"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Des s\xE9ances de suivi avec des ", /*#__PURE__*/external_react_default.a.createElement("b", null, "Objectifs interm\xE9diaires"), ", en mode \u201CPPP\u201D (plus petit pas possibles) en ", /*#__PURE__*/external_react_default.a.createElement("b", null, "approfondissant"), " les sujets de votre choix"), /*#__PURE__*/external_react_default.a.createElement(atoms["o" /* List */].Item, null, "Des prises de recul r\xE9guli\xE8res pour reconna\xEEtre et c\xE9l\xE9brer vos ", /*#__PURE__*/external_react_default.a.createElement("b", null, "avancements")))))))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    margin: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */], {
    grey: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */].Title, null, "Curieux.se d\u2019\xE9changer?"), /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.banner.contact))
  }, "Contactez moi")))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgLeft: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "011"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], null, "Pourquoi vous offrir ce coaching?"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    noTopMargin: true
  }, "A l'issue de ce coaching, imaginez vous avec\u2026"), /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "Une vision claire"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    noTopMargin: true
  }, "et peut \xEAtre nouvelle ou diff\xE9rente, de ", /*#__PURE__*/external_react_default.a.createElement("b", null, "l\xE0 o\xF9 vous \xEAtes"), " et ce que vous ", /*#__PURE__*/external_react_default.a.createElement("b", null, "souhaitez faire \xE9voluer"), " dans votre vie"), /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "Une meilleure connaissance"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    noTopMargin: true
  }, "des ", /*#__PURE__*/external_react_default.a.createElement("b", null, "forces et ressources"), " \xE0 votre disposition, de votre ", /*#__PURE__*/external_react_default.a.createElement("b", null, "environnement"), ", de vos propres ", /*#__PURE__*/external_react_default.a.createElement("b", null, "r\xE9actions & \xE9motions")), /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "Des plans d\u2019actions"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    noTopMargin: true
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "adapt\xE9s"), " \xE0 vous, ", /*#__PURE__*/external_react_default.a.createElement("b", null, "cr\xE9es par vous"), " avec lesquels vous vous sentez ", /*#__PURE__*/external_react_default.a.createElement("b", null, "\xE0 l'aise"), " et ", /*#__PURE__*/external_react_default.a.createElement("b", null, "actionnables"), " dans un lapse de temps que vous aurez fix\xE9"), /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "De multiples apprentissages"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    noTopMargin: true
  }, "que vous aurez acquis au travers de nombreuses ", /*#__PURE__*/external_react_default.a.createElement("b", null, "exp\xE9rimentations"), " et qui vous aurons progressivement ", /*#__PURE__*/external_react_default.a.createElement("b", null, "amen\xE9s vers"), " votre objectif de d\xE9part."), /*#__PURE__*/external_react_default.a.createElement(atoms["w" /* SubTitle */], null, "Apais\xE9.e, Confiant.e & Convaincu.e"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], {
    noTopMargin: true
  }, "de vos ", /*#__PURE__*/external_react_default.a.createElement("b", null, "forces"), " et de votre capacit\xE9 \xE0 ", /*#__PURE__*/external_react_default.a.createElement("b", null, "r\xE9ussir"), " ce que vous entreprenez"))))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    margin: true,
    noTopMargin: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Hero */].Title, null, "Ce qu\u2019il.elle.s en ont pens\xE9"), /*#__PURE__*/external_react_default.a.createElement(atoms["v" /* Slider */], null, quotes.map(function (Quote, i) {
    return /*#__PURE__*/external_react_default.a.createElement(atoms["v" /* Slider */].Item, {
      key: "quote".concat(i),
      className: Service_styles_default.a.quote
    }, /*#__PURE__*/external_react_default.a.createElement(Quote, null));
  })))), /*#__PURE__*/external_react_default.a.createElement(atoms["t" /* Section */], {
    bgLeft: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */], {
    col: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Grid */].Item, {
    col: "011"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["y" /* Title */], null, "Alors ?"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "Quelle pelote d'exp\xE9rience choisirez vous pour initier votre voyage?", /*#__PURE__*/external_react_default.a.createElement("br", null), "Sur quel fil de vos ressources tirerez vous pour tisser votre Patchwork?"), /*#__PURE__*/external_react_default.a.createElement(atoms["r" /* Paragraph */], null, "D\xE9couvrons le ensemble, ", /*#__PURE__*/external_react_default.a.createElement("b", null, "Dessinez moi votre Patchwork!")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Service_styles_default.a.cta
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["c" /* contactPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.contact))
  }, "Contactez moi"), /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Button */], {
    to: routes["a" /* aboutPage */].path,
    onClick: sendEvent.apply(void 0, toConsumableArray_default()(src_tags.service.button.about))
  }, "Un peu de moi")))))));
};
/* harmony default export */ var components_Service = (Service_Service);
// CONCATENATED MODULE: /home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/src/components/index.js







/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2vRwDXngLiKgarBQ0_awM9{width:100%;max-width:960px;margin:0 auto;display:flex;flex-direction:column;align-items:center}.RCXt_B5pNELaFP66aQnYs{width:100%;display:flex;flex-direction:row;align-items:stretch}._1Q2sQKsNa45fOGRvkYrQSt{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:10px}._2M-leRrbn-7xg8uhKxgJ_U,.t4oGHsPViM5gyoap-rAVQ{width:50px;font-size:40px;font-weight:100;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer}._2M-leRrbn-7xg8uhKxgJ_U svg path,.t4oGHsPViM5gyoap-rAVQ svg path{fill:#fff}._2M-leRrbn-7xg8uhKxgJ_U:hover svg path,.t4oGHsPViM5gyoap-rAVQ:hover svg path{fill:#707070}._1l4oLhEgt-Kh2jNpI0JtTu{width:10px;height:10px;cursor:pointer;border-radius:100%;background-color:#fff;margin:0 5px}._1l4oLhEgt-Kh2jNpI0JtTu:hover{background-color:#707070}._1xyx64UzS8d6lRbZgu6F6k{background-color:#707070}._2VbOrE7pSdqSZUbfAeHK3w{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;overflow:hidden}._2VbOrE7pSdqSZUbfAeHK3w.qgpe-w8PhkcDRSx3PMABb .tb869PdAONQrW2gfVAa7C{transform:translateX(0%)}._2VbOrE7pSdqSZUbfAeHK3w._10EJzpA4rHKqQNhkINISYU .tb869PdAONQrW2gfVAa7C{transform:translateX(-100%)}._2VbOrE7pSdqSZUbfAeHK3w._2wAqwuQl5e_M8kKcJiFDZ .tb869PdAONQrW2gfVAa7C{transform:translateX(-200%)}._2VbOrE7pSdqSZUbfAeHK3w._1LwRM32MGKDew5v0gWrKBj .tb869PdAONQrW2gfVAa7C{transform:translateX(-300%)}._2VbOrE7pSdqSZUbfAeHK3w.MYtYzIb0wck9vpgl6oWJw .tb869PdAONQrW2gfVAa7C{transform:translateX(-400%)}._2VbOrE7pSdqSZUbfAeHK3w._78dsDoFa9twDUGYKpOfqG .tb869PdAONQrW2gfVAa7C{transform:translateX(-500%)}._2VbOrE7pSdqSZUbfAeHK3w.Y2_6O5zgCrj0pDwvk_Xqt .tb869PdAONQrW2gfVAa7C{transform:translateX(-600%)}._2VbOrE7pSdqSZUbfAeHK3w.SpNMeI7bu4tSLQYL8gyi8 .tb869PdAONQrW2gfVAa7C{transform:translateX(-700%)}._2VbOrE7pSdqSZUbfAeHK3w._126HSxynvQGjWeDHHs7lrH .tb869PdAONQrW2gfVAa7C{transform:translateX(-800%)}._2VbOrE7pSdqSZUbfAeHK3w._2BgXVSoy_F0289wSvJKBn- .tb869PdAONQrW2gfVAa7C{transform:translateX(-900%)}._2VbOrE7pSdqSZUbfAeHK3w._2A1Hln0xsFagD0wYh8IP0J .tb869PdAONQrW2gfVAa7C{transform:translateX(-1000%)}._2VbOrE7pSdqSZUbfAeHK3w._1z1vggP4O8kpkxc2oCMzXO .tb869PdAONQrW2gfVAa7C{transform:translateX(-1100%)}._2VbOrE7pSdqSZUbfAeHK3w._3g3QsE5bABfNNDTgAAegTh .tb869PdAONQrW2gfVAa7C{transform:translateX(-1200%)}._2VbOrE7pSdqSZUbfAeHK3w._3j5XlDnXcFV6xiCO2s0eBt .tb869PdAONQrW2gfVAa7C{transform:translateX(-1300%)}._2VbOrE7pSdqSZUbfAeHK3w._22nQMWRLyiM6dXQDndKAn0 .tb869PdAONQrW2gfVAa7C{transform:translateX(-1400%)}._2VbOrE7pSdqSZUbfAeHK3w._2mFfqwhLCxUAydYjtjhFUX .tb869PdAONQrW2gfVAa7C{transform:translateX(-1500%)}.tb869PdAONQrW2gfVAa7C{min-width:100%;text-align:center;padding:0 1rem;display:flex;flex-direction:column;transition:transform .5s ease-in-out}@media(min-width: 760px){.tb869PdAONQrW2gfVAa7C{padding:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,UAAU,CAAC,eAAe,CAAC,aAAa,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,uBAAO,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,yBAAO,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,eAAe,CAAC,gDAAY,UAAU,CAAC,cAAc,CAAC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,cAAc,CAAC,kEAA8B,SAAS,CAAC,8EAA0C,YAAY,CAAC,yBAAa,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,YAAY,CAAC,+BAAmB,wBAAwB,CAAC,yBAAmB,wBAAwB,CAAC,yBAAS,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sEAAsB,wBAAwB,CAAC,wEAAsB,2BAA2B,CAAC,uEAAsB,2BAA2B,CAAC,wEAAsB,2BAA2B,CAAC,sEAAsB,2BAA2B,CAAC,uEAAsB,2BAA2B,CAAC,sEAAsB,2BAA2B,CAAC,sEAAsB,2BAA2B,CAAC,wEAAsB,2BAA2B,CAAC,wEAAsB,2BAA2B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,uBAAM,cAAc,CAAC,iBAAiB,CAAC,cAAc,CAAC,YAAY,CAAC,qBAAqB,CAAC,oCAAoC,CAAC,yBAAyB,uBAAM,SAAS,CAAC","file":"styles.scss","sourcesContent":[".slider{width:100%;max-width:960px;margin:0 auto;display:flex;flex-direction:column;align-items:center}.upper{width:100%;display:flex;flex-direction:row;align-items:stretch}.lower{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:10px}.prev,.next{width:50px;font-size:40px;font-weight:100;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer}.prev svg path,.next svg path{fill:#fff}.prev:hover svg path,.next:hover svg path{fill:#707070}.quickAccess{width:10px;height:10px;cursor:pointer;border-radius:100%;background-color:#fff;margin:0 5px}.quickAccess:hover{background-color:#707070}.quickAccessActive{background-color:#707070}.wrapper{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;overflow:hidden}.wrapper.slide0 .item{transform:translateX(0%)}.wrapper.slide1 .item{transform:translateX(-100%)}.wrapper.slide2 .item{transform:translateX(-200%)}.wrapper.slide3 .item{transform:translateX(-300%)}.wrapper.slide4 .item{transform:translateX(-400%)}.wrapper.slide5 .item{transform:translateX(-500%)}.wrapper.slide6 .item{transform:translateX(-600%)}.wrapper.slide7 .item{transform:translateX(-700%)}.wrapper.slide8 .item{transform:translateX(-800%)}.wrapper.slide9 .item{transform:translateX(-900%)}.wrapper.slide10 .item{transform:translateX(-1000%)}.wrapper.slide11 .item{transform:translateX(-1100%)}.wrapper.slide12 .item{transform:translateX(-1200%)}.wrapper.slide13 .item{transform:translateX(-1300%)}.wrapper.slide14 .item{transform:translateX(-1400%)}.wrapper.slide15 .item{transform:translateX(-1500%)}.item{min-width:100%;text-align:center;padding:0 1rem;display:flex;flex-direction:column;transition:transform .5s ease-in-out}@media(min-width: 760px){.item{padding:0}}"]}]);

// Exports
exports.locals = {
	"slider": "_2vRwDXngLiKgarBQ0_awM9",
	"upper": "RCXt_B5pNELaFP66aQnYs",
	"lower": "_1Q2sQKsNa45fOGRvkYrQSt",
	"prev": "_2M-leRrbn-7xg8uhKxgJ_U",
	"next": "t4oGHsPViM5gyoap-rAVQ",
	"quickAccess": "_1l4oLhEgt-Kh2jNpI0JtTu",
	"quickAccessActive": "_1xyx64UzS8d6lRbZgu6F6k",
	"wrapper": "_2VbOrE7pSdqSZUbfAeHK3w",
	"slide0": "qgpe-w8PhkcDRSx3PMABb",
	"item": "tb869PdAONQrW2gfVAa7C",
	"slide1": "_10EJzpA4rHKqQNhkINISYU",
	"slide2": "_2wAqwuQl5e_M8kKcJiFDZ",
	"slide3": "_1LwRM32MGKDew5v0gWrKBj",
	"slide4": "MYtYzIb0wck9vpgl6oWJw",
	"slide5": "_78dsDoFa9twDUGYKpOfqG",
	"slide6": "Y2_6O5zgCrj0pDwvk_Xqt",
	"slide7": "SpNMeI7bu4tSLQYL8gyi8",
	"slide8": "_126HSxynvQGjWeDHHs7lrH",
	"slide9": "_2BgXVSoy_F0289wSvJKBn-",
	"slide10": "_2A1Hln0xsFagD0wYh8IP0J",
	"slide11": "_1z1vggP4O8kpkxc2oCMzXO",
	"slide12": "_3g3QsE5bABfNNDTgAAegTh",
	"slide13": "_3j5XlDnXcFV6xiCO2s0eBt",
	"slide14": "_22nQMWRLyiM6dXQDndKAn0",
	"slide15": "_2mFfqwhLCxUAydYjtjhFUX"
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return composeCb; });
var composeCb = function composeCb(events) {
  return function () {
    return events.flat(2).forEach(function (event) {
      return event && event();
    });
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._14n2uQza4SyeqMyBSk1BJ4{display:inline-block;margin-top:2rem;width:100%}._8a5c5O6SQUDItb0PSvPiA{position:relative;border-bottom:1px solid #666;padding:.5rem 0}._8a5c5O6SQUDItb0PSvPiA label{position:absolute;left:0}._8a5c5O6SQUDItb0PSvPiA input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Raleway\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}._8a5c5O6SQUDItb0PSvPiA input:invalid{outline:none}._8a5c5O6SQUDItb0PSvPiA input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}._8a5c5O6SQUDItb0PSvPiA input[value=\"\"]+label{bottom:.5rem}._8a5c5O6SQUDItb0PSvPiA input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}._8a5c5O6SQUDItb0PSvPiA input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}._8a5c5O6SQUDItb0PSvPiA svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}._3C8tM9wWxf1AavaZ1mOHtS{padding:.5rem 0;font-size:.75rem}._5kSWS-1c53mOnXyDNJF66{color:red}._1oKkUb05eNm86Kq00fuVMd{border-bottom:1px solid #17f3c7}._1oKkUb05eNm86Kq00fuVMd svg path{color:#17f3c7}._2L_JgaA9I4GEUqFgPN9XgW{border-bottom:1px solid red}._2L_JgaA9I4GEUqFgPN9XgW svg path{color:red}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,wBAAc,iBAAiB,CAAC,4BAA4B,CAAC,eAAe,CAAC,8BAAoB,iBAAiB,CAAC,MAAM,CAAC,8BAAoB,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,UAAU,CAAC,aAAa,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,sCAA4B,YAAY,CAAC,oCAA0B,QAAQ,CAAC,mDAAmD,CAAC,8CAAoC,YAAY,CAAC,oDAA0C,WAAW,CAAC,iBAAiB,CAAC,oDAA0C,WAAW,CAAC,iBAAiB,CAAC,4BAAkB,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,yBAAQ,eAAe,CAAC,gBAAgB,CAAC,wBAAK,SAAS,CAAC,yBAAO,+BAA+B,CAAC,kCAAgB,aAAa,CAAC,yBAAS,2BAA2B,CAAC,kCAAkB,SAAS","file":"styles.scss","sourcesContent":[".container{display:inline-block;margin-top:2rem;width:100%}.subContainer{position:relative;border-bottom:1px solid #666;padding:.5rem 0}.subContainer label{position:absolute;left:0}.subContainer input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Raleway\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}.subContainer input:invalid{outline:none}.subContainer input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}.subContainer input[value=\"\"]+label{bottom:.5rem}.subContainer input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}.subContainer input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}.subContainer svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}.helper{padding:.5rem 0;font-size:.75rem}.red{color:red}.valid{border-bottom:1px solid #17f3c7}.valid svg path{color:#17f3c7}.invalid{border-bottom:1px solid red}.invalid svg path{color:red}"]}]);

// Exports
exports.locals = {
	"container": "_14n2uQza4SyeqMyBSk1BJ4",
	"subContainer": "_8a5c5O6SQUDItb0PSvPiA",
	"helper": "_3C8tM9wWxf1AavaZ1mOHtS",
	"red": "_5kSWS-1c53mOnXyDNJF66",
	"valid": "_1oKkUb05eNm86Kq00fuVMd",
	"invalid": "_2L_JgaA9I4GEUqFgPN9XgW"
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, ".XszRy0pA2_nlH1riMA0VQ{display:inline-block;margin-top:2rem;width:100%}._1DMCe2ka2LTC_Ee-SyIH0p{position:relative;border-bottom:1px solid #666;padding:.5rem 0}._1DMCe2ka2LTC_Ee-SyIH0p label{position:absolute;left:0}._1DMCe2ka2LTC_Ee-SyIH0p textarea{border:0;box-shadow:none;outline:none;width:100%;max-width:100%;min-width:100%;height:1.5rem;font-family:\"Raleway\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}._1DMCe2ka2LTC_Ee-SyIH0p textarea:invalid{outline:none}._1DMCe2ka2LTC_Ee-SyIH0p textarea+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}._1DMCe2ka2LTC_Ee-SyIH0p textarea[value=\"\"]+label{bottom:.5rem}._1DMCe2ka2LTC_Ee-SyIH0p textarea:not([value=\"\"])+label{bottom:100%;font-size:.875rem}._1DMCe2ka2LTC_Ee-SyIH0p textarea:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}._1DMCe2ka2LTC_Ee-SyIH0p svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}._3UEJOJc2Mi0hv54ko3r4MS{padding:.5rem 0;font-size:.75rem}.EaQgUbMoCyqQc0cV-5r_f{color:red}._1w2JRD1aVFcyl84YKu5JAV{border-bottom:1px solid #17f3c7}._1w2JRD1aVFcyl84YKu5JAV svg path{color:#17f3c7}._1316aXAA0HDe7xOfnoGtKw{border-bottom:1px solid red}._1316aXAA0HDe7xOfnoGtKw svg path{color:red}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,uBAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,yBAAc,iBAAiB,CAAC,4BAA4B,CAAC,eAAe,CAAC,+BAAoB,iBAAiB,CAAC,MAAM,CAAC,kCAAuB,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,UAAU,CAAC,cAAc,CAAC,cAAc,CAAC,aAAa,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,0CAA+B,YAAY,CAAC,wCAA6B,QAAQ,CAAC,mDAAmD,CAAC,kDAAuC,YAAY,CAAC,wDAA6C,WAAW,CAAC,iBAAiB,CAAC,wDAA6C,WAAW,CAAC,iBAAiB,CAAC,6BAAkB,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,yBAAQ,eAAe,CAAC,gBAAgB,CAAC,uBAAK,SAAS,CAAC,yBAAO,+BAA+B,CAAC,kCAAgB,aAAa,CAAC,yBAAS,2BAA2B,CAAC,kCAAkB,SAAS","file":"styles.scss","sourcesContent":[".container{display:inline-block;margin-top:2rem;width:100%}.subContainer{position:relative;border-bottom:1px solid #666;padding:.5rem 0}.subContainer label{position:absolute;left:0}.subContainer textarea{border:0;box-shadow:none;outline:none;width:100%;max-width:100%;min-width:100%;height:1.5rem;font-family:\"Raleway\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}.subContainer textarea:invalid{outline:none}.subContainer textarea+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}.subContainer textarea[value=\"\"]+label{bottom:.5rem}.subContainer textarea:not([value=\"\"])+label{bottom:100%;font-size:.875rem}.subContainer textarea:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}.subContainer svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}.helper{padding:.5rem 0;font-size:.75rem}.red{color:red}.valid{border-bottom:1px solid #17f3c7}.valid svg path{color:#17f3c7}.invalid{border-bottom:1px solid red}.invalid svg path{color:red}"]}]);

// Exports
exports.locals = {
	"container": "XszRy0pA2_nlH1riMA0VQ",
	"subContainer": "_1DMCe2ka2LTC_Ee-SyIH0p",
	"helper": "_3UEJOJc2Mi0hv54ko3r4MS",
	"red": "EaQgUbMoCyqQc0cV-5r_f",
	"valid": "_1w2JRD1aVFcyl84YKu5JAV",
	"invalid": "_1316aXAA0HDe7xOfnoGtKw"
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(52);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(99);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(101);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(65);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(67);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(66);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(53);

var _helpers = __webpack_require__(102);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(98)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3jtk2BAZcP7zTii3yoswA1{overflow:hidden}._3FkQdeobiaqkagaGzRLWjv._3jX_TIpOeIKSFvK-18QF2C{-webkit-animation:_3FkQdeobiaqkagaGzRLWjv .5s ease-in-out;animation:_3FkQdeobiaqkagaGzRLWjv .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}._1cJAiNoVelaWgZmiq-j-pv._3jX_TIpOeIKSFvK-18QF2C{-webkit-animation:_1cJAiNoVelaWgZmiq-j-pv .5s ease-in-out;animation:_1cJAiNoVelaWgZmiq-j-pv .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}._3sKI-yX12FryJKf_kvPsVA._3jX_TIpOeIKSFvK-18QF2C{-webkit-animation:_3sKI-yX12FryJKf_kvPsVA .5s ease-in-out;animation:_3sKI-yX12FryJKf_kvPsVA .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}@-webkit-keyframes _3FkQdeobiaqkagaGzRLWjv{0%{transform:translateX(-100%);opacity:0}}@keyframes _3FkQdeobiaqkagaGzRLWjv{0%{transform:translateX(-100%);opacity:0}}@-webkit-keyframes _1cJAiNoVelaWgZmiq-j-pv{0%{transform:translateX(100%);opacity:0}}@keyframes _1cJAiNoVelaWgZmiq-j-pv{0%{transform:translateX(100%);opacity:0}}@-webkit-keyframes _3sKI-yX12FryJKf_kvPsVA{0%{transform:translateY(-100%);opacity:0}}@keyframes _3sKI-yX12FryJKf_kvPsVA{0%{transform:translateY(-100%);opacity:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,eAAe,CAAC,iDAAoB,yDAAkC,CAAlC,iDAAkC,CAAC,oCAAoC,CAAC,SAAS,CAAC,iDAAqB,yDAAmC,CAAnC,iDAAmC,CAAC,oCAAoC,CAAC,SAAS,CAAC,iDAAmB,yDAAiC,CAAjC,iDAAiC,CAAC,oCAAoC,CAAC,SAAS,CAAC,2CAAoB,GAAG,2BAA2B,CAAC,SAAS,CAAC,CAA7D,mCAAoB,GAAG,2BAA2B,CAAC,SAAS,CAAC,CAAC,2CAAqB,GAAG,0BAA0B,CAAC,SAAS,CAAC,CAA7D,mCAAqB,GAAG,0BAA0B,CAAC,SAAS,CAAC,CAAC,2CAAmB,GAAG,2BAA2B,CAAC,SAAS,CAAC,CAA5D,mCAAmB,GAAG,2BAA2B,CAAC,SAAS,CAAC","file":"styles.scss","sourcesContent":[".parent{overflow:hidden}.fromLeft.isVisible{animation:fromLeft .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}.fromRight.isVisible{animation:fromRight .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}.fromTop.isVisible{animation:fromTop .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}@keyframes fromLeft{0%{transform:translateX(-100%);opacity:0}}@keyframes fromRight{0%{transform:translateX(100%);opacity:0}}@keyframes fromTop{0%{transform:translateY(-100%);opacity:0}}"]}]);

// Exports
exports.locals = {
	"parent": "_3jtk2BAZcP7zTii3yoswA1",
	"fromLeft": "_3FkQdeobiaqkagaGzRLWjv",
	"isVisible": "_3jX_TIpOeIKSFvK-18QF2C",
	"fromRight": "_1cJAiNoVelaWgZmiq-j-pv",
	"fromTop": "_3sKI-yX12FryJKf_kvPsVA"
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1a-Lx8kMpAvFSc0nDZkcBb{margin-bottom:0}._7MnmtNpqZzTJ7RabFYsGg{margin:80px auto 0;padding:100px 0}._2G2emDnU5WgQE9xHogQ15H{background-color:rgba(255,255,255,.7);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1rem}._21huClXiSzV8JPjECbdPqq{color:#222;text-align:center;font-weight:400;font-size:1.5rem;line-height:1.2;padding:18px 0;margin-top:1rem}._1BMhmVOliZ7mK6rXSrdK5X{font-size:4rem;line-height:1;display:block}._PcfCbcy0B9_K2m4I7gMs{margin-top:60px;margin:36px 0 18px}._3k6K6dsbp3A3PlbFhlj6bU{text-align:center;font-size:1.75rem;line-height:1.3;color:#707070;padding:3rem 0}._3k6K6dsbp3A3PlbFhlj6bU strong{color:#17f3c7}.yJTYHzRpZRS1ad1UI-8jv{margin-bottom:1.25rem}._dl5C1Ywx2i4Y70-rpOg7{font-size:3rem;font-weight:600;color:#17f3c7}._CKMjQ1wTnUJlXxCBB5Fg{font-size:1.75rem;font-style:italic;color:#fff}._2PhqtO6-ACT6R8SzH9fZIr{display:flex;justify-content:center}._2PhqtO6-ACT6R8SzH9fZIr>a:first-of-type{margin-right:1.25rem}.YYdrIfQcaIh5Pq08_-O39{display:flex;flex-direction:column;justify-content:center;text-align:center}._1WFHozQcUdJzkwc-AfNYkj{color:#707070;font-size:1rem;display:block;padding-top:1.5rem}._36viGxH5TQvHT4bnsfYWz2{display:flex;justify-content:center;margin-bottom:1.25rem}._36viGxH5TQvHT4bnsfYWz2>button{margin-right:1.25rem}._36viGxH5TQvHT4bnsfYWz2>button:last-of-type{margin-right:0}._19f6DYZCjcWN068aLVXirX{text-align:left}._1IxnxAH4v_1yptr2Y-BThP{padding-left:3rem}._3S_0IFX509EMzwfXoE3WO{font-size:1.1rem;line-height:0;font-weight:500}._2Ga6pG2T5dX8gEdmoELIYr{color:#17f3c7;font-weight:600}@media(min-width: 760px){._7MnmtNpqZzTJ7RabFYsGg{max-width:960px}._2G2emDnU5WgQE9xHogQ15H{padding:0 50px}._21huClXiSzV8JPjECbdPqq{font-size:1.8rem}._1BMhmVOliZ7mK6rXSrdK5X{font-size:64px;line-height:1.7;font-weight:400}._3k6K6dsbp3A3PlbFhlj6bU{font-size:2.2rem;padding:4.5rem 0;font-weight:300}.YYdrIfQcaIh5Pq08_-O39{padding-top:0}._36viGxH5TQvHT4bnsfYWz2{margin-bottom:0}.B_JTQTtc3nUy-3SNetWxF{margin-top:calc(2 * 1.25rem)}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAA8B,eAAe,CAAC,wBAAc,kBAAkB,CAAC,eAAe,CAAC,yBAAW,qCAAqC,CAAC,iBAAiB,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,cAAc,CAAC,yBAAO,UAAU,CAAC,iBAAiB,CAAC,eAAe,CAAC,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,eAAe,CAAC,yBAAU,cAAc,CAAC,aAAa,CAAC,aAAa,CAAC,uBAAc,eAAe,CAAC,kBAAkB,CAAC,yBAAM,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,aAAa,CAAC,cAAc,CAAC,gCAAa,aAAa,CAAC,uBAAU,qBAAqB,CAAC,uBAAM,cAAc,CAAC,eAAe,CAAC,aAAa,CAAC,uBAAO,iBAAiB,CAAC,iBAAiB,CAAC,UAAU,CAAC,yBAAK,YAAY,CAAC,sBAAsB,CAAC,yCAAqB,oBAAoB,CAAC,uBAAW,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,yBAAe,aAAa,CAAC,cAAc,CAAC,aAAa,CAAC,kBAAkB,CAAC,yBAAc,YAAY,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,gCAAqB,oBAAoB,CAAC,6CAAkC,cAAc,CAAC,yBAAM,eAAe,CAAC,yBAAM,iBAAiB,CAAC,wBAAmB,gBAAgB,CAAC,aAAa,CAAC,eAAe,CAAC,yBAAW,aAAa,CAAC,eAAe,CAAC,yBAAyB,wBAAc,eAAe,CAAC,yBAAW,cAAc,CAAC,yBAAO,gBAAgB,CAAC,yBAAU,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,yBAAM,gBAAgB,CAAC,gBAAgB,CAAC,eAAe,CAAC,uBAAW,aAAa,CAAC,yBAAc,eAAe,CAAC,uBAAW,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".paragraphWithoutBottomMargin{margin-bottom:0}.titleWrapper{margin:80px auto 0;padding:100px 0}.titleText{background-color:rgba(255,255,255,.7);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1rem}.title{color:#222;text-align:center;font-weight:400;font-size:1.5rem;line-height:1.2;padding:18px 0;margin-top:1rem}.titleBig{font-size:4rem;line-height:1;display:block}.titleButtons{margin-top:60px;margin:36px 0 18px}.hero{text-align:center;font-size:1.75rem;line-height:1.3;color:#707070;padding:3rem 0}.hero strong{color:#17f3c7}.dropdown{margin-bottom:1.25rem}.step{font-size:3rem;font-weight:600;color:#17f3c7}.quote{font-size:1.75rem;font-style:italic;color:#fff}.cta{display:flex;justify-content:center}.cta>a:first-of-type{margin-right:1.25rem}.container{display:flex;flex-direction:column;justify-content:center;text-align:center}.containerSpan{color:#707070;font-size:1rem;display:block;padding-top:1.5rem}.containerCta{display:flex;justify-content:center;margin-bottom:1.25rem}.containerCta>button{margin-right:1.25rem}.containerCta>button:last-of-type{margin-right:0}.left{text-align:left}.list{padding-left:3rem}.exceptionSubtitle{font-size:1.1rem;line-height:0;font-weight:500}.important{color:#17f3c7;font-weight:600}@media(min-width: 760px){.titleWrapper{max-width:960px}.titleText{padding:0 50px}.title{font-size:1.8rem}.titleBig{font-size:64px;line-height:1.7;font-weight:400}.hero{font-size:2.2rem;padding:4.5rem 0;font-weight:300}.container{padding-top:0}.containerCta{margin-bottom:0}.marginTop{margin-top:calc(2 * 1.25rem)}}"]}]);

// Exports
exports.locals = {
	"paragraphWithoutBottomMargin": "_1a-Lx8kMpAvFSc0nDZkcBb",
	"titleWrapper": "_7MnmtNpqZzTJ7RabFYsGg",
	"titleText": "_2G2emDnU5WgQE9xHogQ15H",
	"title": "_21huClXiSzV8JPjECbdPqq",
	"titleBig": "_1BMhmVOliZ7mK6rXSrdK5X",
	"titleButtons": "_PcfCbcy0B9_K2m4I7gMs",
	"hero": "_3k6K6dsbp3A3PlbFhlj6bU",
	"dropdown": "yJTYHzRpZRS1ad1UI-8jv",
	"step": "_dl5C1Ywx2i4Y70-rpOg7",
	"quote": "_CKMjQ1wTnUJlXxCBB5Fg",
	"cta": "_2PhqtO6-ACT6R8SzH9fZIr",
	"container": "YYdrIfQcaIh5Pq08_-O39",
	"containerSpan": "_1WFHozQcUdJzkwc-AfNYkj",
	"containerCta": "_36viGxH5TQvHT4bnsfYWz2",
	"left": "_19f6DYZCjcWN068aLVXirX",
	"list": "_1IxnxAH4v_1yptr2Y-BThP",
	"exceptionSubtitle": "_3S_0IFX509EMzwfXoE3WO",
	"important": "_2Ga6pG2T5dX8gEdmoELIYr",
	"marginTop": "B_JTQTtc3nUy-3SNetWxF"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3Ue1EQMBMT_83ytwsFmUzM{margin-top:80px}.AqbeUzrp-rczksUKrkequ{display:flex;align-items:center;justify-content:center;margin-bottom:80px}._2-4ZagMIQNPb8CpqNTFg29{margin-bottom:1.25rem}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,eAAe,CAAC,uBAAK,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,yBAAU,qBAAqB","file":"styles.scss","sourcesContent":[".page{margin-top:80px}.cta{display:flex;align-items:center;justify-content:center;margin-bottom:80px}.dropdown{margin-bottom:1.25rem}"]}]);

// Exports
exports.locals = {
	"page": "_3Ue1EQMBMT_83ytwsFmUzM",
	"cta": "AqbeUzrp-rczksUKrkequ",
	"dropdown": "_2-4ZagMIQNPb8CpqNTFg29"
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2xqDeAvlJc1JTqGgXo54Vq{width:100%;max-width:calc(100% - 1.75rem);margin:0 auto}._2lG3osT9eqsJWSSRxpKqdu{width:100%;max-width:100%;padding:0;display:grid;grid-template-rows:auto}._3FrrlGAuICnkqvW5cw9QQ6,._3AEoXTJOB7A0sGLlxL-aQl,._-5O5cq6ieRLaghItPxH9A,.zy2zTRKKL2s-Z4tI_JhqE,._1VqCKrehYXutUX-Qx5Q6iD{grid-template-columns:100%;-moz-column-gap:0;column-gap:0}@media(min-width: 760px){._2xqDeAvlJc1JTqGgXo54Vq{max-width:960px}._2lG3osT9eqsJWSSRxpKqdu{padding:0 1.25rem;-moz-column-gap:1.5rem;column-gap:1.5rem}._3FrrlGAuICnkqvW5cw9QQ6{grid-template-columns:100%;-moz-column-gap:0;column-gap:0}._3AEoXTJOB7A0sGLlxL-aQl{grid-template-columns:50% 50%}._-5O5cq6ieRLaghItPxH9A{grid-template-columns:33.33% 33.33% 33.33%}.zy2zTRKKL2s-Z4tI_JhqE{grid-template-columns:minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%)}._1VqCKrehYXutUX-Qx5Q6iD{grid-template-columns:20% 20% 20% 20% 20%}._2CLm4bZ1laA-JMQ9UEUTMK{grid-area:auto/1/auto/span 1}._1dbG1yfyMWwjDbslurhnW_{grid-area:auto/1/auto/span 2}._2bC34Gbvu-UqJEJamGwObh{grid-area:auto/1/auto/span 3}._3UVmgH7WTEkhbesgZIqEjO{grid-area:auto/1/auto/span 4}.fbmXJR4ry7Jxse2JM9r6x{grid-area:auto/1/auto/span 5}._2skhCxy29wj10riHe1ZxMI{grid-area:auto/2/auto/span 1}.Ii9mKEPNBNX1QGnHCnZtL{grid-area:auto/2/auto/span 2}._2Lf9ZaSv7JWWZHmebPFv9_{grid-area:auto/2/auto/span 3}._3hOHPFecxPTwfMv55s07fL{grid-area:auto/2/auto/span 4}._3VuBs51rLrVu-FUdEsOAYs{grid-area:auto/3/auto/span 1}._2YkK3io9jCXBt4dFIKHZNv{grid-area:auto/3/auto/span 2}.V2cW8u_8JStIyCGBuS-pp{grid-area:auto/3/auto/span 3}.jNmxNVWMLWeoa3YtcOXvI{grid-area:auto/4/auto/span 1}._2PKgcvf-2DDA30T8TrP8hF{grid-area:auto/4/auto/span 2}._1lnAgL3dRCRGdSEClZCykg{grid-area:auto/5/auto/span 1}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,UAAU,CAAC,8BAA8B,CAAC,aAAa,CAAC,yBAAS,UAAU,CAAC,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC,uBAAuB,CAAC,0HAAmC,0BAA0B,CAAC,iBAAW,CAAX,YAAY,CAAC,yBAAyB,yBAAM,eAAe,CAAC,yBAAS,iBAAiB,CAAC,sBAAgB,CAAhB,iBAAiB,CAAC,yBAAO,0BAA0B,CAAC,iBAAW,CAAX,YAAY,CAAC,yBAAO,6BAA6B,CAAC,wBAAO,0CAA0C,CAAC,uBAAO,yFAAyF,CAAC,yBAAO,yCAAyC,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".grid{width:100%;max-width:calc(100% - 1.75rem);margin:0 auto}.content{width:100%;max-width:100%;padding:0;display:grid;grid-template-rows:auto}.grid1,.grid2,.grid3,.grid4,.grid5{grid-template-columns:100%;column-gap:0}@media(min-width: 760px){.grid{max-width:960px}.content{padding:0 1.25rem;column-gap:1.5rem}.grid1{grid-template-columns:100%;column-gap:0}.grid2{grid-template-columns:50% 50%}.grid3{grid-template-columns:33.33% 33.33% 33.33%}.grid4{grid-template-columns:minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%)}.grid5{grid-template-columns:20% 20% 20% 20% 20%}.item11{grid-area:auto/1/auto/span 1}.item12{grid-area:auto/1/auto/span 2}.item13{grid-area:auto/1/auto/span 3}.item14{grid-area:auto/1/auto/span 4}.item15{grid-area:auto/1/auto/span 5}.item21{grid-area:auto/2/auto/span 1}.item22{grid-area:auto/2/auto/span 2}.item23{grid-area:auto/2/auto/span 3}.item24{grid-area:auto/2/auto/span 4}.item31{grid-area:auto/3/auto/span 1}.item32{grid-area:auto/3/auto/span 2}.item33{grid-area:auto/3/auto/span 3}.item41{grid-area:auto/4/auto/span 1}.item42{grid-area:auto/4/auto/span 2}.item51{grid-area:auto/5/auto/span 1}}"]}]);

// Exports
exports.locals = {
	"grid": "_2xqDeAvlJc1JTqGgXo54Vq",
	"content": "_2lG3osT9eqsJWSSRxpKqdu",
	"grid1": "_3FrrlGAuICnkqvW5cw9QQ6",
	"grid2": "_3AEoXTJOB7A0sGLlxL-aQl",
	"grid3": "_-5O5cq6ieRLaghItPxH9A",
	"grid4": "zy2zTRKKL2s-Z4tI_JhqE",
	"grid5": "_1VqCKrehYXutUX-Qx5Q6iD",
	"item11": "_2CLm4bZ1laA-JMQ9UEUTMK",
	"item12": "_1dbG1yfyMWwjDbslurhnW_",
	"item13": "_2bC34Gbvu-UqJEJamGwObh",
	"item14": "_3UVmgH7WTEkhbesgZIqEjO",
	"item15": "fbmXJR4ry7Jxse2JM9r6x",
	"item21": "_2skhCxy29wj10riHe1ZxMI",
	"item22": "Ii9mKEPNBNX1QGnHCnZtL",
	"item23": "_2Lf9ZaSv7JWWZHmebPFv9_",
	"item24": "_3hOHPFecxPTwfMv55s07fL",
	"item31": "_3VuBs51rLrVu-FUdEsOAYs",
	"item32": "_2YkK3io9jCXBt4dFIKHZNv",
	"item33": "V2cW8u_8JStIyCGBuS-pp",
	"item41": "jNmxNVWMLWeoa3YtcOXvI",
	"item42": "_2PKgcvf-2DDA30T8TrP8hF",
	"item51": "_1lnAgL3dRCRGdSEClZCykg"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/palm.f78deeeb.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2tNxd4O7KHO6bItyDBhQ0d{width:100%;display:flex;flex-direction:column;justify-content:center;padding:2.25rem 0;background-color:#17f3c7}._3_hTn0sKicA2TFY8qK7Ixo{background-color:#e3e3e3}._2IDxAPIhkEz-3lUzpw1Orl{text-align:center}._2BYyCNvfFv20TYZl07X88R{display:flex;flex-direction:column;align-items:center;color:#fff;max-width:960px;margin:0 auto;text-align:center}._2BYyCNvfFv20TYZl07X88R>button,._2BYyCNvfFv20TYZl07X88R>a{margin-top:1.25rem}._2BYyCNvfFv20TYZl07X88R>button:first-of-type,._2BYyCNvfFv20TYZl07X88R>a:first-of-type{margin-top:0}._2jz4ia7nQ78Q_gyrHUcRDp{width:100%;max-width:calc(100% - 1.75rem)}@media(min-width: 760px){._2jz4ia7nQ78Q_gyrHUcRDp{flex-direction:row;max-width:960px;justify-content:center}._2jz4ia7nQ78Q_gyrHUcRDp>button,._2jz4ia7nQ78Q_gyrHUcRDp>a{margin:0 15px}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,yBAAM,wBAAwB,CAAC,yBAAO,iBAAiB,CAAC,yBAAS,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,UAAU,CAAC,eAAe,CAAC,aAAa,CAAC,iBAAiB,CAAC,2DAA2B,kBAAkB,CAAC,uFAAuD,YAAY,CAAC,yBAAY,UAAU,CAAC,8BAA8B,CAAC,yBAAyB,yBAAY,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2DAAiC,aAAa,CAAC","file":"styles.scss","sourcesContent":[".hero{width:100%;display:flex;flex-direction:column;justify-content:center;padding:2.25rem 0;background-color:#17f3c7}.grey{background-color:#e3e3e3}.title{text-align:center}.content{display:flex;flex-direction:column;align-items:center;color:#fff;max-width:960px;margin:0 auto;text-align:center}.content>button,.content>a{margin-top:1.25rem}.content>button:first-of-type,.content>a:first-of-type{margin-top:0}.horizontal{width:100%;max-width:calc(100% - 1.75rem)}@media(min-width: 760px){.horizontal{flex-direction:row;max-width:960px;justify-content:center}.horizontal>button,.horizontal>a{margin:0 15px}}"]}]);

// Exports
exports.locals = {
	"hero": "_2tNxd4O7KHO6bItyDBhQ0d",
	"grey": "_3_hTn0sKicA2TFY8qK7Ixo",
	"title": "_2IDxAPIhkEz-3lUzpw1Orl",
	"content": "_2BYyCNvfFv20TYZl07X88R",
	"horizontal": "_2jz4ia7nQ78Q_gyrHUcRDp"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(53);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(100)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3o7_5mvaPibnhwLQct-Ldl{width:100%;height:100%;min-width:90vw;min-height:calc(100vh - 30px);display:flex;justify-content:center;align-items:center;flex-direction:column}._3KAh2V2-wyF3oogbceuFM2{font-size:100px;margin:0 0 20px}._3KAh2V2-wyF3oogbceuFM2 path{fill:#17f3c7}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,6BAA6B,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,yBAAgB,eAAe,CAAC,eAAe,CAAC,8BAAqB,YAAY","file":"styles.scss","sourcesContent":[".wrapper{width:100%;height:100%;min-width:90vw;min-height:calc(100vh - 30px);display:flex;justify-content:center;align-items:center;flex-direction:column}.comingSoonIcon{font-size:100px;margin:0 0 20px}.comingSoonIcon path{fill:#17f3c7}"]}]);

// Exports
exports.locals = {
	"wrapper": "_3o7_5mvaPibnhwLQct-Ldl",
	"comingSoonIcon": "_3KAh2V2-wyF3oogbceuFM2"
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3VR8Rb7f38n7Hd0YVwrkHy{border:2px solid #17f3c7;color:#fff;display:inline-block;background-color:#17f3c7;padding:1rem 1.5rem;cursor:pointer;font-weight:600;text-align:center;display:flex;align-items:center;justify-content:center}._3VR8Rb7f38n7Hd0YVwrkHy:hover{background-color:#fff;color:#17f3c7}._14wbftlkNtATnwoI-UcI6-{background-color:#fff;color:#17f3c7}._14wbftlkNtATnwoI-UcI6-:hover{background-color:#17f3c7;color:#fff}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,wBAAwB,CAAC,UAAU,CAAC,oBAAoB,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,+BAAc,qBAAqB,CAAC,aAAa,CAAC,yBAAS,qBAAqB,CAAC,aAAa,CAAC,+BAAe,wBAAwB,CAAC,UAAU","file":"styles.scss","sourcesContent":[".button{border:2px solid #17f3c7;color:#fff;display:inline-block;background-color:#17f3c7;padding:1rem 1.5rem;cursor:pointer;font-weight:600;text-align:center;display:flex;align-items:center;justify-content:center}.button:hover{background-color:#fff;color:#17f3c7}.inverse{background-color:#fff;color:#17f3c7}.inverse:hover{background-color:#17f3c7;color:#fff}"]}]);

// Exports
exports.locals = {
	"button": "_3VR8Rb7f38n7Hd0YVwrkHy",
	"inverse": "_14wbftlkNtATnwoI-UcI6-"
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._5syOO1mI1C35KaKUGKTbG{margin:1.75rem 0;color:inherit;line-height:1.6;text-align:justify}._5syOO1mI1C35KaKUGKTbG b,._5syOO1mI1C35KaKUGKTbG strong{font-weight:500}._3HOKTcQSRSpfw1Mciv8_as{font-weight:500}._2_qOV5iS-xx5Fn6tHE9C2O{font-size:1.25rem}._3XAR85sEmByq6z0RdAzL5q{margin-top:0}@media(min-width: 760px){._7Q8E056kjU-DW23-QYVrw{margin:2.5rem 0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,wBAAG,gBAAgB,CAAC,aAAa,CAAC,eAAe,CAAC,kBAAkB,CAAC,yDAAe,eAAe,CAAC,yBAAQ,eAAe,CAAC,yBAAU,iBAAiB,CAAC,yBAAa,YAAY,CAAC,yBAAyB,wBAAO,eAAe,CAAC","file":"styles.scss","sourcesContent":[".p{margin:1.75rem 0;color:inherit;line-height:1.6;text-align:justify}.p b,.p strong{font-weight:500}.strong{font-weight:500}.emphasis{font-size:1.25rem}.noTopMargin{margin-top:0}@media(min-width: 760px){.title{margin:2.5rem 0}}"]}]);

// Exports
exports.locals = {
	"p": "_5syOO1mI1C35KaKUGKTbG",
	"strong": "_3HOKTcQSRSpfw1Mciv8_as",
	"emphasis": "_2_qOV5iS-xx5Fn6tHE9C2O",
	"noTopMargin": "_3XAR85sEmByq6z0RdAzL5q",
	"title": "_7Q8E056kjU-DW23-QYVrw"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3tos4RnxitHp2uUGnGEW3t{display:flex;flex-wrap:wrap;flex-direction:column;overflow:hidden}.JtO4RvpSv9G4JT9zAA3pn{display:flex;max-height:0;transition:max-height .5s ease-in-out}._1WywFi8Imyzjk22d3Pw5X4{max-height:1000px}._3Nn8C8W9bvzD9nbFOK_1gM{cursor:pointer}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,YAAY,CAAC,cAAc,CAAC,qBAAqB,CAAC,eAAe,CAAC,uBAAS,YAAY,CAAC,YAAY,CAAC,qCAAqC,CAAC,yBAAI,iBAAiB,CAAC,yBAAS,cAAc","file":"styles.scss","sourcesContent":[".wrapper{display:flex;flex-wrap:wrap;flex-direction:column;overflow:hidden}.content{display:flex;max-height:0;transition:max-height .5s ease-in-out}.on{max-height:1000px}.trigger{cursor:pointer}"]}]);

// Exports
exports.locals = {
	"wrapper": "_3tos4RnxitHp2uUGnGEW3t",
	"content": "JtO4RvpSv9G4JT9zAA3pn",
	"on": "_1WywFi8Imyzjk22d3Pw5X4",
	"trigger": "_3Nn8C8W9bvzD9nbFOK_1gM"
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(109);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _consent_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92);
/* harmony import */ var _consent_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_consent_scss__WEBPACK_IMPORTED_MODULE_8__);









var GaContent = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J80HMF2KRG');";

function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_cookie_consent__WEBPACK_IMPORTED_MODULE_4__["getCookieConsentValue"])()),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      cookieConsent = _useState2[0],
      setCookieConsent = _useState2[1];

  var cookieConsentCb = function cookieConsentCb() {
    setCookieConsent(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_2__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_2__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Patchworks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Reenie+Beanie&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/apple-touch-icon.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), cookieConsent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-J80HMF2KRG"
  }), cookieConsent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", null, GaContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__[/* Header */ "d"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Router"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_2__["Routes"], {
    path: "*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__[/* Footer */ "c"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_cookie_consent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    containerClasses: _consent_scss__WEBPACK_IMPORTED_MODULE_8___default.a.banner,
    ButtonComponent: _atoms__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "f"],
    onAccept: cookieConsentCb,
    buttonText: "Autoriser et fermer"
  }, "En cliquant sur \"Autoriser et fermer\", vous acceptez l\u2019utilisation de cookies par Patchwork-s afin (i) d\u2019optimiser votre exp\xE9rience de navigation et (ii) de mesurer et d\u2019analyser la performance de la Plateforme. Vous pouvez \xE9galement refuser tout cookie non essentiel au fonctionnement de la Plateforme, en poursuivant votre navigation.")));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._6H4_LoO3R9l-B_XhD85E-{font-size:1.75rem;font-weight:700;letter-spacing:.1;margin-bottom:.875rem;color:#666}.PHn7MK9t_MzTnZeWDNYkp{margin:0}._32FpEo3_gKdGts7WyLrDbr{text-align:center}@media(min-width: 760px){._6H4_LoO3R9l-B_XhD85E-{font-size:2.2rem;margin-bottom:1.25rem}.PHn7MK9t_MzTnZeWDNYkp{margin:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,wBAAO,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,UAAU,CAAC,uBAAU,QAAQ,CAAC,yBAAU,iBAAiB,CAAC,yBAAyB,wBAAO,gBAAgB,CAAC,qBAAqB,CAAC,uBAAU,QAAQ,CAAC","file":"styles.scss","sourcesContent":[".title{font-size:1.75rem;font-weight:700;letter-spacing:.1;margin-bottom:.875rem;color:#666}.noMargin{margin:0}.centered{text-align:center}@media(min-width: 760px){.title{font-size:2.2rem;margin-bottom:1.25rem}.noMargin{margin:0}}"]}]);

// Exports
exports.locals = {
	"title": "_6H4_LoO3R9l-B_XhD85E-",
	"noMargin": "PHn7MK9t_MzTnZeWDNYkp",
	"centered": "_32FpEo3_gKdGts7WyLrDbr"
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1sOx5UaK4nXS1xUVskijxw{font-size:1.75rem;font-weight:500;letter-spacing:.1;margin-bottom:.875rem;color:#17f3c7}._3mQ4FijufuiSERJd_VEQZr{font-size:1.2rem;margin-bottom:0;color:#17f3c7;text-transform:uppercase;text-align:left}.KIe49P6q--N1JRU0rpswA{margin-top:.875rem;font-size:1.3rem;font-weight:500;display:inline-block}@media(min-width: 760px){._1sOx5UaK4nXS1xUVskijxw{font-size:2.2rem;margin-bottom:1.25rem}.KIe49P6q--N1JRU0rpswA{margin-top:1.25rem}._3mQ4FijufuiSERJd_VEQZr{font-size:1.2rem;margin-bottom:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAO,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,aAAa,CAAC,yBAAO,gBAAgB,CAAC,eAAe,CAAC,aAAa,CAAC,wBAAwB,CAAC,eAAe,CAAC,uBAAK,kBAAkB,CAAC,gBAAgB,CAAC,eAAe,CAAC,oBAAoB,CAAC,yBAAyB,yBAAO,gBAAgB,CAAC,qBAAqB,CAAC,uBAAK,kBAAkB,CAAC,yBAAO,gBAAgB,CAAC,eAAe,CAAC","file":"styles.scss","sourcesContent":[".title{font-size:1.75rem;font-weight:500;letter-spacing:.1;margin-bottom:.875rem;color:#17f3c7}.small{font-size:1.2rem;margin-bottom:0;color:#17f3c7;text-transform:uppercase;text-align:left}.sub{margin-top:.875rem;font-size:1.3rem;font-weight:500;display:inline-block}@media(min-width: 760px){.title{font-size:2.2rem;margin-bottom:1.25rem}.sub{margin-top:1.25rem}.small{font-size:1.2rem;margin-bottom:0}}"]}]);

// Exports
exports.locals = {
	"title": "_1sOx5UaK4nXS1xUVskijxw",
	"small": "_3mQ4FijufuiSERJd_VEQZr",
	"sub": "KIe49P6q--N1JRU0rpswA"
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/compass.76d554aa.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/boat.18fefc70.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/door-green.badfc6b7.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/desert.56dee292.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/blue.af660288.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower.edf4ceec.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/knot.90c5daf2.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ocean.ce13084f.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pencil-rainbow.6eb42e64.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/table.7c978953.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(52);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(33);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2yPsAG5vu06G2FTNy6H1Kj{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}._2yPsAG5vu06G2FTNy6H1Kj img{width:100%;height:auto}._1SMf3ov8_6Y_MWo0zR7HUT img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,CAAC,6BAAa,UAAU,CAAC,WAAW,CAAC,6BAAW,UAAU,CAAC,WAAW,CAAC,mBAAe,CAAf,gBAAgB","file":"styles.scss","sourcesContent":[".picture{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.picture img{width:100%;height:auto}.cover img{width:100%;height:100%;object-fit:cover}"]}]);

// Exports
exports.locals = {
	"picture": "_2yPsAG5vu06G2FTNy6H1Kj",
	"cover": "_1SMf3ov8_6Y_MWo0zR7HUT"
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/parot.aa0aff2b.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/table-coffee.e22b7e2b.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/marie-profile.aae9d7ea.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2rkb0gsIP9iYB-bAvHZEMu{position:fixed;top:0;left:0;width:100%;height:100%;min-height:100vh;max-height:100vh;min-width:100vw;max-width:100vw;background-color:rgba(0,0,0,.6);z-index:99999;display:flex;justify-content:center;align-items:center}._2z-UJvf2FivpcPgygLU9Ih{background-color:#fff;padding:1.5rem;-webkit-animation:_2qsxx9XJYAVkPT8fqktRHX .2s linear;animation:_2qsxx9XJYAVkPT8fqktRHX .2s linear;max-width:80%;max-height:80%;overflow:auto}@media(min-width: 760px){._2z-UJvf2FivpcPgygLU9Ih{max-width:50%}}@-webkit-keyframes _2qsxx9XJYAVkPT8fqktRHX{from{transform:scale(0)}to{transform:scale(1)}}@keyframes _2qsxx9XJYAVkPT8fqktRHX{from{transform:scale(0)}to{transform:scale(1)}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAO,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,WAAW,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,eAAe,CAAC,eAAe,CAAC,+BAA+B,CAAC,aAAa,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,yBAAS,qBAAqB,CAAC,cAAc,CAAC,oDAA4B,CAA5B,4CAA4B,CAAC,aAAa,CAAC,cAAc,CAAC,aAAa,CAAC,yBAAyB,yBAAS,aAAa,CAAC,CAAC,2CAAmB,KAAK,kBAAkB,CAAC,GAAG,kBAAkB,CAAC,CAAjE,mCAAmB,KAAK,kBAAkB,CAAC,GAAG,kBAAkB,CAAC","file":"styles.scss","sourcesContent":[".modal{position:fixed;top:0;left:0;width:100%;height:100%;min-height:100vh;max-height:100vh;min-width:100vw;max-width:100vw;background-color:rgba(0,0,0,.6);z-index:99999;display:flex;justify-content:center;align-items:center}.content{background-color:#fff;padding:1.5rem;animation:animate .2s linear;max-width:80%;max-height:80%;overflow:auto}@media(min-width: 760px){.content{max-width:50%}}@keyframes animate{from{transform:scale(0)}to{transform:scale(1)}}"]}]);

// Exports
exports.locals = {
	"modal": "_2rkb0gsIP9iYB-bAvHZEMu",
	"content": "_2z-UJvf2FivpcPgygLU9Ih",
	"animate": "_2qsxx9XJYAVkPT8fqktRHX"
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1R6K-clUTQcWxo93MMeOP4{text-decoration:underline;-webkit-text-decoration-color:#17f3c7;text-decoration-color:#17f3c7;text-decoration-thickness:3px}._1R6K-clUTQcWxo93MMeOP4:hover{background-color:#17f3c7}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,yBAAyB,CAAC,qCAA6B,CAA7B,6BAA6B,CAAC,6BAA6B,CAAC,+BAAY,wBAAwB","file":"styles.scss","sourcesContent":[".link{text-decoration:underline;text-decoration-color:#17f3c7;text-decoration-thickness:3px}.link:hover{background-color:#17f3c7}"]}]);

// Exports
exports.locals = {
	"link": "_1R6K-clUTQcWxo93MMeOP4"
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3sj7jcocXPQHrhhrY9YdSS{margin:0;font-weight:500;display:flex;font-size:1.2rem;align-items:flex-start;border-left:5px solid #17f3c7;padding-left:15px}._1VToAE7Zt1AtJzPeg4MfsH{display:none;font-size:3rem;line-height:1;color:#17f3c7;font-weight:900;margin:0 1.6rem 0 0}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAG,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,yBAAO,YAAY,CAAC,cAAc,CAAC,aAAa,CAAC,aAAa,CAAC,eAAe,CAAC,mBAAmB","file":"styles.scss","sourcesContent":[".p{margin:0;font-weight:500;display:flex;font-size:1.2rem;align-items:flex-start;border-left:5px solid #17f3c7;padding-left:15px}.quote{display:none;font-size:3rem;line-height:1;color:#17f3c7;font-weight:900;margin:0 1.6rem 0 0}"]}]);

// Exports
exports.locals = {
	"p": "_3sj7jcocXPQHrhhrY9YdSS",
	"quote": "_1VToAE7Zt1AtJzPeg4MfsH"
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("/home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/node_modules/react-static/lib/browser");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_1__[/* Title */ "y"], null, "Oups, la page n'existe pas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "f"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_2__[/* homePage */ "e"].path
  }, "Revenir a l'accueil"));
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Home */ "e"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



var Service = function Service() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Service */ "f"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* About */ "a"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Contact */ "b"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "k"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTools"],
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.comingSoonIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_2__[/* Title */ "y"], null, "English version coming soon!"));
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(34);

var _router = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._6fmH0Z9RqE8w9Cle39SRt{margin-top:80px;min-height:calc(100vh - 80px - 20px);position:relative}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,wBAAW,eAAe,CAAC,oCAAoC,CAAC,iBAAiB","file":"styles.scss","sourcesContent":[".container{margin-top:80px;min-height:calc(100vh - 80px - 20px);position:relative}"]}]);

// Exports
exports.locals = {
	"container": "_6fmH0Z9RqE8w9Cle39SRt"
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._2zdV98WE3wMcnmkFqcpRI7{list-style-type:none;line-height:1.6;margin:.875rem 0}._2zdV98WE3wMcnmkFqcpRI7 li{display:flex;align-items:flex-start}._2zdV98WE3wMcnmkFqcpRI7 li:before{content:\"•\";font-size:2rem;line-height:1.6;padding:0 1rem;max-height:1.6rem;display:flex;align-items:center}._2zdV98WE3wMcnmkFqcpRI7 i{color:#17f3c7}._2zdV98WE3wMcnmkFqcpRI7 b,._2zdV98WE3wMcnmkFqcpRI7 strong{font-weight:500}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,oBAAoB,CAAC,eAAe,CAAC,gBAAgB,CAAC,4BAAS,YAAY,CAAC,sBAAsB,CAAC,mCAAgB,WAAW,CAAC,cAAc,CAAC,eAAe,CAAC,cAAc,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,2BAAQ,aAAa,CAAC,2DAAqB,eAAe","file":"styles.scss","sourcesContent":[".list{list-style-type:none;line-height:1.6;margin:.875rem 0}.list li{display:flex;align-items:flex-start}.list li:before{content:\"•\";font-size:2rem;line-height:1.6;padding:0 1rem;max-height:1.6rem;display:flex;align-items:center}.list i{color:#17f3c7}.list b,.list strong{font-weight:500}"]}]);

// Exports
exports.locals = {
	"list": "_2zdV98WE3wMcnmkFqcpRI7"
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1bbDNGd2_d2JQ2MJ5SAmT8{background-color:#fff;padding:calc(2 * 1rem)}@media(min-width: 760px){._1bbDNGd2_d2JQ2MJ5SAmT8{padding:1.5rem}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,qBAAqB,CAAC,sBAAsB,CAAC,yBAAyB,yBAAM,cAAc,CAAC","file":"styles.scss","sourcesContent":[".card{background-color:#fff;padding:calc(2 * 1rem)}@media(min-width: 760px){.card{padding:1.5rem}}"]}]);

// Exports
exports.locals = {
	"card": "_1bbDNGd2_d2JQ2MJ5SAmT8"
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/boat-top.be28f0a8.jpg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/door-blue.29f81655.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pattern-green.f0ecb216.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pattern-grey.0f9b89ca.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pattern-round-grey.dfa754f2.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._21fzuzabPjQr_IpxvHHPbj{padding:0 .5rem}._21fzuzabPjQr_IpxvHHPbj>svg path{color:#17f3c7}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,eAAe,CAAC,kCAAe,aAAa","file":"styles.scss","sourcesContent":[".more{padding:0 .5rem}.more>svg path{color:#17f3c7}"]}]);

// Exports
exports.locals = {
	"more": "_21fzuzabPjQr_IpxvHHPbj"
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1MTi3XVO0PwKlx8pHb70qO{padding:0 .5rem}._1MTi3XVO0PwKlx8pHb70qO>svg path{color:#17f3c7}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,eAAe,CAAC,kCAAe,aAAa","file":"styles.scss","sourcesContent":[".less{padding:0 .5rem}.less>svg path{color:#17f3c7}"]}]);

// Exports
exports.locals = {
	"less": "_1MTi3XVO0PwKlx8pHb70qO"
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, ".F-zj_cTDpf7aGO7CGSoJA{font-family:\"Reenie Beanie\",cursive;font-size:40px;font-style:italic;font-weight:500;color:#222;width:100%;text-align:center;display:block}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,uBAAM,mCAAmC,CAAC,cAAc,CAAC,iBAAiB,CAAC,eAAe,CAAC,UAAU,CAAC,UAAU,CAAC,iBAAiB,CAAC,aAAa","file":"styles.scss","sourcesContent":[".logo{font-family:\"Reenie Beanie\",cursive;font-size:40px;font-style:italic;font-weight:500;color:#222;width:100%;text-align:center;display:block}"]}]);

// Exports
exports.locals = {
	"logo": "F-zj_cTDpf7aGO7CGSoJA"
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._3gkvqWrKofkjy1DPCJhvqv{height:20px;max-height:20px;line-height:20px;width:100%;text-align:center;font-size:.875rem}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,WAAW,CAAC,eAAe,CAAC,gBAAgB,CAAC,UAAU,CAAC,iBAAiB,CAAC,iBAAiB","file":"styles.scss","sourcesContent":[".footer{height:20px;max-height:20px;line-height:20px;width:100%;text-align:center;font-size:.875rem}"]}]);

// Exports
exports.locals = {
	"footer": "_3gkvqWrKofkjy1DPCJhvqv"
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "._1Kh8hB4nQHOI0uMOmc6VSt{font-family:\"Raleway\",sans-serif !important;background-color:#e3e3e3 !important;display:flex !important;align-items:center !important;padding:1.5rem !important}", "",{"version":3,"sources":["consent.scss"],"names":[],"mappings":"AAAA,yBAAQ,2CAA2C,CAAC,mCAAmC,CAAC,uBAAuB,CAAC,6BAA6B,CAAC,yBAAyB","file":"consent.scss","sourcesContent":[".banner{font-family:\"Raleway\",sans-serif !important;background-color:#e3e3e3 !important;display:flex !important;align-items:center !important;padding:1.5rem !important}"]}]);

// Exports
exports.locals = {
	"banner": "_1Kh8hB4nQHOI0uMOmc6VSt"
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
__webpack_require__(96);
module.exports = __webpack_require__(103);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(95)["default"];

var _require = __webpack_require__(64),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-css-modules",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(64),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(97),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);














Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 70))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(70);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Home",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/Home */).then(__webpack_require__.bind(null, 71))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(71);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Home";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/Home';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Service",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/Service */).then(__webpack_require__.bind(null, 72))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Service');
  },
  resolve: function resolve() {
    return /*require.resolve*/(72);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Service";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/Service';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/About",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/About */).then(__webpack_require__.bind(null, 73))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(73);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/About";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/About';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Contact",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/Contact */).then(__webpack_require__.bind(null, 74))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(74);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Contact";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/Contact';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/English",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/English */).then(__webpack_require__.bind(null, 75))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/English');
  },
  resolve: function resolve() {
    return /*require.resolve*/(75);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/English";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/English'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404': t_0,
  '__react_static_root__/src/pages/Home': t_1,
  '__react_static_root__/src/pages/Service': t_2,
  '__react_static_root__/src/pages/About': t_3,
  '__react_static_root__/src/pages/Contact': t_4,
  '__react_static_root__/src/pages/English': t_5
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(53);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 33,
	"./": 33,
	"./index": 33,
	"./index.js": 33
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 100;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(52);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(65);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(66);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(67);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(25);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(68);

var _interopRequireWildcard = __webpack_require__(69);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(104);

var _Suspense = _interopRequireDefault(__webpack_require__(105));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(106)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("/home/runner/work/mariecavillon.github.io/mariecavillon.github.io/site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(69);

var _interopRequireDefault = __webpack_require__(68);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(26));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(24));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);




/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  };

  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(107)(module)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pencil-heads.2598f457.jpg";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// Module
exports.push([module.i, "html{background-color:#fff}*{font-family:\"Raleway\",sans-serif;padding:0;margin:0;text-decoration:none;box-sizing:border-box;color:#222;font-weight:300}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}", "",{"version":3,"sources":["main.scss"],"names":[],"mappings":"AAAA,KAAK,qBAAqB,CAAC,EAAE,gCAAgC,CAAC,SAAS,CAAC,QAAQ,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,UAAU,CAAC,eAAe,CAAC,MAAM,eAAe,CAAC,aAAa,WAAW,CAAC,oDAAoD,UAAU,CAAC,YAAY","file":"main.scss","sourcesContent":["html{background-color:#fff}*{font-family:\"Raleway\",sans-serif;padding:0;margin:0;text-decoration:none;box-sizing:border-box;color:#222;font-weight:300}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}"]}]);



/***/ })
/******/ ]);
});
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Fredoka', cursive;\n      /* border: solid 2px pink; */\n  }\n\n\n\n  :root {\n      --cell-size: 3vw;\n  }\n\n  body {\n      background-color: rgb(229, 231, 235);\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      height: 100vh;\n  }\n\n  .footer {\n      display: flex;\n      justify-content: center;\n      padding: 1rem;\n  }\n\n  button {\n      border: none;\n      padding: 1rem;\n      font-weight: 700;\n      font-size: 3rem;\n      width: 100%;\n      cursor: pointer;\n  }\n\n  button:hover {\n      background-color: cadetblue;\n  }\n\n\n  .main {\n      display: flex;\n      gap: 5rem;\n  }\n\n  .winner,\n  .entry {\n      padding: 2rem;\n      margin: auto;\n      font-size: 4rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 2rem;\n      max-height: none;\n\n  }\n\n  .entry {\n      scale: 0.6;\n  }\n\n\n  .dock-wrapper {\n      display: flex;\n      gap: 2rem;\n  }\n\n  .dock {\n      display: flex;\n      gap: 3rem;\n      justify-content: flex-end;\n      align-items: center;\n      flex-direction: column;\n      width: calc(6 * var(--cell-size));\n\n  }\n\n  .horizontal {\n      display: flex;\n  }\n\n  .draggable {\n      flex: 0 0 auto;\n      cursor: grab;\n  }\n\n  .hold {\n      /* border: 1px solid black; */\n      opacity: 0.7;\n  }\n\n\n  .dragged-over {\n      background-color: cornflowerblue;\n  }\n\n  .invisible {\n      display: none;\n  }\n\n  .gameboard {\n      width: calc(var(--cell-size)*10);\n      height: calc(var(--cell-size)*10);\n      display: flex;\n      flex-wrap: wrap-reverse;\n      border-collapse: collapse;\n      border: 0.5px solid black;\n      box-sizing: content-box;\n\n  }\n\n  .cell {\n      border: 0.5px solid black;\n      width: var(--cell-size);\n      height: var(--cell-size);\n      font-size: calc(var(--cell-size)*0.7);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 1000;\n      font-size: 2em;\n      /* text-align: center; */\n      /* align-items: center; */\n  }\n\n\n  .cell+.mouseover {\n      /* background-color: rgb(175, 175, 175); */\n      border: 1px solid black;\n  }\n\n  .ship {\n      background-color: chartreuse;\n  }\n\n  .shot {\n      background-color: lightskyblue;\n  }\n\n  .viable {\n      background-color: lightgreen;\n  }\n\n  .title {\n      font-size: 5rem;\n      font-weight: 500;\n      padding: 2rem;\n\n  }\n\n  .flex-ver {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"EAEE;MACI,SAAS;MACT,UAAU;MACV,sBAAsB;MACtB,+BAA+B;MAC/B,4BAA4B;EAChC;;;;EAIA;MACI,gBAAgB;EACpB;;EAEA;MACI,oCAAoC;MACpC,aAAa;MACb,sBAAsB;MACtB,8BAA8B;MAC9B,mBAAmB;MACnB,aAAa;EACjB;;EAEA;MACI,aAAa;MACb,uBAAuB;MACvB,aAAa;EACjB;;EAEA;MACI,YAAY;MACZ,aAAa;MACb,gBAAgB;MAChB,eAAe;MACf,WAAW;MACX,eAAe;EACnB;;EAEA;MACI,2BAA2B;EAC/B;;;EAGA;MACI,aAAa;MACb,SAAS;EACb;;EAEA;;MAEI,aAAa;MACb,YAAY;MACZ,eAAe;MACf,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,SAAS;MACT,gBAAgB;;EAEpB;;EAEA;MACI,UAAU;EACd;;;EAGA;MACI,aAAa;MACb,SAAS;EACb;;EAEA;MACI,aAAa;MACb,SAAS;MACT,yBAAyB;MACzB,mBAAmB;MACnB,sBAAsB;MACtB,iCAAiC;;EAErC;;EAEA;MACI,aAAa;EACjB;;EAEA;MACI,cAAc;MACd,YAAY;EAChB;;EAEA;MACI,6BAA6B;MAC7B,YAAY;EAChB;;;EAGA;MACI,gCAAgC;EACpC;;EAEA;MACI,aAAa;EACjB;;EAEA;MACI,gCAAgC;MAChC,iCAAiC;MACjC,aAAa;MACb,uBAAuB;MACvB,yBAAyB;MACzB,yBAAyB;MACzB,uBAAuB;;EAE3B;;EAEA;MACI,yBAAyB;MACzB,uBAAuB;MACvB,wBAAwB;MACxB,qCAAqC;MACrC,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,iBAAiB;MACjB,cAAc;MACd,wBAAwB;MACxB,yBAAyB;EAC7B;;;EAGA;MACI,0CAA0C;MAC1C,uBAAuB;EAC3B;;EAEA;MACI,4BAA4B;EAChC;;EAEA;MACI,8BAA8B;EAClC;;EAEA;MACI,4BAA4B;EAChC;;EAEA;MACI,eAAe;MACf,gBAAgB;MAChB,aAAa;;EAEjB;;EAEA;MACI,aAAa;MACb,sBAAsB;MACtB,mBAAmB;EACvB","sourcesContent":["  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap');\n\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Fredoka', cursive;\n      /* border: solid 2px pink; */\n  }\n\n\n\n  :root {\n      --cell-size: 3vw;\n  }\n\n  body {\n      background-color: rgb(229, 231, 235);\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      height: 100vh;\n  }\n\n  .footer {\n      display: flex;\n      justify-content: center;\n      padding: 1rem;\n  }\n\n  button {\n      border: none;\n      padding: 1rem;\n      font-weight: 700;\n      font-size: 3rem;\n      width: 100%;\n      cursor: pointer;\n  }\n\n  button:hover {\n      background-color: cadetblue;\n  }\n\n\n  .main {\n      display: flex;\n      gap: 5rem;\n  }\n\n  .winner,\n  .entry {\n      padding: 2rem;\n      margin: auto;\n      font-size: 4rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 2rem;\n      max-height: none;\n\n  }\n\n  .entry {\n      scale: 0.6;\n  }\n\n\n  .dock-wrapper {\n      display: flex;\n      gap: 2rem;\n  }\n\n  .dock {\n      display: flex;\n      gap: 3rem;\n      justify-content: flex-end;\n      align-items: center;\n      flex-direction: column;\n      width: calc(6 * var(--cell-size));\n\n  }\n\n  .horizontal {\n      display: flex;\n  }\n\n  .draggable {\n      flex: 0 0 auto;\n      cursor: grab;\n  }\n\n  .hold {\n      /* border: 1px solid black; */\n      opacity: 0.7;\n  }\n\n\n  .dragged-over {\n      background-color: cornflowerblue;\n  }\n\n  .invisible {\n      display: none;\n  }\n\n  .gameboard {\n      width: calc(var(--cell-size)*10);\n      height: calc(var(--cell-size)*10);\n      display: flex;\n      flex-wrap: wrap-reverse;\n      border-collapse: collapse;\n      border: 0.5px solid black;\n      box-sizing: content-box;\n\n  }\n\n  .cell {\n      border: 0.5px solid black;\n      width: var(--cell-size);\n      height: var(--cell-size);\n      font-size: calc(var(--cell-size)*0.7);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 1000;\n      font-size: 2em;\n      /* text-align: center; */\n      /* align-items: center; */\n  }\n\n\n  .cell+.mouseover {\n      /* background-color: rgb(175, 175, 175); */\n      border: 1px solid black;\n  }\n\n  .ship {\n      background-color: chartreuse;\n  }\n\n  .shot {\n      background-color: lightskyblue;\n  }\n\n  .viable {\n      background-color: lightgreen;\n  }\n\n  .title {\n      font-size: 5rem;\n      font-weight: 500;\n      padding: 2rem;\n\n  }\n\n  .flex-ver {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");


function Gameboard() {
  const board = [];
  const ships = [];
  function cellFactory() {
    return {
      wasHit: false,
      hasShip: false,
      ship: null,
      symbol: "&#8226;", // bullet point if cells has no ship
    };
  }
  for (let i = 0; i < 10; i++) {
    board.push([]);
    for (let j = 0; j < 10; j++) {
      board[i][j] = cellFactory();
    }
  }
  const methods = {
    get board() {
      return board;
    },
    hasShipAt: (x, y) => board[x][y].hasShip,
    placeShip: (length, cords, isHorizontal) => {
      const x = parseInt(cords[0], 10);
      const y = parseInt(cords[1], 10);
      const cells = [];
      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
      const shipCords = [];
      if (!isHorizontal) {
        for (let i = 0; i < length; i++) {
          cells.push(board[x + i][y]);
          shipCords.push([x + i, y]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          cells.push(board[x][y + i]);
          shipCords.push([x, y + i]);
        }
      }
      newShip.setCords(shipCords);
      cells.forEach((checkedCell) => {
        if (!checkedCell.hasShip) {
          checkedCell.ship = newShip;
          checkedCell.hasShip = true;
          checkedCell.symbol = "&#10005;";
        }
      });
      ships.push(newShip);
    },
    receiveAttack: (x, y) => {
      const attackedCell = board[x][y];
      if (attackedCell.wasHit) return "Try another cell.";
      if (attackedCell.hasShip) {
        attackedCell.wasHit = true;
        attackedCell.ship.hit();
        return attackedCell;
      }
      attackedCell.wasHit = true;
      return attackedCell;
    },
    isGameOver: (boardCells) => {
      let areSunk = 0;
      ships.forEach((checkedShip) => {
        if (checkedShip.isSunk()) {
          boardCells.forEach((cell) => {
            const cellID = [
              parseInt(cell.dataset.xy[0], 10),
              parseInt(cell.dataset.xy[1], 10),
            ];
            checkedShip.cords.forEach((cord) => {
              if (
                cord.some(
                  (cords) => cords[0] === cellID[0] && cords[1] === cellID[1]
                )
              ) {
                cell.classList.add("shot");
              }
            });
          });
          areSunk++;
        }
      });
      return areSunk === ships.length;
    },
  };
  return Object.create(methods);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);
// module.exports = Gameboard;


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Player(isPlayerAComputer) {
  if (typeof isPlayerAComputer !== "boolean") {
    throw new Error("Invalid argument type. Expected boolean.");
  }
  const isComputer = isPlayerAComputer;
  // const hitCords = [];
  const methods = {
    get isComputer() {
      return isComputer;
    },
    name: () => (isComputer ? "Computer" : "Player"),
    move: (board, cords) => {
      const x = cords[0];
      const y = cords[1];
      // hitCords.push([x, y]);
      return board.receiveAttack(x, y);
    },
    randomMove: (board) => {
      const random = () => Math.floor(Math.random() * 10);
      while (true) {
        const x = random();
        const y = random();
        const checkedCell = board.board[x][y];
        if (checkedCell.wasHit) {
          continue;
        }
        return [`${x}${y}`, methods.move(board, [x, y])];
      }
    },
  };
  return Object.create(methods);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);
// module.exports = Player;


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Ship(newLength) {
  const length = newLength;
  let lives = newLength;
  const cords = [];
  const methods = {
    get length() {
      return length;
    },
    hit: () => {
      lives--;
      return lives;
    },
    isSunk: () => lives < 1,
    setCords: (newCords) => {
      cords.push(newCords);
    },
    get cords() {
      return cords;
    },
  };
  const obj = Object.create(methods);
  return obj;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);
// module.exports = Ship;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/main */ "./src/views/main.js");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/gameboard */ "./src/factories/gameboard.js");
/* harmony import */ var _views_utils_renderBoats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/utils/renderBoats */ "./src/views/utils/renderBoats.js");
/* harmony import */ var _views_utils_gameLoop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/utils/gameLoop */ "./src/views/utils/gameLoop.js");
/* harmony import */ var _views_entry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/entry */ "./src/views/entry.js");
/* harmony import */ var _views_utils_placeRandom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/utils/placeRandom */ "./src/views/utils/placeRandom.js");









function play() {
  (0,_views_main__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const computer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
  const computerBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const computerDOM = document.querySelector(".computer");
  //   computerBoard.placeShip(3, [5, 5], false);
  const player = (0,_factories_player__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const playerBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const playerDOM = document.querySelector(".player");
  (0,_views_utils_placeRandom__WEBPACK_IMPORTED_MODULE_7__["default"])(computerBoard);

  (0,_views_entry__WEBPACK_IMPORTED_MODULE_6__["default"])(playerBoard).showModal();
  //   playerBoard.placeShip(2, [3, 1], false);
  //   playerBoard.placeShip(1, [9, 9], true);
  //   playerBoard.placeShip(5, [3, 6], true);
  //   playerBoard.placeShip(3, [7, 1], false);
  (0,_views_utils_gameLoop__WEBPACK_IMPORTED_MODULE_5__["default"])(player, playerBoard, computer, computerBoard);
}
// while (true) {
play();
// }
// const newGameBTN = document.querySelector(".new-game-btn");
// newGameBTN.onclick = () => {
//   play();
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (play);
/*
Game render 2 empty boards
player places his ships
click start button and at his moment computer places ships randomly on his board
Main loop while(!isGameOver){
    player makes move:
    if attack returns null 
    - it end of the turn
    - places big dot in cell
    if attack return 'Try another cell' player makes move
    if attack returns ship:
    - ship receives hit
    - cell content is cross
    - player makes move
    -if ship sunks bg color red and check for game over
}
*/


/***/ }),

/***/ "./src/views/board.js":
/*!****************************!*\
  !*** ./src/views/board.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/gameboard */ "./src/factories/gameboard.js");


function createBoard(player) {
  const board = document.createElement("div");
  board.className = `gameboard ${player}`;

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    let xy = i.toString(10);
    if (xy.length === 1) {
      xy = `0${xy}`;
    }
    cell.setAttribute("data-xy", xy);
    cell.onmouseenter = () => {
      cell.classList.add("mouseover");
    };
    cell.onmouseout = () => {
      cell.classList.remove("mouseover");
    };
    if (player === "computer") {
      cell.onclick = () => {};
    }
  }

  return board;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);


/***/ }),

/***/ "./src/views/entry.js":
/*!****************************!*\
  !*** ./src/views/entry.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/views/board.js");
/* harmony import */ var _utils_renderBoats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/renderBoats */ "./src/views/utils/renderBoats.js");
/* harmony import */ var _utils_shipsData2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shipsData2 */ "./src/views/utils/shipsData2.js");




function entry(playerBoard) {
  const main = document.querySelector(".main");
  const entryScreen = document.createElement("dialog");
  const box = document.createElement("div");
  box.classList.add("dock-wrapper");
  entryScreen.classList.add("entry");
  const dock = document.createElement("div");
  dock.classList.add("dock");
  const text = document.createElement("div");
  const startBTN = document.createElement("button");
  startBTN.textContent = "Start game";
  text.innerHTML = "Place your ships";
  const board = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board.classList.add("entry-board");
  const cells = board.querySelectorAll(".cell");
  const viablePlacedShips = [];

  function dropShip(shipsArr) {
    if (shipsArr.length === 0) {
      startBTN.classList.add("viable");
      startBTN.onclick = () => {
        viablePlacedShips.forEach((place) => {
          playerBoard.placeShip(place.length, place.cords, place.horizontal);
        });
        const playerDOM = document.querySelector(".player");
        (0,_utils_renderBoats__WEBPACK_IMPORTED_MODULE_1__["default"])(playerBoard, playerDOM);
        entryScreen.close();
        main.removeChild(entryScreen);
      };
      return;
    }
    const ship = document.createElement("div");
    for (let i = 0; i < shipsArr[0].size; i++) {
      const node = document.createElement("div");
      node.className = "cell ship";
      ship.appendChild(node);
    }
    const rotateBTN = document.createElement("button");
    rotateBTN.textContent = "Rotate";
    rotateBTN.onclick = () => {
      ship.classList.toggle("horizontal");
    };
    dock.append(ship, rotateBTN);
    cells.forEach((cell) => {
      cell.onclick = () => {
        let maxX = 9;
        let maxY = 9;
        if (!ship.classList.contains("horizontal")) {
          maxX -= shipsArr[0].size;
        } else {
          maxY -= shipsArr[0].size;
        }
        if (cell.dataset.xy[0] <= maxX + 1 && cell.dataset.xy[1] <= maxY + 1) {
          const cordsToCheck = [];
          for (let i = 0; i < shipsArr[0].size; i++) {
            if (ship.classList.contains("horizontal")) {
              cordsToCheck.push(parseInt(cell.dataset.xy, 10) + i);
            } else {
              cordsToCheck.push(parseInt(cell.dataset.xy, 10) + 10 * i);
            }
          }
          const mappedCords = cordsToCheck.map((cord) => {
            const string = cord.toString();
            if (string.length === 1) {
              return `0${string}`;
            }
            return string;
          });
          if (
            mappedCords.every((cord) => {
              const node = board.querySelector(`[data-xy="${cord}"]`);
              return !node.classList.contains("ship");
            })
          ) {
            mappedCords.forEach((cord) => {
              const node = board.querySelector(`[data-xy="${cord}"]`);
              node.classList.add("ship");
            });
            dock.removeChild(ship);
            dock.removeChild(rotateBTN);
            const newShipData = {
              length: shipsArr[0].size,
              cords: [cell.dataset.xy[0], cell.dataset.xy[1]],
              horizontal: ship.classList.contains("horizontal"),
            };
            viablePlacedShips.push(newShipData);
            shipsArr[0].count = shipsArr[0].count - 1;
            if (shipsArr[0].count < 1) {
              dropShip(shipsArr.splice(1, shipsArr.length - 1));
            } else {
              dropShip([...shipsArr]);
            }
          }
        }
      };
    });
  }
  dropShip([..._utils_shipsData2__WEBPACK_IMPORTED_MODULE_2__["default"]]);

  /*
dropship(shipsData){
dock renders single ship from array.
this ship is stored in var ship to place.
click board tryes to place it{
    max cords = take length of ship and subtract it from {
        if ship isHorizontal > width-length
        else > height - length
    }
    if clicked cell cords exceeds max cords then no effect
    else {
        check if clicked cell+ another cells along the way have class ship
        if they dont, fire placeShip function
    }
}
}

*/

  box.append(dock, board);
  entryScreen.append(text, box, startBTN);
  main.append(entryScreen);

  return entryScreen;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entry);


/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/views/board.js");


function createMain() {
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");
  const footer = document.querySelector("footer");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const leftName = document.createElement("h1");
  const rightName = document.createElement("h1");
  const title = document.createElement("h1");

  leftName.textContent = "Your board";
  rightName.textContent = "Enemy's board";
  title.textContent = "Battleships";
  footer.innerHTML =
    "<p>Created by <a href='https://github.com/Mlodzieniak/battleship'>@Mlodzieniak</a> for OdinProjects</p>";
  title.classList.add("title");
  left.appendChild(leftName);
  left.appendChild((0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])("player"));
  right.appendChild(rightName);
  right.appendChild((0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])("computer"));
  left.classList.add("flex-ver");
  right.classList.add("flex-ver");
  header.append(title);
  main.append(left, right);
  return main;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);


/***/ }),

/***/ "./src/views/utils/checkWinner.js":
/*!****************************************!*\
  !*** ./src/views/utils/checkWinner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _winner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../winner */ "./src/views/winner.js");


function checkWinner(player, enemyBoard, boardCells) {
  if (enemyBoard.isGameOver(boardCells)) {
    (0,_winner__WEBPACK_IMPORTED_MODULE_0__["default"])(player).showModal();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWinner);


/***/ }),

/***/ "./src/views/utils/gameLoop.js":
/*!*************************************!*\
  !*** ./src/views/utils/gameLoop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/ship */ "./src/factories/ship.js");
/* harmony import */ var _checkWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkWinner */ "./src/views/utils/checkWinner.js");



function gameLoop(player, playerBoard, computer, computerBoard) {
  const computerCells = document.querySelectorAll(".computer>.cell");
  const playerCells = document.querySelectorAll(".player>.cell");

  computerCells.forEach((cell) => {
    cell.onclick = (event) => {
      const x = event.target.dataset.xy[0];
      const y = event.target.dataset.xy[1];
      const myAttack = player.move(computerBoard, [x, y]);
      if (myAttack !== "Try another cell.") {
        cell.innerHTML = myAttack.symbol;
        if (!(0,_checkWinner__WEBPACK_IMPORTED_MODULE_1__["default"])(player, computerBoard, computerCells)) {
          const comAttack = computer.randomMove(playerBoard);
          const comTarget = Array.from(playerCells).find(
            (cell) => cell.dataset.xy === comAttack[0]
          );
          comTarget.innerHTML = comAttack[1].symbol;
          if ((0,_checkWinner__WEBPACK_IMPORTED_MODULE_1__["default"])(computer, playerBoard, playerCells)) return;
        } else return;
      }
    };
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);

/*
Game render 2 empty boards
player places his ships
click start button and at his moment computer places ships randomly on his board
Main loop while(!isGameOver){
    player makes move:
    if attack returns null 
    - it end of the turn
    - places big dot in cell
    if attack return 'Try another cell' player makes move
    if attack returns ship:
    - ship receives hit
    - cell content is cross
    - player makes move
    -if ship sunks bg color red and check for game over
}
*/


/***/ }),

/***/ "./src/views/utils/placeRandom.js":
/*!****************************************!*\
  !*** ./src/views/utils/placeRandom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipsData */ "./src/views/utils/shipsData.js");
/* harmony import */ var _renderBoats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBoats */ "./src/views/utils/renderBoats.js");



function placeRandom(gameboard) {
  const computerDOM = document.querySelector(".computer");

  function singleShip(shipsList) {
    if (!shipsList.length) {
      return;
    }
    let maxX = 10;
    let maxY = 10;
    const isHorizontal = Math.floor(Math.random() * 2);
    if (!isHorizontal) {
      maxX -= shipsList[0].size;
    } else {
      maxY -= shipsList[0].size;
    }
    while (true) {
      const cordsToCheck = [
        Math.floor(Math.random() * maxX),
        Math.floor(Math.random() * maxY),
      ];
      const results = [];

      for (let i = 0; i < shipsList[0].size; i++) {
        if (!isHorizontal) {
          results.push(
            !gameboard.hasShipAt(cordsToCheck[0] + i, cordsToCheck[1])
          );
        } else {
          results.push(
            !gameboard.hasShipAt(cordsToCheck[0], cordsToCheck[1] + i)
          );
        }
      }
      if (results.every((result) => result)) {
        gameboard.placeShip(shipsList[0].size, cordsToCheck, isHorizontal);
        shipsList[0].count = shipsList[0].count - 1;
        if (shipsList[0].count < 1) {
          singleShip(shipsList.splice(1, shipsList.length - 1));
        } else {
          singleShip([...shipsList]);
        }
        break;
      }
    }
  }
  singleShip([..._shipsData__WEBPACK_IMPORTED_MODULE_0__["default"]]);

  // renderBoats(gameboard, computerDOM);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeRandom);


/***/ }),

/***/ "./src/views/utils/renderBoats.js":
/*!****************************************!*\
  !*** ./src/views/utils/renderBoats.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderBoats(boardObj, boardDOM) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = boardObj.board[i][j];
      if (cell.hasShip) {
        const xy = i.toString() + j.toString();
        const target = boardDOM.querySelector(`[data-xy="${xy}"]`);
        target.classList.add("ship");
      }
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoats);


/***/ }),

/***/ "./src/views/utils/shipsData.js":
/*!**************************************!*\
  !*** ./src/views/utils/shipsData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipsData = [
  {
    name: "Carrier",
    size: 5,
    count: 1,
  },
  {
    name: "Battleship",
    size: 4,
    count: 1,
  },
  {
    name: "Cruiser",
    size: 3,
    count: 1,
  },
  {
    name: "Destroyer",
    size: 2,
    count: 2,
  },
  {
    name: "Submarine",
    size: 1,
    count: 2,
  },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipsData);


/***/ }),

/***/ "./src/views/utils/shipsData2.js":
/*!***************************************!*\
  !*** ./src/views/utils/shipsData2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipsData = [
  {
    name: "Carrier",
    size: 5,
    count: 1,
  },
  {
    name: "Battleship",
    size: 4,
    count: 1,
  },
  {
    name: "Cruiser",
    size: 3,
    count: 1,
  },
  {
    name: "Destroyer",
    size: 2,
    count: 2,
  },
  {
    name: "Submarine",
    size: 1,
    count: 2,
  },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipsData);


/***/ }),

/***/ "./src/views/winner.js":
/*!*****************************!*\
  !*** ./src/views/winner.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


function winner(player) {
  const main = document.querySelector(".main");
  const box = document.createElement("dialog");
  box.classList.add("winner");
  const text = document.createElement("div");
  text.textContent = `${player.name()} wins the game.`;
  const newGameBTN = document.createElement("button");
  newGameBTN.classList.add("new-game-btn");
  newGameBTN.textContent = "New game";
  newGameBTN.onclick = () => {
    box.close();
    main.innerHTML = "";
    (0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
  };
  box.append(text, newGameBTN);
  main.appendChild(box);
  return box;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (winner);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle9f6db3d6ad1d436e7e2e.js.map
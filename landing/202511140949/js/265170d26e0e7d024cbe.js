/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/entrypoints/product/index.js":
/*!****************************************************!*\
  !*** ./src/assets/js/entrypoints/product/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/main */ \"./src/assets/js/common/main.js\");\n/* harmony import */ var _plugins_modernizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plugins/modernizr */ \"./src/assets/js/plugins/modernizr/index.js\");\n/* harmony import */ var _plugins_modernizr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugins_modernizr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_pricing_changer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/pricing-changer-index */ \"./src/assets/js/libs/pricing-changer-index.js\");\n/* harmony import */ var _libs_sourceforge_award_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/sourceforge-award.js */ \"./src/assets/js/libs/sourceforge-award.js\");\n/* harmony import */ var _libs_sourceforge_award_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_sourceforge_award_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_slashdot_award_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/slashdot-award.js */ \"./src/assets/js/libs/slashdot-award.js\");\n/* harmony import */ var _libs_slashdot_award_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_slashdot_award_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _libs_signup_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/signup-form */ \"./src/assets/js/libs/signup-form.js\");\n\n\n// import * as Swiper from '../../plugins/swiper';\n// import '../../libs/marketing-popup';\n\n\n\n\n\n\n// var swiperTestimonials = new Swiper('.swiper-container-tes', {\n// \tpagination: '.testimonials-pagination',\n// \tslidesPerView: 2,\n// \tspaceBetween: 20,\n// \tloop: true,\n// \tpaginationClickable: true,\n// \tbreakpoints: {\n// \t\t1024: {\n// \t\t\tslidesPerView: 2,\n// \t\t\tspaceBetween: 20\n// \t\t},\n// \t\t650: {\n// \t\t\tslidesPerView: 1,\n// \t\t\tspaceBetween: 0\n// \t\t}\n// \t}\n// });\n\n\n\n\n//# sourceURL=webpack://landing-page/./src/assets/js/entrypoints/product/index.js?");

/***/ }),

/***/ "./src/assets/js/libs/pricing-changer-index.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/libs/pricing-changer-index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugins_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/jquery */ \"./src/assets/js/plugins/jquery/index.js\");\n\n\n(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n\n    (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#pricing-compare-changer').change(function() {\n        if ((0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).prop('checked')) {\n            (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.annual').removeClass('selected');\n            (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.monthly').addClass('selected');\n            (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.price-change').html((0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).data('price-monthly'));\n        } else {\n            (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.monthly').removeClass('selected');\n            (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.annual').addClass('selected');\n            (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.price-change').html((0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).data('price-annual'));\n        }\n    });\n\n    (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.monthly').click(function(){\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.monthly').addClass('selected');\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.price-change').html((0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).data('price'));\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.annual').removeClass('selected');\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#pricing-compare-changer').prop('checked',true);\n    });\n\n    (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.annual').click(function(){\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.annual').addClass('selected');\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.price-change').html((0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).data('price'));\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.monthly').removeClass('selected');\n        (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#pricing-compare-changer').prop('checked',false);\n    });\n});\n\n//# sourceURL=webpack://landing-page/./src/assets/js/libs/pricing-changer-index.js?");

/***/ }),

/***/ "./src/assets/js/libs/signup-form.js":
/*!*******************************************!*\
  !*** ./src/assets/js/libs/signup-form.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugins_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/jquery */ \"./src/assets/js/plugins/jquery/index.js\");\n/* harmony import */ var _common_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/cookie.js */ \"./src/assets/js/common/cookie.js\");\n\n\n\n(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n    var formSendInProgress = false;\n\n\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input.signup-email').each(function() {\n\t\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).keyup(function() {\n\t\t\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).removeClass('field-error');\n\t\t\tif ((0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).val().length !== 0) {\n\t\t\t\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).addClass('not-empty');\n\t\t\t} else {\n\t\t\t\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).removeClass('not-empty');\n\t\t\t}\n\t\t});\n\t});\n\n\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form.signup-form-landing').submit(function(e) {\n\t\te.preventDefault();\n\t\tvar values = {};\n\t\tvar errorExist = false;\n\t\tvar signupForm = (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this);\n\t\tvar currentSignupFormInputs = signupForm.find('input')\n\t\tif (formSendInProgress) return;\n\t\tcurrentSignupFormInputs.each(function() {\n\t\t\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).removeClass('field-error');\n\t\t\tswitch (this.name.split('-')[0]) {\n\t\t\t\tcase 'email':\n\t\t\t\t\tif (!(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).val().replace(/ /g, '').match(/^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/) || (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).val().replace(/ /g, '').length > 254) {\n\t\t\t\t\t\t(0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).addClass('field-error');\n\t\t\t\t\t\tsignupForm.addClass('error');\n\t\t\t\t\t\terrorExist = true;\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t\tvalues[this.name] = (0,_plugins_jquery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).val().replace(/ /g, '');\n\n\t\t});\n\t\tif (errorExist) {\n\t\t\treturn false;\n\t\t} else {\n\t\t\tformSendInProgress = true;\n\t\t\t(0,_common_cookie_js__WEBPACK_IMPORTED_MODULE_1__.setcookie)(\"ChantyQuizExitCookie\",\"true\",365);\n\t\t\tsetTimeout( function(){\n\t\t\t\twindow.location.href = signupForm.attr('data-action-xhr')+\"?email=\" + currentSignupFormInputs.val();\n\t\t\t}  , 1000 );\n\t\t}\n    });\n    \n});\n\n//# sourceURL=webpack://landing-page/./src/assets/js/libs/signup-form.js?");

/***/ }),

/***/ "./src/assets/js/libs/slashdot-award.js":
/*!**********************************************!*\
  !*** ./src/assets/js/libs/slashdot-award.js ***!
  \**********************************************/
/***/ (function() {

eval("window.SF = window.SF || {};\n(function () {\n\n    var rootClassName = 'sf-root';\n    var roots = document.getElementsByClassName(rootClassName);\n    var name = 'Chanty';\n    var sf_id = '3086756';\n    var variant_id = 'sd';\n    var dest_url = 'https://slashdot.org/software/p/Chanty/';\n    var base_url = 'https://sourceforge.net';\n    var syndication_base = 'https://b.sf-syn.com';\n    var ratingCount = 15;\n    var iconUrl = '/s/chanty/icon';\n    var sdEnabled = 'true';\n    var avg_rating = 4.7;\n    var badgeSchemaSelector = '#badge-schema-' + sf_id;\n\n    function getSettings(el) {\n        var attrs = [\n            'badge',\n            'id',\n            'variant-id',\n            'nocdn',\n            'metadata',\n        ];\n        var res = {};\n\n        for (var x=0; x<attrs.length; x++) {\n            res[attrs[x]] = el.getAttribute('data-' + attrs[x]);\n        }\n\n        try {\n            res.referrer = top.location.href;\n        } catch (ex) {\n            // if we can't read the main site's URL, at use the (presumably) iframe's URL\n            res.referrer = window.location.href;\n        }\n\n        return res;\n    }\n\n    function badgeURL(settings) {\n        var domain = Boolean(settings.nocdn) ? base_url + '/cdn/syndication' : syndication_base;\n        var qs = settings.metadata || '';\n        if(settings['variant-id']) {\n            qs += '&variant_id=' + settings['variant-id'];\n        }\n        qs += '&r=' + settings.referrer;\n        var imgMarkup = '<img width=\"115\" height=\"115\" alt=\"'+ name +' Reviews\" src=\"' + domain + '/badge_img/' + settings.id + '/' + settings.badge + '?' + qs + '\" style=\"min-width: 60px; max-width:200px; width:100%;\">';\n        return imgMarkup;\n    }\n\n    function reviewSchemaSnippet(settings) {\n        var markup = '<script id=\"badge-schema-' + sf_id + '\" type=\"application/ld+json\">\\n' +\n            '{\\n' +\n            '  \"@context\": \"https://schema.org/\",\\n' +\n            '  \"@type\": \"SoftwareApplication\",\\n' +\n            '  \"applicationCategory\": \"BusinessApplication\",\\n' +\n            '  \"name\": \"' + name + '\",\\n' +\n            '  \"image\": \"' + base_url + iconUrl + '\",\\n' +\n            '  \"description\": \"SourceForge Software Rating\",\\n' +\n            '  \"aggregateRating\": {\\n' +\n            '    \"@type\": \"AggregateRating\",\\n' +\n            '    \"ratingValue\": \"' + avg_rating + '\",\\n' +\n            '    \"bestRating\": \"' + 5 + '\",\\n' +\n            '    \"ratingCount\": \"' + ratingCount + '\"\\n' +\n            '  }\\n' +\n            '}\\n' +\n            '</script>\\n';\n        return markup;\n    }\n\n    function getDestinationUrl(){\n        return dest_url + '?pk_campaign=badge&pk_source=vendor';\n    }\n\n    for (var i = 0; i < roots.length; i++) {\n        var r = roots[i];\n        var settings = getSettings(r);\n        var r_variant_id = settings['variant-id'] || 'sf';\n        var r_sf_id = settings.id;\n        if (! r.getAttribute('data-complete') && r_sf_id === sf_id && r_variant_id === variant_id) {\n            var html = '<a href=\"' + getDestinationUrl() + '\" target=\"_blank\">' + badgeURL(settings) + '</a>';\n            var badgeSchema = document.querySelector(badgeSchemaSelector);\n            if(sdEnabled === 'true' && ratingCount && avg_rating && r_variant_id !== 'sd' && !badgeSchema) {\n                html += reviewSchemaSnippet(settings);\n            }\n            r.innerHTML = html;\n            r.setAttribute('data-complete', true);\n        }\n    }\n})();\n\n//# sourceURL=webpack://landing-page/./src/assets/js/libs/slashdot-award.js?");

/***/ }),

/***/ "./src/assets/js/libs/sourceforge-award.js":
/*!*************************************************!*\
  !*** ./src/assets/js/libs/sourceforge-award.js ***!
  \*************************************************/
/***/ (function() {

eval("window.SF = window.SF || {};\n(function () {\n\n    var rootClassName = 'sf-root';\n    var roots = document.getElementsByClassName(rootClassName);\n    var name = 'Chanty';\n    var sf_id = '3086756';\n    var variant_id = 'sf';\n    var dest_url = 'https://sourceforge.net/software/product/Chanty/';\n    var base_url = 'https://sourceforge.net';\n    var syndication_base = 'https://b.sf-syn.com';\n\n    window.SF.syndicationError = window.SF.syndicationError || function(o){\n        // hide the root on error\n        o.parentNode.parentNode.style.display = 'none';\n    };\n\n    function getSettings(el) {\n        var attrs = [\n            'badge',\n            'id',\n            'variant-id',\n            'nocdn',\n            'metadata',\n        ];\n        var res = {};\n\n        for (var x=0; x<attrs.length; x++) {\n            res[attrs[x]] = el.getAttribute('data-' + attrs[x]);\n        }\n\n        try {\n            res.referrer = top.location.href;\n        } catch (ex) {\n            // if we can't read the main site's URL, at use the (presumably) iframe's URL\n            res.referrer = window.location.href;\n        }\n\n        return res;\n    }\n\n    function badgeURL(settings) {\n        var domain = Boolean(settings.nocdn) ? base_url + '/cdn/syndication' : syndication_base;\n        var qs = settings.metadata || '';\n        if(settings['variant-id']) {\n            qs += '&variant_id=' + settings['variant-id'];\n        }\n        qs += '&r=' + settings.referrer;\n        var imgMarkup = '<img width=\"115\" height=\"115\" alt=\"'+ name +' Reviews\" src=\"' + domain + '/badge_img/' + settings.id + '/' + settings.badge + '?' + qs + '\" onerror=\"SF.syndicationError(this)\" style=\"min-width: 60px; max-width:200px; width:100%;\">';\n        return imgMarkup;\n    }\n\n    function getDestinationUrl(){\n        return dest_url + '?pk_campaign=badge&pk_source=vendor';\n    }\n\n    for (var i = 0; i < roots.length; i++) {\n        var r = roots[i];\n        var settings = getSettings(r);\n        var r_variant_id = settings['variant-id'] || 'sf';\n        var r_sf_id = settings.id;\n        if (! r.getAttribute('data-complete') && r_sf_id === sf_id && r_variant_id === variant_id) {\n            var html = '<a href=\"' + getDestinationUrl() + '\" target=\"_blank\" rel=\"noreferrer\">' + badgeURL(settings) + '</a>';\n            r.innerHTML = html;\n            r.setAttribute('data-complete', true);\n        }\n    }\n})();\n\n//# sourceURL=webpack://landing-page/./src/assets/js/libs/sourceforge-award.js?");

/***/ }),

/***/ "./src/assets/js/plugins/modernizr/index.js":
/*!**************************************************!*\
  !*** ./src/assets/js/plugins/modernizr/index.js ***!
  \**************************************************/
/***/ (function() {

eval("/*! modernizr 3.6.0 (Custom Build) | MIT *\n * https://modernizr.com/download/?-setclasses !*/\n!function(n,e,s){function o(n,e){return typeof n===e}function a(){var n,e,s,a,i,l,r;for(var c in f)if(f.hasOwnProperty(c)){if(n=[],e=f[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,\"function\")?e.fn():e.fn,i=0;i<n.length;i++)l=n[i],r=l.split(\".\"),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),t.push((a?\"\":\"no-\")+r.join(\"-\"))}}function i(n){var e=r.className,s=Modernizr._config.classPrefix||\"\";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp(\"(^|\\\\s)\"+s+\"no-js(\\\\s|$)\");e=e.replace(o,\"$1\"+s+\"js$2\")}Modernizr._config.enableClasses&&(e+=\" \"+s+n.join(\" \"+s),c?r.className.baseVal=e:r.className=e)}var t=[],f=[],l={_version:\"3.6.0\",_config:{classPrefix:\"\",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){f.push({name:n,fn:e,options:s})},addAsyncTest:function(n){f.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var r=e.documentElement,c=\"svg\"===r.nodeName.toLowerCase();a(),i(t),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);\n\n\n//# sourceURL=webpack://landing-page/./src/assets/js/plugins/modernizr/index.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklanding_page"] = self["webpackChunklanding_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_js_plugins_jquery_index_js","src_assets_js_common_main_js"], function() { return __webpack_require__("./src/assets/js/entrypoints/product/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
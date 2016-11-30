/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*! app.js © yamoo9.net, 2016 */

	/////////////////////////
	// webpack Sass Loader //
	/////////////////////////
	// require('../sass/style.sass');
	// import '../sass/style.sass';


	// // ----------------------------------------------------

	// // Front-End Develop
	// // (function(global){
	// //   'use strict';

	// // })(this);

	// //////////////////////////////////
	// // ES6 모듈 로드 방식
	// // import './modules/currency';
	// //////////////////////////////////

	// // ----------------------------------------------------

	// /////////////////////////
	// // Server-Side Develop //
	// /////////////////////////

	// // Node.js 내장(기본) 모듈
	// // CommonJS 진영의 모듈 로더 방법
	// // let path = require('path');
	// // import path from 'path';
	// // console.log( path.join(__dirname, 'css') );

	// // ----------------------------------------------------

	// /////////////////////
	// // 외부 파일 모듈 로드 //
	// /////////////////////
	// // let currency = require('./modules/currency');
	// import currency from './modules/currency';
	// // let result   = currency(3241000);

	// ////////////////
	// // DOM Script //
	// ////////////////
	// // let body    = document.querySelector('body');
	// // let new_div = document.createElement('div');
	// // body.appendChild(new_div);
	// // new_div.innerHTML = result;

	// // ----------------------------------------------------

	// ////////////
	// // jQuery //
	// ////////////
	// // let $ = require('jquery');
	// import jQuery as $ from 'jquery';
	// // $('div').append(`<p>using jQuery: ${result}</p>`);

	// let $currencies = $('[data-currency]');
	// $.each($currencies, (idx)=>{
	//   let $currency = $currencies.eq(idx);
	//   let sign      = $currency.data('currency');
	//   let result    = sign === '' ? currency($currency.text()) : currency($currency.text(), sign);
	//   $currency.text( result );
	// });

	// // Class 문법 사용
	// class AppButton extends HTMLButtonElement {
	//   constructor(selector) {
	//     super();
	//     this.selector = selector;
	//   }
	//   getSelector() {
	//     return this.selector;
	//   }
	// }



	// ----------------------------------------------------

	// webpack - module bundler

	/////////
	// CLI //
	/////////
	// webpack {entry.js} {bundle.js}
	// webpack {entry.js} {bundle.js} -p // 압축
	// webpack {entry.js} {bundle.js} -w // 관찰
	// webpack {entry.js} {bundle.js} -d // 소스맵


	// ----------------------------------------------------

	let Carousel = __webpack_require__(1);

	console.log(typeof Carousel);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ES6 Class 문법을 사용하여 클래스 정의
	var toString = Object.prototype.toString;

	var Carousel = function () {
	  function Carousel() {
	    _classCallCheck(this, Carousel);
	  }

	  _createClass(Carousel, [{
	    key: "consturctor",
	    value: function consturctor(selector, options) {
	      this.el = document.querySelector(selector);
	    }
	  }, {
	    key: "settingControls",
	    value: function settingControls() {}
	  }, {
	    key: "activeContent",
	    value: function activeContent() {}
	  }, {
	    key: "nextContent",
	    value: function nextContent() {}
	  }, {
	    key: "prevContent",
	    value: function prevContent() {}
	  }], [{
	    key: "type",
	    value: function type(data) {
	      return toString.call(data).slice(8, -1).toLowerCase();
	    }
	  }]);

	  return Carousel;
	}();

	exports.default = Carousel;

/***/ }
/******/ ]);
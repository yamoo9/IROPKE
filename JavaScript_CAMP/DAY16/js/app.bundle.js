/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/*! app.js © yamoo9.net, 2016 */
	// Front-End Develop
	// (function(global){
	//   'use strict';
	
	// })(this);
	
	//////////////////////////////////
	// ES6 모듈 로드 방식
	// import './modules/currency';
	//////////////////////////////////
	
	/////////////////////////
	// Server-Side Develop //
	/////////////////////////
	
	// Node.js 내장(기본) 모듈
	// CommonJS 진영의 모듈 로더 방법
	// let path = require('path');
	// console.log( path.join(__dirname, 'css') );
	
	/////////////////////
	// 외부 파일 모듈 로드 //
	/////////////////////
	let currency = __webpack_require__(/*! ./modules/currency */ 1);
	// let result   = currency(3241000);
	
	////////////////
	// DOM Script //
	////////////////
	// let body    = document.querySelector('body');
	// let new_div = document.createElement('div');
	// body.appendChild(new_div);
	// new_div.innerHTML = result;
	
	////////////
	// jQuery //
	////////////
	// let $ = require('jquery');
	// $('div').append(`<p>using jQuery: ${result}</p>`);
	
	let $currencies = $('[data-currency]');
	$.each($currencies, (idx)=>{
	  let $currency = $currencies.eq(idx);
	  let result = null;
	  let sign = $currency.data('currency');
	  if( sign === '' ) {
	    result = currency($currency.text());
	  } else {
	    result = currency($currency.text(), sign);
	  }
	  $currency.text( result );
	});
	
	
	// webpack - module bundler
	
	// webpack {entry.js} {bundle.js}
	// webpack {entry.js} {bundle.js} -p // 압축
	// webpack {entry.js} {bundle.js} -w // 관찰
	// webpack {entry.js} {bundle.js} -d // 소스맵


/***/ },
/* 1 */
/*!********************************!*\
  !*** ./js/modules/currency.js ***!
  \********************************/
/***/ function(module, exports) {

	/*! currency.js © yamoo9.net, 2016 */
	'use strict';
	
	let currency = (n=1000, sign='원', position='after')=> {
	  // 1. 전달인자 숫자/문자 → 배열화
	  n = (n+'').split('');
	
	  // 2. 배열 데이터 순환
	  for (let i = n.length - 3; i>0; i-=3 ) {
	    // 3. 끝에서 3번째 자리마다 앞에 콤마(,) 삽입
	    n.splice(i, 0, ',');
	  }
	  // 4. 배열 → 문자화 후에 결과 반환
	  let result_currency = n.join('');
	  return position==='after' ?
	    result_currency + sign :
	    sign + result_currency;
	};
	
	// 모듈 공개(외부로 노출)
	module.exports = currency;


/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
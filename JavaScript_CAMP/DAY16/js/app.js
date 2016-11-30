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
let currency = require('./modules/currency');
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

/////////
// CLI //
/////////
// webpack {entry.js} {bundle.js}
// webpack {entry.js} {bundle.js} -p // 압축
// webpack {entry.js} {bundle.js} -w // 관찰
// webpack {entry.js} {bundle.js} -d // 소스맵
